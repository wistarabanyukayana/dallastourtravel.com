# Dallas Tour Travel Website

A responsive website for Dallas Tour Travel, built with pure HTML, CSS, and JavaScript. This project showcases travel packages, galleries, articles, and company information for PT. Delta Laras Wisata.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Serving Locally](#serving-locally)
- [Customization](#customization)
- [License](#license)
- [Contact](#contact)

## Features

- Responsive design for desktop and mobile
- Travel package pages (Haji, Umroh, Wisata Halal)
- Gallery and articles
- Privacy policy and terms pages
- Custom forms and sliders
- Optimized assets and CSS
- Easy to extend and maintain

## Project Structure

```
.
├── assets/                # Images, fonts, favicons
├── css/                   # Stylesheets (Bootstrap, custom, responsive, color)
├── js/                    # JavaScript files
├── haji/                  # Haji package pages
├── umroh/                 # Umroh package pages
├── wisata-halal/          # Halal tourism package pages
├── index.html             # Main landing page
├── artikel.html           # Articles
├── galeri.html            # Gallery
├── kebijakan-privasi.html # Privacy policy
├── syarat-ketentuan.html  # Terms & conditions
├── tentang-dallas.html    # About page
├── 404.shtml              # Custom 404 page
├── gulpfile.js            # Gulp build configuration
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation
└── ...                    # Other supporting files
```

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/wistarabanyukayana/dallastourtravel.com.git
   cd dallastourtravel.com
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Development

To start a development server with live reloading:

```sh
npm run dev
```

## Build

To build the project for production (minifies HTML, CSS, JS, and optimizes assets):

```sh
npm run build
```

## Serving Locally

After building, serve the `dist` folder locally:

```sh
npm run serve
```

## Customization

- **Styles:** Edit files in [`css/`](css/) for custom styles.
- **Assets:** Add images, fonts, and icons in [`assets/`](assets/).
- **Pages:** Modify or add HTML files for new sections.
- **Gulp Tasks:** Update [`gulpfile.js`](gulpfile.js) for custom build steps.

## License

This project and its source code are proprietary and confidential to PT. Delta Laras Wisata. Unauthorized copying, distribution, or use of this code, via any medium, is strictly prohibited. No open source license is granted. See [`LICENSE`](LICENSE) for details.

**Note:** The MIT License was previously included in error. This project has always been intended as proprietary software. If you received a copy under the MIT License, please disregard and refer to the current proprietary terms.

## Contact

For issues, suggestions, or contributions, please visit the [GitHub Issues page](https://github.com/wistarabanyukayana/dallastourtravel.com/issues).

---

**PT. Delta Laras Wisata**  
Website: [dallastourtravel.com](https://dallastourtravel.com)

To deploy website

1. do `npm run clean` in folder root with admin access
2. do `npm run build` in folder root with admin access
3. do github commit
4. do github pull in cpanel
5. do deploy in cpanel
