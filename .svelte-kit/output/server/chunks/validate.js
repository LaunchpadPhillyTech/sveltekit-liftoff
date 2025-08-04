import { U as snippet_without_render_tag } from "./index2.js";
function prevent_snippet_stringification(fn) {
  fn.toString = () => {
    snippet_without_render_tag();
    return "";
  };
  return fn;
}
export {
  prevent_snippet_stringification as p
};
