import { D as push, P as fallback, Q as attr_class, R as clsx, M as push_element, J as slot, O as pop_element, S as bind_props, G as pop, I as FILENAME } from "./index.js";
Card[FILENAME] = "src/components/ui/Card.svelte";
function Card($$payload, $$props) {
  push(Card);
  let classes;
  let className = fallback($$props["className"], "");
  let variant = fallback($$props["variant"], "default");
  let padding = fallback($$props["padding"], "default");
  let hover = fallback($$props["hover"], false);
  classes = [
    "card",
    `card--${variant}`,
    `card--padding-${padding}`,
    hover && "card--hover",
    className
  ].filter(Boolean).join(" ");
  $$payload.out.push(`<div${attr_class(clsx(classes), "svelte-10s1yvs")}>`);
  push_element($$payload, "div", 17, 0);
  $$payload.out.push(`<!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></div>`);
  pop_element();
  bind_props($$props, { className, variant, padding, hover });
  pop();
}
Card.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  Card as C
};
