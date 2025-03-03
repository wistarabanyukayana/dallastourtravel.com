import gulp from "gulp";
import browserSync from "browser-sync";
import csso from "gulp-csso";
import terser from "gulp-terser";
import htmlmin from "gulp-htmlmin";
import imagemin from "gulp-imagemin";
import rev from "gulp-rev";
import revRewrite from "gulp-rev-rewrite";
import { deleteAsync as del } from "del";

const sync = browserSync.create();
const isProd = process.env.NODE_ENV === "production";

// Clean dist directory
function clean() {
  return del(["dist/**", "!dist"]);
}

// Optimize CSS
function css() {
  return gulp
    .src(["css/*.css", "!css/*.min.css"])
    .pipe(
      csso({
        restructure: true,
        comments: "exclamation",
      })
    )
    .pipe(gulp.dest("dist/css"))
    .pipe(sync.stream());
}

// Optimize JS
function js() {
  return gulp
    .src(["js/*.js", "!js/*.min.js"])
    .pipe(
      terser({
        ecma: 2020,
        keep_fnames: true,
      })
    )
    .pipe(gulp.dest("dist/js"));
}

// Optimize images
function images() {
  return gulp
    .src(["assets/img/**/*.{png,jpg,jpeg,gif,svg}", "!assets/img/loader.gif"])
    .pipe(imagemin())
    .on("end", () => console.log("Images optimized successfully"))
    .pipe(gulp.dest("dist/assets/img"));
}

// Add separate task for loader.gif
function copyLoader() {
  return gulp.src("assets/img/loader.gif").pipe(gulp.dest("dist/assets/img"));
}

// Copy other assets
function copyAssets() {
  return gulp
    .src(["assets/favicons/**", "assets/fonts/**"], { base: "." })
    .pipe(gulp.dest("dist"));
}

// HTML processing
function html() {
  return gulp
    .src(["**/*.{html,shtml}", "!node_modules/**"]) // Add shtml extension
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest("dist"));
}

// Revision assets
function revision() {
  return gulp
    .src(["dist/css/**/*.css", "dist/js/**/*.js", "dist/assets/img/**/*"], {
      base: "dist",
      allowEmpty: true, // Add this to prevent errors if no files are found
    })
    .pipe(rev())
    .pipe(gulp.dest("dist"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("dist"));
}

// Rewrite HTML with revved assets
function revRewriteHtml() {
  return gulp
    .src("dist/rev-manifest.json", { allowEmpty: true })
    .pipe(gulp.src("dist/**/*.{html,shtml}"))
    .pipe(revRewrite())
    .pipe(gulp.dest("dist"));
}

// Development server
function serve(done) {
  sync.init({
    server: {
      baseDir: "dist",
      serveStaticOptions: {
        extensions: ["html", "shtml"], // Add shtml extension
        setHeaders: (res, path) => {
          if (path.endsWith(".js")) {
            res.setHeader("Content-Type", "application/javascript");
          }
        },
      },
    },
    // ... rest of config
  });
  done();
}

// Watch files
function watch() {
  gulp.watch("css/*.css", gulp.series(css, reload));
  gulp.watch("js/*.js", gulp.series(js, reload));
  gulp.watch("assets/img/**/*", gulp.series(images, reload));
  gulp.watch("**/*.{html,shtml}", gulp.series(html, reload));
}

// Reload browser
function reload(done) {
  sync.reload();
  done();
}

// Update build sequence
const build = gulp.series(
  clean,
  gulp.parallel(css, js, images, copyAssets, html, copyLoader),
  revision,
  revRewriteHtml
);

// Development workflow
const dev = gulp.series(build, gulp.parallel(serve, watch));

// Export tasks
export { clean, build, dev as default };
