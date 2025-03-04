import gulp from "gulp";
import browserSync from "browser-sync";
import csso from "gulp-csso";
import terser from "gulp-terser";
import htmlmin from "gulp-htmlmin";
import imagemin from "gulp-imagemin";
import rev from "gulp-rev";
import revDelete from "gulp-rev-delete-original";
import revRewrite from "gulp-rev-rewrite";
import { deleteAsync as del } from "del";
import fs from "fs";

const sync = browserSync.create();
const isProd = process.env.NODE_ENV === "production";

// Clean dist directory
function clean() {
  return del(["dist/**", "!dist"]);
}

// Update CSS processing
function css() {
  return gulp
    .src("css/**/*.css", { base: "css" }) // Maintain directory structure
    .pipe(csso())
    .pipe(gulp.dest("dist/css"))
    .pipe(sync.stream());
}

// Update JS processing
function js() {
  return gulp
    .src("js/**/*.js", { base: "js" }) // Maintain directory structure
    .pipe(terser())
    .pipe(gulp.dest("dist/js"));
}

// Update image optimization
function images() {
  return gulp
    .src(["assets/img/**/*", "!assets/img/index.html"], {
      base: "assets/img",
      encoding: false,
    }) // Maintain directory structure
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest("dist/assets/img"));
}

// Add separate task for loader.gif
function copyLoader() {
  return gulp.src("assets/img/loader.gif").pipe(gulp.dest("dist/assets/img"));
}

// Copy other assets
function copyAssets() {
  return gulp
    .src(["assets/favicons/**", "assets/fonts/**"], {
      base: ".",
      encoding: false,
    })
    .pipe(gulp.dest("dist"));
}

// Update HTML processing
function html() {
  return gulp
    .src("**/*.{html,shtml}", { base: "." })
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        quoteCharacter: '"',
        keepClosingSlash: true, // For SVG/XML compatibility
      })
    )
    .pipe(gulp.dest("dist"));
}

function revision() {
  return gulp
    .src(["dist/css/**/*.css", "dist/js/**/*.js", "dist/assets/img/**/*"], {
      base: "dist",
      allowEmpty: true,
      encoding: false,
    })
    .pipe(rev())
    .pipe(revDelete())
    .pipe(gulp.dest("dist"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("dist"));
}

function revRewriteHtml() {
  // Read manifest as a stream and merge with HTML files
  const manifest = fs.readFileSync("dist/rev-manifest.json");

  return gulp
    .src("dist/**/*.{html,shtml}")
    .pipe(revRewrite({ manifest }))
    .pipe(gulp.dest("dist"));
}

function serve(done) {
  sync.init({
    server: {
      baseDir: "dist",
      serveStaticOptions: {
        extensions: ["html"],
        setHeaders: (res, path) => {
          // Set correct MIME types
          const mimeTypes = {
            ".css": "text/css",
            ".js": "application/javascript",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".gif": "image/gif",
            ".svg": "image/svg+xml",
          };

          const ext = path.match(/\.\w+$/)?.[0];
          if (ext && mimeTypes[ext]) {
            res.setHeader("Content-Type", mimeTypes[ext]);
          }
        },
      },
    },
    port: 3000,
    open: false,
    notify: false,
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

const build = gulp.series(
  clean,
  gulp.parallel(css, js, images, copyAssets, html),
  revision,
  revRewriteHtml
);

// Development workflow
const dev = gulp.series(build, gulp.parallel(serve, watch));

// Export tasks
export { clean, build, dev as default };
