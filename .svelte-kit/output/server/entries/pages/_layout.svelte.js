import { D as push, G as pop, I as FILENAME, J as slot } from "../../chunks/index.js";
import "../../chunks/client.js";
Analytics[FILENAME] = "src/components/Analytics.svelte";
function Analytics($$payload, $$props) {
  push(Analytics);
  pop();
}
Analytics.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_layout[FILENAME] = "src/routes/+layout.svelte";
function _layout($$payload, $$props) {
  push(_layout);
  Analytics();
  $$payload.out.push(`<!----> <!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!---->`);
  pop();
}
_layout.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _layout as default
};
