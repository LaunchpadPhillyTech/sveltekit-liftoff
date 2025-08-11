import { a0 as sanitize_props, a1 as rest_props, D as push, P as fallback, M as push_element, T as attr, N as escape_html, O as pop_element, a2 as spread_attributes, R as clsx, S as bind_props, G as pop, I as FILENAME } from "./index.js";
Input[FILENAME] = "src/components/ui/Input.svelte";
function Input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "value",
    "type",
    "placeholder",
    "disabled",
    "required",
    "readonly",
    "maxlength",
    "rows",
    "className",
    "label",
    "error",
    "hint"
  ]);
  push(Input);
  let isTextarea, inputClasses;
  let value = fallback($$props["value"], "");
  let type = fallback($$props["type"], "text");
  let placeholder = fallback($$props["placeholder"], "");
  let disabled = fallback($$props["disabled"], false);
  let required = fallback($$props["required"], false);
  let readonly = fallback($$props["readonly"], false);
  let maxlength = fallback($$props["maxlength"], void 0);
  let rows = fallback($$props["rows"], void 0);
  let className = fallback($$props["className"], "");
  let label = fallback($$props["label"], "");
  let error = fallback($$props["error"], "");
  let hint = fallback($$props["hint"], "");
  isTextarea = type === "textarea";
  inputClasses = [
    "input",
    error && "input--error",
    disabled && "input--disabled",
    readonly && "input--readonly",
    className
  ].filter(Boolean).join(" ");
  $$payload.out.push(`<div class="input-group svelte-l2q4u">`);
  push_element($$payload, "div", 47, 0);
  if (label) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<label class="input-label svelte-l2q4u"${attr("for", $$sanitized_props.id)}>`);
    push_element($$payload, "label", 49, 4);
    $$payload.out.push(`${escape_html(label)} `);
    if (required) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="required svelte-l2q4u">`);
      push_element($$payload, "span", 52, 8);
      $$payload.out.push(`*</span>`);
      pop_element();
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></label>`);
    pop_element();
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (isTextarea) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<textarea${spread_attributes(
      {
        class: clsx(inputClasses),
        placeholder,
        disabled,
        required,
        readonly,
        maxlength,
        rows,
        ...$$restProps
      },
      "svelte-l2q4u"
    )}>`);
    push_element($$payload, "textarea", 58, 4);
    const $$body = escape_html(value);
    if ($$body) {
      $$payload.out.push(`${$$body}`);
    }
    $$payload.out.push(`</textarea>`);
    pop_element();
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<input${spread_attributes(
      {
        class: clsx(inputClasses),
        type,
        value,
        placeholder,
        disabled,
        required,
        readonly,
        maxlength,
        ...$$restProps
      },
      "svelte-l2q4u"
    )}/>`);
    push_element($$payload, "input", 74, 4);
    pop_element();
  }
  $$payload.out.push(`<!--]--> `);
  if (hint && !error) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p class="input-hint svelte-l2q4u">`);
    push_element($$payload, "p", 92, 4);
    $$payload.out.push(`${escape_html(hint)}</p>`);
    pop_element();
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  if (error) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p class="input-error svelte-l2q4u">`);
    push_element($$payload, "p", 96, 4);
    $$payload.out.push(`${escape_html(error)}</p>`);
    pop_element();
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div>`);
  pop_element();
  bind_props($$props, {
    value,
    type,
    placeholder,
    disabled,
    required,
    readonly,
    maxlength,
    rows,
    className,
    label,
    error,
    hint
  });
  pop();
}
Input.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  Input as I
};
