import { D as push, V as copy_payload, W as assign_payload, G as pop, U as head, M as push_element, O as pop_element, X as attr_style, N as escape_html, F as prevent_snippet_stringification, I as FILENAME, Y as stringify } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { H as Header, B as Button, F as Footer } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { I as Input } from "../../../../chunks/Input.js";
_page[FILENAME] = "src/routes/assessment/technical-solution/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  let progress = 0;
  let timeRemaining = "48:00:00";
  let formData = {
    architectureDescription: "",
    cloudProvider: "",
    databaseService: "",
    computingServices: "",
    justification: "",
    troubleshootingSteps: "",
    questionsToAsk: "",
    logsToCheck: "",
    isolationApproach: "",
    diagramUrl: ""
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Technical Solution Blueprint - Assessment - GY6AI</title>`;
      $$payload3.out.push(`<meta name="description" content="Technical solution blueprint and troubleshooting assessment section." class="svelte-15d9xvj"/>`);
      push_element($$payload3, "meta", 147, 2);
      pop_element();
      $$payload3.out.push(` <meta name="robots" content="noindex, nofollow" class="svelte-15d9xvj"/>`);
      push_element($$payload3, "meta", 151, 2);
      pop_element();
    });
    $$payload2.out.push(`<div class="gradient-bg svelte-15d9xvj">`);
    push_element($$payload2, "div", 155, 0);
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` `);
    Header($$payload2);
    $$payload2.out.push(`<!----> <main class="assessment-main svelte-15d9xvj">`);
    push_element($$payload2, "main", 160, 0);
    $$payload2.out.push(`<div class="container svelte-15d9xvj">`);
    push_element($$payload2, "div", 161, 2);
    $$payload2.out.push(`<div class="assessment-header svelte-15d9xvj">`);
    push_element($$payload2, "div", 162, 4);
    $$payload2.out.push(`<div class="section-info svelte-15d9xvj">`);
    push_element($$payload2, "div", 163, 6);
    $$payload2.out.push(`<h1 class="section-title svelte-15d9xvj">`);
    push_element($$payload2, "h1", 164, 8);
    $$payload2.out.push(`Section II: Technical Solution Blueprint &amp; Troubleshooting</h1>`);
    pop_element();
    $$payload2.out.push(` <div class="progress-bar svelte-15d9xvj">`);
    push_element($$payload2, "div", 167, 8);
    $$payload2.out.push(`<div class="progress-fill svelte-15d9xvj"${attr_style(`width: ${stringify(progress)}%`)}>`);
    push_element($$payload2, "div", 168, 10);
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <span class="progress-text svelte-15d9xvj">`);
    push_element($$payload2, "span", 170, 8);
    $$payload2.out.push(`${escape_html(progress)}% Complete</span>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <div class="timer-display svelte-15d9xvj">`);
    push_element($$payload2, "div", 173, 6);
    $$payload2.out.push(`<span class="timer-label svelte-15d9xvj">`);
    push_element($$payload2, "span", 174, 8);
    $$payload2.out.push(`Time Remaining:</span>`);
    pop_element();
    $$payload2.out.push(` <span class="timer-value svelte-15d9xvj">`);
    push_element($$payload2, "span", 175, 8);
    $$payload2.out.push(`${escape_html(timeRemaining)}</span>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <div class="content-grid svelte-15d9xvj">`);
    push_element($$payload2, "div", 179, 4);
    $$payload2.out.push(`<div class="scenario-column svelte-15d9xvj">`);
    push_element($$payload2, "div", 180, 6);
    Card($$payload2, {
      class: "scenario-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-15d9xvj">`);
        push_element($$payload3, "h2", 182, 10);
        $$payload3.out.push(`Scenario</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="scenario-text svelte-15d9xvj">`);
        push_element($$payload3, "p", 183, 10);
        $$payload3.out.push(`Based on the previous scenario, <strong class="svelte-15d9xvj">`);
        push_element($$payload3, "strong", 184, 44);
        $$payload3.out.push(`Global Connect Corp.</strong>`);
        pop_element();
        $$payload3.out.push(` currently uses an outdated on-premise SQL database and a monolithic
            backend application. They are looking to migrate to a cloud-based solution.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="requirements-box svelte-15d9xvj">`);
        push_element($$payload3, "div", 189, 10);
        $$payload3.out.push(`<h3 class="svelte-15d9xvj">`);
        push_element($$payload3, "h3", 190, 12);
        $$payload3.out.push(`Required Deliverables:</h3>`);
        pop_element();
        $$payload3.out.push(` <ul class="svelte-15d9xvj">`);
        push_element($$payload3, "ul", 191, 12);
        $$payload3.out.push(`<li class="svelte-15d9xvj">`);
        push_element($$payload3, "li", 192, 14);
        $$payload3.out.push(`High-level technical blueprint (diagram + brief explanation)</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-15d9xvj">`);
        push_element($$payload3, "li", 195, 14);
        $$payload3.out.push(`Modern, scalable cloud architecture proposal</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-15d9xvj">`);
        push_element($$payload3, "li", 196, 14);
        $$payload3.out.push(`Suggested technologies with justification</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-15d9xvj">`);
        push_element($$payload3, "li", 197, 14);
        $$payload3.out.push(`Step-by-step troubleshooting approach for data corruption issues</li>`);
        pop_element();
        $$payload3.out.push(`</ul>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="problem-context svelte-15d9xvj">`);
        push_element($$payload3, "div", 203, 10);
        $$payload3.out.push(`<h3 class="svelte-15d9xvj">`);
        push_element($$payload3, "h3", 204, 12);
        $$payload3.out.push(`Problem Context:</h3>`);
        pop_element();
        $$payload3.out.push(` <p class="svelte-15d9xvj">`);
        push_element($$payload3, "p", 205, 12);
        $$payload3.out.push(`Global Connect Corp. reports that their legacy system occasionally
              crashes under peak load, leading to data corruption. You need to
              address this intermittent issue in a production environment with
              limited initial access.</p>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div>`);
    pop_element();
    $$payload2.out.push(` <div class="form-column svelte-15d9xvj">`);
    push_element($$payload2, "div", 215, 6);
    Card($$payload2, {
      class: "deliverable-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-15d9xvj">`);
        push_element($$payload3, "h2", 217, 10);
        $$payload3.out.push(`1. Technical Architecture Blueprint</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-15d9xvj">`);
        push_element($$payload3, "p", 218, 10);
        $$payload3.out.push(`Create a high-level technical blueprint proposing a modern, scalable
            cloud architecture for Global Connect Corp.'s data processing needs.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="diagram-section svelte-15d9xvj">`);
        push_element($$payload3, "div", 223, 10);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 224, 12);
        $$payload3.out.push(`Architecture Diagram</h4>`);
        pop_element();
        $$payload3.out.push(` <div class="diagram-options svelte-15d9xvj">`);
        push_element($$payload3, "div", 225, 12);
        $$payload3.out.push(`<div class="option-group svelte-15d9xvj">`);
        push_element($$payload3, "div", 226, 14);
        $$payload3.out.push(`<h5 class="svelte-15d9xvj">`);
        push_element($$payload3, "h5", 227, 16);
        $$payload3.out.push(`Option A: Upload Diagram</h5>`);
        pop_element();
        $$payload3.out.push(` <div class="file-upload svelte-15d9xvj">`);
        push_element($$payload3, "div", 228, 16);
        $$payload3.out.push(`<input type="file" accept="image/*,.pdf,.drawio,.vsd,.vsdx" id="diagram-upload" hidden class="svelte-15d9xvj"/>`);
        push_element($$payload3, "input", 229, 18);
        pop_element();
        $$payload3.out.push(` <label for="diagram-upload" class="upload-button svelte-15d9xvj">`);
        push_element($$payload3, "label", 236, 18);
        $$payload3.out.push(`${escape_html("Upload Diagram")}</label>`);
        pop_element();
        $$payload3.out.push(` `);
        {
          $$payload3.out.push("<!--[!-->");
        }
        $$payload3.out.push(`<!--]--></div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="option-separator svelte-15d9xvj">`);
        push_element($$payload3, "div", 247, 14);
        $$payload3.out.push(`OR</div>`);
        pop_element();
        $$payload3.out.push(` <div class="option-group svelte-15d9xvj">`);
        push_element($$payload3, "div", 249, 14);
        $$payload3.out.push(`<h5 class="svelte-15d9xvj">`);
        push_element($$payload3, "h5", 250, 16);
        $$payload3.out.push(`Option B: Link to Online Diagram</h5>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          type: "url",
          placeholder: "https://lucid.app/example or https://draw.io/example",
          get value() {
            return formData.diagramUrl;
          },
          set value($$value) {
            formData.diagramUrl = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="description-section svelte-15d9xvj">`);
        push_element($$payload3, "div", 261, 10);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 262, 12);
        $$payload3.out.push(`Architecture Description</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Provide a detailed explanation of your proposed architecture, including data flow, security considerations, scalability features, and integration points..." rows="6" class="svelte-15d9xvj">`);
        push_element($$payload3, "textarea", 263, 12);
        const $$body = escape_html(formData.architectureDescription);
        if ($$body) {
          $$payload3.out.push(`${$$body}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Card($$payload2, {
      class: "deliverable-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-15d9xvj">`);
        push_element($$payload3, "h2", 273, 10);
        $$payload3.out.push(`2. Technology Stack Proposal</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-15d9xvj">`);
        push_element($$payload3, "p", 274, 10);
        $$payload3.out.push(`Suggest specific technologies and services for each component of
            your solution with clear justification.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="tech-stack-grid svelte-15d9xvj">`);
        push_element($$payload3, "div", 279, 10);
        $$payload3.out.push(`<div class="tech-item svelte-15d9xvj">`);
        push_element($$payload3, "div", 280, 12);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 281, 14);
        $$payload3.out.push(`Cloud Provider</h4>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "e.g., AWS, Azure, Google Cloud",
          get value() {
            return formData.cloudProvider;
          },
          set value($$value) {
            formData.cloudProvider = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(` <div class="tech-item svelte-15d9xvj">`);
        push_element($$payload3, "div", 289, 12);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 290, 14);
        $$payload3.out.push(`Database Service</h4>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "e.g., Amazon RDS, Azure SQL, Cloud SQL",
          get value() {
            return formData.databaseService;
          },
          set value($$value) {
            formData.databaseService = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(` <div class="tech-item svelte-15d9xvj">`);
        push_element($$payload3, "div", 298, 12);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 299, 14);
        $$payload3.out.push(`Computing Services</h4>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "e.g., EC2, App Service, Compute Engine",
          get value() {
            return formData.computingServices;
          },
          set value($$value) {
            formData.computingServices = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="justification-section svelte-15d9xvj">`);
        push_element($$payload3, "div", 308, 10);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 309, 12);
        $$payload3.out.push(`Technology Justification</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain why you chose these specific technologies. Consider factors like cost, scalability, reliability, security, integration capabilities, and Global Connect Corp.'s specific needs..." rows="5" class="svelte-15d9xvj">`);
        push_element($$payload3, "textarea", 310, 12);
        const $$body_1 = escape_html(formData.justification);
        if ($$body_1) {
          $$payload3.out.push(`${$$body_1}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Card($$payload2, {
      class: "deliverable-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-15d9xvj">`);
        push_element($$payload3, "h2", 320, 10);
        $$payload3.out.push(`3. Production Troubleshooting Approach</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-15d9xvj">`);
        push_element($$payload3, "p", 321, 10);
        $$payload3.out.push(`Describe your step-by-step approach to troubleshooting the
            intermittent data corruption issue in Global Connect Corp.'s
            production environment, assuming limited initial access.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="troubleshooting-section svelte-15d9xvj">`);
        push_element($$payload3, "div", 327, 10);
        $$payload3.out.push(`<div class="troubleshoot-item svelte-15d9xvj">`);
        push_element($$payload3, "div", 328, 12);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 329, 14);
        $$payload3.out.push(`Step-by-Step Troubleshooting Process</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Outline your systematic approach to identifying and resolving the data corruption issue. Include initial assessment, escalation procedures, and resolution steps..." rows="6" class="svelte-15d9xvj">`);
        push_element($$payload3, "textarea", 330, 14);
        const $$body_2 = escape_html(formData.troubleshootingSteps);
        if ($$body_2) {
          $$payload3.out.push(`${$$body_2}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="troubleshoot-item svelte-15d9xvj">`);
        push_element($$payload3, "div", 338, 12);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 339, 14);
        $$payload3.out.push(`Key Questions to Ask</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="List the critical questions you would ask stakeholders, system administrators, and users to understand the scope and nature of the problem..." rows="4" class="svelte-15d9xvj">`);
        push_element($$payload3, "textarea", 340, 14);
        const $$body_3 = escape_html(formData.questionsToAsk);
        if ($$body_3) {
          $$payload3.out.push(`${$$body_3}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="troubleshoot-item svelte-15d9xvj">`);
        push_element($$payload3, "div", 348, 12);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 349, 14);
        $$payload3.out.push(`Logs and Data to Examine</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Specify which logs, metrics, and data sources you would examine first. Include system logs, application logs, database logs, performance metrics, etc..." rows="4" class="svelte-15d9xvj">`);
        push_element($$payload3, "textarea", 350, 14);
        const $$body_4 = escape_html(formData.logsToCheck);
        if ($$body_4) {
          $$payload3.out.push(`${$$body_4}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="troubleshoot-item svelte-15d9xvj">`);
        push_element($$payload3, "div", 358, 12);
        $$payload3.out.push(`<h4 class="svelte-15d9xvj">`);
        push_element($$payload3, "h4", 359, 14);
        $$payload3.out.push(`Problem Isolation Strategy</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain how you would isolate the problem to identify the root cause. Include testing procedures, environment isolation, and impact assessment..." rows="4" class="svelte-15d9xvj">`);
        push_element($$payload3, "textarea", 360, 14);
        const $$body_5 = escape_html(formData.isolationApproach);
        if ($$body_5) {
          $$payload3.out.push(`${$$body_5}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> <div class="navigation-buttons svelte-15d9xvj">`);
    push_element($$payload2, "div", 370, 8);
    Button($$payload2, {
      variant: "outline",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<!---->← Previous: Client Acquisition`);
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Button($$payload2, {
      variant: "primary",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<!---->Next: Prompt Engineering →`);
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</main>`);
    pop_element();
    $$payload2.out.push(` `);
    Footer($$payload2);
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
