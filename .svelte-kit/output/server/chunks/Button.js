import { D as push, M as push_element, O as pop_element, G as pop, I as FILENAME, P as fallback, T as attr, Q as attr_class, R as clsx, J as slot, S as bind_props } from "./index.js";
import "./client.js";
Header[FILENAME] = "src/components/layout/Header.svelte";
function Header($$payload, $$props) {
  push(Header);
  $$payload.out.push(`<header class="header svelte-2tt4hj">`);
  push_element($$payload, "header", 42, 0);
  $$payload.out.push(`<div class="container svelte-2tt4hj">`);
  push_element($$payload, "div", 43, 2);
  $$payload.out.push(`<div class="logo svelte-2tt4hj">`);
  push_element($$payload, "div", 44, 4);
  $$payload.out.push(`GY6AI</div>`);
  pop_element();
  $$payload.out.push(` <nav class="svelte-2tt4hj">`);
  push_element($$payload, "nav", 45, 4);
  $$payload.out.push(`<button class="svelte-2tt4hj">`);
  push_element($$payload, "button", 46, 6);
  $$payload.out.push(`Home</button>`);
  pop_element();
  $$payload.out.push(` <button class="svelte-2tt4hj">`);
  push_element($$payload, "button", 47, 6);
  $$payload.out.push(`Features</button>`);
  pop_element();
  $$payload.out.push(` <button class="svelte-2tt4hj">`);
  push_element($$payload, "button", 48, 6);
  $$payload.out.push(`Proof</button>`);
  pop_element();
  $$payload.out.push(` <button class="careers-btn svelte-2tt4hj">`);
  push_element($$payload, "button", 49, 6);
  $$payload.out.push(`Careers</button>`);
  pop_element();
  $$payload.out.push(`</nav>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</header>`);
  pop_element();
  pop();
}
Header.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Footer[FILENAME] = "src/components/layout/Footer.svelte";
function Footer($$payload, $$props) {
  push(Footer);
  $$payload.out.push(`<footer class="footer svelte-12jhn8s">`);
  push_element($$payload, "footer", 2, 0);
  $$payload.out.push(`<div class="container svelte-12jhn8s">`);
  push_element($$payload, "div", 3, 2);
  $$payload.out.push(`<p>`);
  push_element($$payload, "p", 4, 4);
  $$payload.out.push(`© 2024 GY6AI. All rights reserved.</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</footer>`);
  pop_element();
  pop();
}
Footer.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Button[FILENAME] = "src/components/ui/Button.svelte";
function Button($$payload, $$props) {
  push(Button);
  let classes;
  let variant = fallback($$props["variant"], "primary");
  let size = fallback($$props["size"], "medium");
  let disabled = fallback($$props["disabled"], false);
  let loading = fallback($$props["loading"], false);
  let href = fallback($$props["href"], null);
  let type = fallback($$props["type"], "button");
  let fullWidth = fallback($$props["fullWidth"], false);
  classes = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && "btn--full-width",
    disabled && "btn--disabled",
    loading && "btn--loading"
  ].filter(Boolean).join(" ");
  if (href) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<a${attr("href", href)}${attr_class(clsx(classes), "svelte-1m1mych")}>`);
    push_element($$payload, "a", 34, 2);
    if (loading) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="spinner svelte-1m1mych">`);
      push_element($$payload, "span", 36, 6);
      $$payload.out.push(`</span>`);
      pop_element();
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <!---->`);
    slot($$payload, $$props, "default", {});
    $$payload.out.push(`<!----></a>`);
    pop_element();
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<button${attr("type", type)}${attr_class(clsx(classes), "svelte-1m1mych")}${attr("disabled", disabled, true)}>`);
    push_element($$payload, "button", 41, 2);
    if (loading) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="spinner svelte-1m1mych">`);
      push_element($$payload, "span", 43, 6);
      $$payload.out.push(`</span>`);
      pop_element();
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--> <!---->`);
    slot($$payload, $$props, "default", {});
    $$payload.out.push(`<!----></button>`);
    pop_element();
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { variant, size, disabled, loading, href, type, fullWidth });
  pop();
}
Button.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  Button as B,
  Footer as F,
  Header as H
};
