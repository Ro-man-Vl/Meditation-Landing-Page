const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// ------ Configuration
const path = require("./config/path.js");
const app = require("./config/app.js");

// ------ Tasks
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const css = require('./task/css.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const font = require('./task/font.js');

// ------ Server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        },
        notify: false
    })
}

// ------ Watching
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload);
    watch(path.css.watch, css).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
}

// ------ Tasks
exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.font = font;

// ------ Work modes
const build = series(
    clear,
    parallel(html, css, js, img, font),
);

const dev = series(
    build,
    parallel(watcher, server)
);

// ------ Build
exports.default = app.isProd
? build
: dev;