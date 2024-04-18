const { task } = require("gulp");
const { glob } = require("glob");
const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");

task("bundle-css", async () => {
  return gulp
    .src(["packages/ui/lib/tailwind.css", "lib/style.css"])
    .pipe(concat("index.css"))
    .pipe(cleanCss())
    .pipe(
      gulp.dest("packages/ui/lib", {
        overwrite: true,
      })
    );
});

task("clean", async () => {
  return import("del").then((del) => {
    return del.deleteAsync(["packages/ui/lib/tailwind.css", "lib"]);
  });
});

task("copy-tailwindconfig", function () {
  return gulp
    .src("packages/ui/src/tailwind-config.ts")
    .pipe(gulp.dest("packages/ui/lib"));
});

task("bundle", gulp.series("bundle-css", "clean", "copy-tailwindconfig"));
