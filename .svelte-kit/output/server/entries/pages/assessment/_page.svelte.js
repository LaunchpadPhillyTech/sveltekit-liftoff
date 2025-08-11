import { D as push, U as head, M as push_element, O as pop_element, F as prevent_snippet_stringification, G as pop, I as FILENAME } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { H as Header, F as Footer, B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
_page[FILENAME] = "src/routes/assessment/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Client Solutions Specialist Assessment - GY6AI</title>`;
    $$payload2.out.push(`<meta name="description" content="Comprehensive pre-trial assessment for Client Solutions Specialist candidates at GY6AI." class="svelte-1rt95km"/>`);
    push_element($$payload2, "meta", 31, 2);
    pop_element();
    $$payload2.out.push(` <meta name="robots" content="noindex, nofollow" class="svelte-1rt95km"/>`);
    push_element($$payload2, "meta", 35, 2);
    pop_element();
  });
  $$payload.out.push(`<div class="gradient-bg svelte-1rt95km">`);
  push_element($$payload, "div", 39, 0);
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` `);
  Header($$payload);
  $$payload.out.push(`<!----> <main class="assessment-main svelte-1rt95km">`);
  push_element($$payload, "main", 44, 0);
  $$payload.out.push(`<div class="container svelte-1rt95km">`);
  push_element($$payload, "div", 45, 2);
  $$payload.out.push(`<div class="assessment-hero svelte-1rt95km">`);
  push_element($$payload, "div", 46, 4);
  $$payload.out.push(`<h1 class="title svelte-1rt95km">`);
  push_element($$payload, "h1", 47, 6);
  $$payload.out.push(`Client Solutions Specialist</h1>`);
  pop_element();
  $$payload.out.push(` <h2 class="subtitle svelte-1rt95km">`);
  push_element($$payload, "h2", 48, 6);
  $$payload.out.push(`Pre-Trial Assessment</h2>`);
  pop_element();
  $$payload.out.push(` `);
  Card($$payload, {
    class: "welcome-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="card-content svelte-1rt95km">`);
      push_element($$payload2, "div", 51, 8);
      $$payload2.out.push(`<h3 class="svelte-1rt95km">`);
      push_element($$payload2, "h3", 52, 10);
      $$payload2.out.push(`Welcome to the GY6AI Assessment Platform</h3>`);
      pop_element();
      $$payload2.out.push(` <p class="description svelte-1rt95km">`);
      push_element($$payload2, "p", 53, 10);
      $$payload2.out.push(`This comprehensive assessment is designed to evaluate candidates for
            the Client Solutions Specialist role. You will demonstrate your
            skills in client acquisition, technical evaluation, problem-solving,
            and advanced prompt engineering.</p>`);
      pop_element();
      $$payload2.out.push(` <div class="assessment-details svelte-1rt95km">`);
      push_element($$payload2, "div", 60, 10);
      $$payload2.out.push(`<div class="detail-item svelte-1rt95km">`);
      push_element($$payload2, "div", 61, 12);
      $$payload2.out.push(`<strong class="svelte-1rt95km">`);
      push_element($$payload2, "strong", 62, 14);
      $$payload2.out.push(`Duration:</strong>`);
      pop_element();
      $$payload2.out.push(` 48 hours from start time</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-1rt95km">`);
      push_element($$payload2, "div", 64, 12);
      $$payload2.out.push(`<strong class="svelte-1rt95km">`);
      push_element($$payload2, "strong", 65, 14);
      $$payload2.out.push(`Sections:</strong>`);
      pop_element();
      $$payload2.out.push(` 4 comprehensive assessment areas</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-1rt95km">`);
      push_element($$payload2, "div", 67, 12);
      $$payload2.out.push(`<strong class="svelte-1rt95km">`);
      push_element($$payload2, "strong", 68, 14);
      $$payload2.out.push(`Tools:</strong>`);
      pop_element();
      $$payload2.out.push(` Use your preferred tools and resources</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-1rt95km">`);
      push_element($$payload2, "div", 70, 12);
      $$payload2.out.push(`<strong class="svelte-1rt95km">`);
      push_element($$payload2, "strong", 71, 14);
      $$payload2.out.push(`Format:</strong>`);
      pop_element();
      $$payload2.out.push(` Mix of written responses, videos, and code
              submissions</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="action-buttons svelte-1rt95km">`);
      push_element($$payload2, "div", 76, 10);
      Button($$payload2, {
        variant: "primary",
        size: "large",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Start Assessment`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <div class="secondary-actions svelte-1rt95km">`);
      push_element($$payload2, "div", 81, 12);
      Button($$payload2, {
        variant: "outline",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Back to Home`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Button($$payload2, {
        variant: "outline",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->View All Careers`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> <div class="assessment-overview svelte-1rt95km">`);
  push_element($$payload, "div", 91, 6);
  $$payload.out.push(`<h3 class="svelte-1rt95km">`);
  push_element($$payload, "h3", 92, 8);
  $$payload.out.push(`Assessment Overview</h3>`);
  pop_element();
  $$payload.out.push(` <div class="overview-grid svelte-1rt95km">`);
  push_element($$payload, "div", 93, 8);
  Card($$payload, {
    class: "overview-item",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<h4 class="svelte-1rt95km">`);
      push_element($$payload2, "h4", 95, 12);
      $$payload2.out.push(`1. Client Acquisition &amp; Problem-Solving</h4>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-1rt95km">`);
      push_element($$payload2, "p", 96, 12);
      $$payload2.out.push(`Prepare a mock pitch for a potential client and identify critical
              pain points with proposed solutions.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "overview-item",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<h4 class="svelte-1rt95km">`);
      push_element($$payload2, "h4", 103, 12);
      $$payload2.out.push(`2. Technical Solution Blueprint</h4>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-1rt95km">`);
      push_element($$payload2, "p", 104, 12);
      $$payload2.out.push(`Design a modern cloud architecture and troubleshoot complex system
              issues in production environments.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "overview-item",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<h4 class="svelte-1rt95km">`);
      push_element($$payload2, "h4", 111, 12);
      $$payload2.out.push(`3. Prompt Engineering</h4>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-1rt95km">`);
      push_element($$payload2, "p", 112, 12);
      $$payload2.out.push(`Develop advanced AI prompts with parameter configuration for
              medical AI applications.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "overview-item",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<h4 class="svelte-1rt95km">`);
      push_element($$payload2, "h4", 119, 12);
      $$payload2.out.push(`4. Technical Implementation</h4>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-1rt95km">`);
      push_element($$payload2, "p", 120, 12);
      $$payload2.out.push(`Build a FastAPI backend with React frontend demonstrating
              full-stack development skills.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</main>`);
  pop_element();
  $$payload.out.push(` `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
