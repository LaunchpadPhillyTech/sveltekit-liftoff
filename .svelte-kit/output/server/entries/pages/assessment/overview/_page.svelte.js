import { D as push, U as head, M as push_element, O as pop_element, F as prevent_snippet_stringification, G as pop, I as FILENAME } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { H as Header, F as Footer, B as Button } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import "../../../../chunks/AutoSave.js";
_page[FILENAME] = "src/routes/assessment/overview/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Assessment Overview - Client Solutions Specialist - GY6AI</title>`;
    $$payload2.out.push(`<meta name="description" content="Assessment guidelines and instructions for the Client Solutions Specialist role at GY6AI." class="svelte-koqooq"/>`);
    push_element($$payload2, "meta", 89, 2);
    pop_element();
    $$payload2.out.push(` <meta name="robots" content="noindex, nofollow" class="svelte-koqooq"/>`);
    push_element($$payload2, "meta", 93, 2);
    pop_element();
  });
  $$payload.out.push(`<div class="gradient-bg svelte-koqooq">`);
  push_element($$payload, "div", 97, 0);
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` `);
  Header($$payload);
  $$payload.out.push(`<!----> <main class="assessment-main svelte-koqooq">`);
  push_element($$payload, "main", 102, 0);
  $$payload.out.push(`<div class="container svelte-koqooq">`);
  push_element($$payload, "div", 103, 2);
  $$payload.out.push(`<div class="assessment-content svelte-koqooq">`);
  push_element($$payload, "div", 104, 4);
  $$payload.out.push(`<div class="header-section svelte-koqooq">`);
  push_element($$payload, "div", 105, 6);
  $$payload.out.push(`<h1 class="title svelte-koqooq">`);
  push_element($$payload, "h1", 106, 8);
  $$payload.out.push(`Assessment Guidelines</h1>`);
  pop_element();
  $$payload.out.push(` `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div>`);
  pop_element();
  $$payload.out.push(` `);
  Card($$payload, {
    class: "guidelines-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="card-content svelte-koqooq">`);
      push_element($$payload2, "div", 116, 8);
      $$payload2.out.push(`<h2 class="svelte-koqooq">`);
      push_element($$payload2, "h2", 117, 10);
      $$payload2.out.push(`Overview and Guidelines</h2>`);
      pop_element();
      $$payload2.out.push(` <div class="purpose-section svelte-koqooq">`);
      push_element($$payload2, "div", 119, 10);
      $$payload2.out.push(`<h3 class="svelte-koqooq">`);
      push_element($$payload2, "h3", 120, 12);
      $$payload2.out.push(`Purpose</h3>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-koqooq">`);
      push_element($$payload2, "p", 121, 12);
      $$payload2.out.push(`To assess a candidate's practical skills in a simulated real-world
              scenario, covering client engagement, technical system
              configuration, complex problem-solving, and advanced AI prompt
              engineering.</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="tools-section svelte-koqooq">`);
      push_element($$payload2, "div", 129, 10);
      $$payload2.out.push(`<h3 class="svelte-koqooq">`);
      push_element($$payload2, "h3", 130, 12);
      $$payload2.out.push(`Tools &amp; Resources</h3>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-koqooq">`);
      push_element($$payload2, "p", 131, 12);
      $$payload2.out.push(`Candidates are encouraged to use tools of their choice (e.g.,
              preferred IDEs, programming languages, documentation, online
              resources, communication platforms, etc.) to complete the
              assessment. The focus is on the solution and approach, not on
              strict adherence to a specific toolset, unless otherwise specified
              for a particular task.</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="timeline-section svelte-koqooq">`);
      push_element($$payload2, "div", 141, 10);
      $$payload2.out.push(`<h3 class="svelte-koqooq">`);
      push_element($$payload2, "h3", 142, 12);
      $$payload2.out.push(`Timeline</h3>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-koqooq">`);
      push_element($$payload2, "p", 143, 12);
      $$payload2.out.push(`Candidates will have <strong class="svelte-koqooq">`);
      push_element($$payload2, "strong", 144, 35);
      $$payload2.out.push(`48 hours</strong>`);
      pop_element();
      $$payload2.out.push(` to complete all components
              of this assessment from the time it is started. The timer begins when
              you click "Start Assessment" below.</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="deliverables-section svelte-koqooq">`);
      push_element($$payload2, "div", 150, 10);
      $$payload2.out.push(`<h3 class="svelte-koqooq">`);
      push_element($$payload2, "h3", 151, 12);
      $$payload2.out.push(`Deliverables</h3>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-koqooq">`);
      push_element($$payload2, "p", 152, 12);
      $$payload2.out.push(`Each section specifies the required deliverables. Submissions
              should be well-documented and clearly present the solution and
              thought process. All submissions will be saved automatically as
              you progress.</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> <div class="sections-overview svelte-koqooq">`);
  push_element($$payload, "div", 162, 6);
  $$payload.out.push(`<h2 class="svelte-koqooq">`);
  push_element($$payload, "h2", 163, 8);
  $$payload.out.push(`Assessment Sections</h2>`);
  pop_element();
  $$payload.out.push(` `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> <div class="sections-grid svelte-koqooq">`);
  push_element($$payload, "div", 201, 8);
  Card($$payload, {
    class: "section-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="section-number svelte-koqooq">`);
      push_element($$payload2, "div", 203, 12);
      $$payload2.out.push(`I</div>`);
      pop_element();
      $$payload2.out.push(` <h3 class="svelte-koqooq">`);
      push_element($$payload2, "h3", 204, 12);
      $$payload2.out.push(`Client Acquisition &amp; Problem-Solving</h3>`);
      pop_element();
      $$payload2.out.push(` <ul class="svelte-koqooq">`);
      push_element($$payload2, "ul", 205, 12);
      $$payload2.out.push(`<li class="svelte-koqooq">`);
      push_element($$payload2, "li", 206, 14);
      $$payload2.out.push(`Mock pitch preparation (max 10 minutes)</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 207, 14);
      $$payload2.out.push(`Written solution summary (max 500 words)</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 208, 14);
      $$payload2.out.push(`Video recording or detailed script</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 209, 14);
      $$payload2.out.push(`Identify 3 critical pain points</li>`);
      pop_element();
      $$payload2.out.push(`</ul>`);
      pop_element();
      $$payload2.out.push(` <p class="scenario svelte-koqooq">`);
      push_element($$payload2, "p", 211, 12);
      $$payload2.out.push(`<strong class="svelte-koqooq">`);
      push_element($$payload2, "strong", 212, 14);
      $$payload2.out.push(`Scenario:</strong>`);
      pop_element();
      $$payload2.out.push(` Engage with "Global Connect Corp." experiencing
              legacy data processing issues.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "section-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="section-number svelte-koqooq">`);
      push_element($$payload2, "div", 218, 12);
      $$payload2.out.push(`II</div>`);
      pop_element();
      $$payload2.out.push(` <h3 class="svelte-koqooq">`);
      push_element($$payload2, "h3", 219, 12);
      $$payload2.out.push(`Technical Solution Blueprint</h3>`);
      pop_element();
      $$payload2.out.push(` <ul class="svelte-koqooq">`);
      push_element($$payload2, "ul", 220, 12);
      $$payload2.out.push(`<li class="svelte-koqooq">`);
      push_element($$payload2, "li", 221, 14);
      $$payload2.out.push(`High-level technical architecture diagram</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 222, 14);
      $$payload2.out.push(`Cloud migration proposal with justification</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 223, 14);
      $$payload2.out.push(`Step-by-step troubleshooting approach</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 224, 14);
      $$payload2.out.push(`Production environment problem isolation</li>`);
      pop_element();
      $$payload2.out.push(`</ul>`);
      pop_element();
      $$payload2.out.push(` <p class="scenario svelte-koqooq">`);
      push_element($$payload2, "p", 226, 12);
      $$payload2.out.push(`<strong class="svelte-koqooq">`);
      push_element($$payload2, "strong", 227, 14);
      $$payload2.out.push(`Scenario:</strong>`);
      pop_element();
      $$payload2.out.push(` Migrate from outdated on-premise SQL to
              modern cloud-based solution.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "section-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="section-number svelte-koqooq">`);
      push_element($$payload2, "div", 233, 12);
      $$payload2.out.push(`III</div>`);
      pop_element();
      $$payload2.out.push(` <h3 class="svelte-koqooq">`);
      push_element($$payload2, "h3", 234, 12);
      $$payload2.out.push(`Prompt Engineering</h3>`);
      pop_element();
      $$payload2.out.push(` <ul class="svelte-koqooq">`);
      push_element($$payload2, "ul", 235, 12);
      $$payload2.out.push(`<li class="svelte-koqooq">`);
      push_element($$payload2, "li", 236, 14);
      $$payload2.out.push(`Core system prompt development</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 237, 14);
      $$payload2.out.push(`Hallucination reduction strategies</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 238, 14);
      $$payload2.out.push(`Parameter configuration (Temperature, Top P, etc.)</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 239, 14);
      $$payload2.out.push(`Medical AI response optimization</li>`);
      pop_element();
      $$payload2.out.push(`</ul>`);
      pop_element();
      $$payload2.out.push(` <p class="scenario svelte-koqooq">`);
      push_element($$payload2, "p", 241, 12);
      $$payload2.out.push(`<strong class="svelte-koqooq">`);
      push_element($$payload2, "strong", 242, 14);
      $$payload2.out.push(`Scenario:</strong>`);
      pop_element();
      $$payload2.out.push(` Design AI prompts for "MediBot Health" symptom
              checker application.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "section-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="section-number svelte-koqooq">`);
      push_element($$payload2, "div", 248, 12);
      $$payload2.out.push(`IV</div>`);
      pop_element();
      $$payload2.out.push(` <h3 class="svelte-koqooq">`);
      push_element($$payload2, "h3", 249, 12);
      $$payload2.out.push(`Technical Implementation</h3>`);
      pop_element();
      $$payload2.out.push(` <ul class="svelte-koqooq">`);
      push_element($$payload2, "ul", 250, 12);
      $$payload2.out.push(`<li class="svelte-koqooq">`);
      push_element($$payload2, "li", 251, 14);
      $$payload2.out.push(`FastAPI backend with secure endpoints</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 252, 14);
      $$payload2.out.push(`React frontend with user interface</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 253, 14);
      $$payload2.out.push(`API integration demonstration</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-koqooq">`);
      push_element($$payload2, "li", 254, 14);
      $$payload2.out.push(`Mobile-responsive design with Tailwind CSS</li>`);
      pop_element();
      $$payload2.out.push(`</ul>`);
      pop_element();
      $$payload2.out.push(` <p class="scenario svelte-koqooq">`);
      push_element($$payload2, "p", 256, 12);
      $$payload2.out.push(`<strong class="svelte-koqooq">`);
      push_element($$payload2, "strong", 257, 14);
      $$payload2.out.push(`Scenario:</strong>`);
      pop_element();
      $$payload2.out.push(` Build integrated web application for MediBot
              Health AI service.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="action-section svelte-koqooq">`);
  push_element($$payload, "div", 264, 6);
  {
    $$payload.out.push("<!--[-->");
    Card($$payload, {
      class: "start-card",
      children: prevent_snippet_stringification(($$payload2) => {
        $$payload2.out.push(`<div class="start-content svelte-koqooq">`);
        push_element($$payload2, "div", 267, 12);
        $$payload2.out.push(`<h3 class="svelte-koqooq">`);
        push_element($$payload2, "h3", 268, 14);
        $$payload2.out.push(`Ready to Begin?</h3>`);
        pop_element();
        $$payload2.out.push(` <p class="svelte-koqooq">`);
        push_element($$payload2, "p", 269, 14);
        $$payload2.out.push(`Once you start the assessment, the 48-hour timer will begin.
                Make sure you have adequate time to dedicate to this
                comprehensive evaluation.</p>`);
        pop_element();
        $$payload2.out.push(` `);
        Button($$payload2, {
          variant: "primary",
          size: "large",
          children: prevent_snippet_stringification(($$payload3) => {
            $$payload3.out.push(`<!---->Start Assessment`);
          }),
          $$slots: { default: true }
        });
        $$payload2.out.push(`<!----></div>`);
        pop_element();
      }),
      $$slots: { default: true }
    });
  }
  $$payload.out.push(`<!--]--></div>`);
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
