import copy from "rollup-plugin-copy";
import serve from "rollup-plugin-serve";
import scss from "rollup-plugin-scss";
import livereload from "rollup-plugin-livereload";

export default {
  input: "src/app.js",
  output: {
    file: "dist/app.js",
    format: "cjs",
  },
  plugins: [
    copy({
      targets: [{ src: "src/index.html", dest: "dist" }],
    }),
    scss(),
    serve("dist"),
    livereload("dist"),
  ],
};
