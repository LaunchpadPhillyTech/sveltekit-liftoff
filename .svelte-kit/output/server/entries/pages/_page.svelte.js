import { B as push, J as push_element, M as pop_element, E as pop, F as FILENAME, O as fallback, P as attr, Q as attr_class, R as clsx, G as slot, S as bind_props, K as escape_html, T as head } from "../../chunks/index2.js";
import { d as derived, r as readable, w as writable } from "../../chunks/index.js";
import { p as prevent_snippet_stringification } from "../../chunks/validate.js";
Header[FILENAME] = "src/components/layout/Header.svelte";
function Header($$payload, $$props) {
  push(Header);
  $$payload.out.push(`<header class="header svelte-1o5182x">`);
  push_element($$payload, "header", 11, 0);
  $$payload.out.push(`<div class="container svelte-1o5182x">`);
  push_element($$payload, "div", 12, 2);
  $$payload.out.push(`<div class="logo svelte-1o5182x">`);
  push_element($$payload, "div", 13, 4);
  $$payload.out.push(`GY6AI</div>`);
  pop_element();
  $$payload.out.push(` <nav class="svelte-1o5182x">`);
  push_element($$payload, "nav", 14, 4);
  $$payload.out.push(`<button class="svelte-1o5182x">`);
  push_element($$payload, "button", 15, 6);
  $$payload.out.push(`Home</button>`);
  pop_element();
  $$payload.out.push(` <button class="svelte-1o5182x">`);
  push_element($$payload, "button", 16, 6);
  $$payload.out.push(`Features</button>`);
  pop_element();
  $$payload.out.push(` <button class="svelte-1o5182x">`);
  push_element($$payload, "button", 17, 6);
  $$payload.out.push(`Proof</button>`);
  pop_element();
  $$payload.out.push(`</nav>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</header>`);
  pop_element();
  pop();
}
Header.render = function () {
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
Footer.render = function () {
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
    $$payload.out.push(`<a${attr("href", href)}${attr_class(clsx(classes), "svelte-1vb27mv")}>`);
    push_element($$payload, "a", 32, 2);
    if (loading) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="spinner svelte-1vb27mv">`);
      push_element($$payload, "span", 34, 6);
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
    $$payload.out.push(`<button${attr("type", type)}${attr_class(clsx(classes), "svelte-1vb27mv")}${attr("disabled", disabled, true)}>`);
    push_element($$payload, "button", 39, 2);
    if (loading) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<span class="spinner svelte-1vb27mv">`);
      push_element($$payload, "span", 41, 6);
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
Button.render = function () {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Badge[FILENAME] = "src/components/ui/Badge.svelte";
function Badge($$payload, $$props) {
  push(Badge);
  let classes;
  let variant = fallback($$props["variant"], "default");
  let size = fallback($$props["size"], "medium");
  let outline = fallback($$props["outline"], false);
  classes = [
    "badge",
    `badge--${variant}`,
    `badge--${size}`,
    outline && "badge--outline"
  ].filter(Boolean).join(" ");
  $$payload.out.push(`<span${attr_class(clsx(classes), "svelte-1r5b8e")}>`);
  push_element($$payload, "span", 15, 0);
  $$payload.out.push(`<!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></span>`);
  pop_element();
  bind_props($$props, { variant, size, outline });
  pop();
}
Badge.render = function () {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
const currentSalary = writable(3e3);
const monthlySavings = derived(
  currentSalary,
  ($currentSalary) => $currentSalary - 97
);
derived(
  monthlySavings,
  ($monthlySavings) => $monthlySavings * 12
);
derived(
  monthlySavings,
  ($monthlySavings) => Math.round($monthlySavings / 97 * 100)
);
readable([
  {
    id: 1,
    message: "🎉 Sarah from Denver just got her Revenue Robot setup!",
    location: "Denver, CO",
    timestamp: /* @__PURE__ */ new Date(),
    type: "signup"
  },
  {
    id: 2,
    message: "💰 Mike's Restaurant increased bookings by 47% this week!",
    location: "Miami, FL",
    timestamp: /* @__PURE__ */ new Date(),
    type: "success"
  },
  {
    id: 3,
    message: "⚡ Jessica's Revenue Robot generated 23 leads yesterday!",
    location: "Austin, TX",
    timestamp: /* @__PURE__ */ new Date(),
    type: "leads"
  },
  {
    id: 4,
    message: "🚀 Tom's Auto Shop booked 15 appointments while he slept!",
    location: "Phoenix, AZ",
    timestamp: /* @__PURE__ */ new Date(),
    type: "booking"
  },
  {
    id: 5,
    message: "📈 Lisa's boutique saw 31% more sales since setup!",
    location: "Seattle, WA",
    timestamp: /* @__PURE__ */ new Date(),
    type: "sales"
  },
  {
    id: 6,
    message: "🔥 David's gym signed 12 new members via chatbot today!",
    location: "Chicago, IL",
    timestamp: /* @__PURE__ */ new Date(),
    type: "conversion"
  }
]);
Hero[FILENAME] = "src/components/sections/Hero.svelte";
function Hero($$payload, $$props) {
  push(Hero);
  let onSeeProof = fallback($$props["onSeeProof"], () => {
  });
  let scarcityCount = 23;
  $$payload.out.push(`<section class="hero">`);
  push_element($$payload, "section", 35, 0);
  $$payload.out.push(`<div class="hero-content">`);
  push_element($$payload, "div", 36, 2);
  $$payload.out.push(`<div class="value-stack-badge">`);
  push_element($$payload, "div", 37, 4);
  $$payload.out.push(`<span class="strike-through">`);
  push_element($$payload, "span", 38, 6);
  $$payload.out.push(`$5,485 Value</span>`);
  pop_element();
  $$payload.out.push(` <span class="highlight">`);
  push_element($$payload, "span", 39, 6);
  $$payload.out.push(`FREE Today</span>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <h1>`);
  push_element($$payload, "h1", 42, 4);
  $$payload.out.push(`The 24/7 Revenue Robot That Never Sleeps, Calls In Sick, Or Asks For A
      Raise</h1>`);
  pop_element();
  $$payload.out.push(` <p class="hero-subheader">`);
  push_element($$payload, "p", 47, 4);
  $$payload.out.push(`Replace expensive customer service staff with an AI employee that converts
      63% more leads, works 24/7, and pays for itself in 30 days. <strong>`);
  push_element($$payload, "strong", 50, 6);
  $$payload.out.push(`Setup guaranteed in 24 hours or we pay YOU $500.</strong>`);
  pop_element();
  $$payload.out.push(`</p>`);
  pop_element();
  $$payload.out.push(` <div class="urgency-banner">`);
  push_element($$payload, "div", 53, 4);
  $$payload.out.push(`<span class="urgency-text">`);
  push_element($$payload, "span", 54, 6);
  $$payload.out.push(`⚡ Only ${escape_html(scarcityCount)} Revenue Robot setups left this month</span>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div class="hero-cta">`);
    push_element($$payload, "div", 60, 6);
    Button($$payload, {
      variant: "primary",
      size: "large",
      children: prevent_snippet_stringification(($$payload2) => {
        $$payload2.out.push(`<!---->Get My Revenue Robot Now`);
      }),
      $$slots: { default: true }
    });
    $$payload.out.push(`<!----> `);
    Button($$payload, {
      variant: "secondary",
      size: "large",
      children: prevent_snippet_stringification(($$payload2) => {
        $$payload2.out.push(`<!---->See 63% Conversion Proof`);
      }),
      $$slots: { default: true }
    });
    $$payload.out.push(`<!----></div>`);
    pop_element();
  }
  $$payload.out.push(`<!--]--> <div class="guarantee-badges">`);
  push_element($$payload, "div", 73, 4);
  Badge($$payload, {
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<!---->90-Day Money Back`);
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Badge($$payload, {
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<!---->24-Hour Setup`);
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Badge($$payload, {
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<!---->10+ Leads Guaranteed`);
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</section>`);
  pop_element();
  bind_props($$props, { onSeeProof });
  pop();
}
Hero.render = function () {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Stats[FILENAME] = "src/components/sections/Stats.svelte";
function Stats($$payload, $$props) {
  push(Stats);
  let id = fallback($$props["id"], "stats");
  $$payload.out.push(`<section${attr("id", id)} class="stats section svelte-feuhdv">`);
  push_element($$payload, "section", 6, 0);
  $$payload.out.push(`<div class="container">`);
  push_element($$payload, "div", 7, 2);
  $$payload.out.push(`<h2 class="svelte-feuhdv">`);
  push_element($$payload, "h2", 8, 4);
  $$payload.out.push(`Proven Results</h2>`);
  pop_element();
  $$payload.out.push(` <div class="stats-grid svelte-feuhdv">`);
  push_element($$payload, "div", 9, 4);
  $$payload.out.push(`<div class="stat svelte-feuhdv">`);
  push_element($$payload, "div", 10, 6);
  $$payload.out.push(`<div class="number svelte-feuhdv">`);
  push_element($$payload, "div", 11, 8);
  $$payload.out.push(`63%</div>`);
  pop_element();
  $$payload.out.push(` <div class="label svelte-feuhdv">`);
  push_element($$payload, "div", 12, 8);
  $$payload.out.push(`More Leads</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="stat svelte-feuhdv">`);
  push_element($$payload, "div", 14, 6);
  $$payload.out.push(`<div class="number svelte-feuhdv">`);
  push_element($$payload, "div", 15, 8);
  $$payload.out.push(`24/7</div>`);
  pop_element();
  $$payload.out.push(` <div class="label svelte-feuhdv">`);
  push_element($$payload, "div", 16, 8);
  $$payload.out.push(`Always Working</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="stat svelte-feuhdv">`);
  push_element($$payload, "div", 18, 6);
  $$payload.out.push(`<div class="number svelte-feuhdv">`);
  push_element($$payload, "div", 19, 8);
  $$payload.out.push(`$0</div>`);
  pop_element();
  $$payload.out.push(` <div class="label svelte-feuhdv">`);
  push_element($$payload, "div", 20, 8);
  $$payload.out.push(`Sick Days</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</section>`);
  pop_element();
  bind_props($$props, { id });
  pop();
}
Stats.render = function () {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Features[FILENAME] = "src/components/sections/Features.svelte";
function Features($$payload, $$props) {
  push(Features);
  let id = fallback($$props["id"], "features");
  $$payload.out.push(`<section${attr("id", id)} class="features section svelte-yeij7o">`);
  push_element($$payload, "section", 6, 0);
  $$payload.out.push(`<div class="container">`);
  push_element($$payload, "div", 7, 2);
  $$payload.out.push(`<h2 class="svelte-yeij7o">`);
  push_element($$payload, "h2", 8, 4);
  $$payload.out.push(`Why Choose GY6AI?</h2>`);
  pop_element();
  $$payload.out.push(` <div class="features-grid svelte-yeij7o">`);
  push_element($$payload, "div", 9, 4);
  $$payload.out.push(`<div class="feature svelte-yeij7o">`);
  push_element($$payload, "div", 10, 6);
  $$payload.out.push(`<h3 class="svelte-yeij7o">`);
  push_element($$payload, "h3", 11, 8);
  $$payload.out.push(`🤖 AI-Powered</h3>`);
  pop_element();
  $$payload.out.push(` <p>`);
  push_element($$payload, "p", 12, 8);
  $$payload.out.push(`Advanced AI that learns and improves over time</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="feature svelte-yeij7o">`);
  push_element($$payload, "div", 14, 6);
  $$payload.out.push(`<h3 class="svelte-yeij7o">`);
  push_element($$payload, "h3", 15, 8);
  $$payload.out.push(`⚡ Lightning Fast</h3>`);
  pop_element();
  $$payload.out.push(` <p>`);
  push_element($$payload, "p", 16, 8);
  $$payload.out.push(`Responds to customers instantly, 24/7</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="feature svelte-yeij7o">`);
  push_element($$payload, "div", 18, 6);
  $$payload.out.push(`<h3 class="svelte-yeij7o">`);
  push_element($$payload, "h3", 19, 8);
  $$payload.out.push(`📈 Boost Sales</h3>`);
  pop_element();
  $$payload.out.push(` <p>`);
  push_element($$payload, "p", 20, 8);
  $$payload.out.push(`Convert 63% more leads into paying customers</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</section>`);
  pop_element();
  bind_props($$props, { id });
  pop();
}
Features.render = function () {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Guarantees[FILENAME] = "src/components/sections/Guarantees.svelte";
function Guarantees($$payload, $$props) {
  push(Guarantees);
  $$payload.out.push(`<section class="guarantees section svelte-qj040">`);
  push_element($$payload, "section", 2, 0);
  $$payload.out.push(`<div class="container">`);
  push_element($$payload, "div", 3, 2);
  $$payload.out.push(`<h2 class="svelte-qj040">`);
  push_element($$payload, "h2", 4, 4);
  $$payload.out.push(`Our Guarantees</h2>`);
  pop_element();
  $$payload.out.push(` <div class="guarantee-grid svelte-qj040">`);
  push_element($$payload, "div", 5, 4);
  $$payload.out.push(`<div class="guarantee svelte-qj040">`);
  push_element($$payload, "div", 6, 6);
  $$payload.out.push(`<h3>`);
  push_element($$payload, "h3", 7, 8);
  $$payload.out.push(`90-Day Money Back</h3>`);
  pop_element();
  $$payload.out.push(` <p>`);
  push_element($$payload, "p", 8, 8);
  $$payload.out.push(`Not satisfied? Get a full refund.</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="guarantee svelte-qj040">`);
  push_element($$payload, "div", 10, 6);
  $$payload.out.push(`<h3>`);
  push_element($$payload, "h3", 11, 8);
  $$payload.out.push(`24-Hour Setup</h3>`);
  pop_element();
  $$payload.out.push(` <p>`);
  push_element($$payload, "p", 12, 8);
  $$payload.out.push(`Your chatbot will be live within 24 hours.</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</section>`);
  pop_element();
  pop();
}
Guarantees.render = function () {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
FinalCTA[FILENAME] = "src/components/sections/FinalCTA.svelte";
function FinalCTA($$payload, $$props) {
  push(FinalCTA);
  let id = fallback($$props["id"], "final-cta");
  $$payload.out.push(`<section${attr("id", id)} class="final-cta section svelte-3410bc">`);
  push_element($$payload, "section", 6, 0);
  $$payload.out.push(`<div class="container">`);
  push_element($$payload, "div", 7, 2);
  $$payload.out.push(`<h2 class="svelte-3410bc">`);
  push_element($$payload, "h2", 8, 4);
  $$payload.out.push(`Ready to Transform Your Business?</h2>`);
  pop_element();
  $$payload.out.push(` <p class="svelte-3410bc">`);
  push_element($$payload, "p", 9, 4);
  $$payload.out.push(`Join thousands of businesses already using GY6AI</p>`);
  pop_element();
  $$payload.out.push(` <button class="cta-button svelte-3410bc">`);
  push_element($$payload, "button", 10, 4);
  $$payload.out.push(`Get Started Now - FREE</button>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</section>`);
  pop_element();
  bind_props($$props, { id });
  pop();
}
FinalCTA.render = function () {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_page[FILENAME] = "src/routes/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  function handleGetStarted() {
  }
  function handleSeeProof() {
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>GY6AI - Revolutionary AI Chatbots for Small Business</title>`;
    $$payload2.out.push(`<meta name="description" content="Transform your small business with AI chatbots. Multi-platform integration, 63% conversion boost. Start your free trial today - no credit card required." class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 64, 2);
    pop_element();
    $$payload2.out.push(` <meta name="viewport" content="width=device-width, initial-scale=1.0" class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 68, 2);
    pop_element();
    $$payload2.out.push(` <meta property="og:type" content="website" class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 71, 2);
    pop_element();
    $$payload2.out.push(` <meta property="og:url" content="https://GY6AI.com/" class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 72, 2);
    pop_element();
    $$payload2.out.push(` <meta property="og:title" content="GY6AI - Revolutionary AI Chatbots" class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 73, 2);
    pop_element();
    $$payload2.out.push(` <meta property="og:description" content="Transform your small business with AI chatbots. Multi-platform integration, 63% conversion boost." class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 74, 2);
    pop_element();
    $$payload2.out.push(` <meta property="og:image" content="/images/og-image.jpg" class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 78, 2);
    pop_element();
    $$payload2.out.push(` <meta property="twitter:card" content="summary_large_image" class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 81, 2);
    pop_element();
    $$payload2.out.push(` <meta property="twitter:url" content="https://GY6AI.com/" class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 82, 2);
    pop_element();
    $$payload2.out.push(` <meta property="twitter:title" content="GY6AI - Revolutionary AI Chatbots" class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 83, 2);
    pop_element();
    $$payload2.out.push(` <meta property="twitter:description" content="Transform your small business with AI chatbots. 63% more leads guaranteed." class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 87, 2);
    pop_element();
    $$payload2.out.push(` <meta property="twitter:image" content="/images/twitter-card.jpg" class="svelte-146e3fx"/>`);
    push_element($$payload2, "meta", 91, 2);
    pop_element();
    $$payload2.out.push(` <link rel="preconnect" href="https://fonts.googleapis.com" class="svelte-146e3fx"/>`);
    push_element($$payload2, "link", 94, 2);
    pop_element();
    $$payload2.out.push(` <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" class="svelte-146e3fx"/>`);
    push_element($$payload2, "link", 95, 2);
    pop_element();
    $$payload2.out.push(` <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet" class="svelte-146e3fx"/>`);
    push_element($$payload2, "link", 96, 2);
    pop_element();
  });
  $$payload.out.push(`<div class="gradient-bg svelte-146e3fx">`);
  push_element($$payload, "div", 103, 0);
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  Header($$payload);
  $$payload.out.push(`<!----> <main class="svelte-146e3fx">`);
  push_element($$payload, "main", 118, 0);
  Hero($$payload, { onGetStarted: handleGetStarted, onSeeProof: handleSeeProof });
  $$payload.out.push(`<!----> `);
  Stats($$payload, { id: "stats" });
  $$payload.out.push(`<!----> `);
  Features($$payload, { id: "features" });
  $$payload.out.push(`<!----> `);
  Guarantees($$payload);
  $$payload.out.push(`<!----> `);
  FinalCTA($$payload, { id: "final-cta" });
  $$payload.out.push(`<!----></main>`);
  pop_element();
  $$payload.out.push(` `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
_page.render = function () {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
