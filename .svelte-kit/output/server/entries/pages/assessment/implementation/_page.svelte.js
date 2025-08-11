import { D as push, V as copy_payload, W as assign_payload, G as pop, U as head, M as push_element, O as pop_element, X as attr_style, N as escape_html, F as prevent_snippet_stringification, I as FILENAME, Y as stringify } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { H as Header, B as Button, F as Footer } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { I as Input } from "../../../../chunks/Input.js";
_page[FILENAME] = "src/routes/assessment/implementation/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  let progress = 0;
  let timeRemaining = "48:00:00";
  let formData = {
    fastApiCode: "",
    fastApiExplanation: "",
    reactCode: "",
    reactExplanation: "",
    integrationNotes: "",
    githubRepoUrl: "",
    liveDemo: "",
    testingApproach: "",
    deploymentNotes: ""
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Technical Implementation - Assessment - GY6AI</title>`;
      $$payload3.out.push(`<meta name="description" content="FastAPI and React technical implementation assessment section." class="svelte-xxao30"/>`);
      push_element($$payload3, "meta", 270, 2);
      pop_element();
      $$payload3.out.push(` <meta name="robots" content="noindex, nofollow" class="svelte-xxao30"/>`);
      push_element($$payload3, "meta", 274, 2);
      pop_element();
    });
    $$payload2.out.push(`<div class="gradient-bg svelte-xxao30">`);
    push_element($$payload2, "div", 278, 0);
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` `);
    Header($$payload2);
    $$payload2.out.push(`<!----> <main class="assessment-main svelte-xxao30">`);
    push_element($$payload2, "main", 283, 0);
    $$payload2.out.push(`<div class="container svelte-xxao30">`);
    push_element($$payload2, "div", 284, 2);
    $$payload2.out.push(`<div class="assessment-header svelte-xxao30">`);
    push_element($$payload2, "div", 285, 4);
    $$payload2.out.push(`<div class="section-info svelte-xxao30">`);
    push_element($$payload2, "div", 286, 6);
    $$payload2.out.push(`<h1 class="section-title svelte-xxao30">`);
    push_element($$payload2, "h1", 287, 8);
    $$payload2.out.push(`Section IV: Technical Implementation</h1>`);
    pop_element();
    $$payload2.out.push(` <div class="progress-bar svelte-xxao30">`);
    push_element($$payload2, "div", 288, 8);
    $$payload2.out.push(`<div class="progress-fill svelte-xxao30"${attr_style(`width: ${stringify(progress)}%`)}>`);
    push_element($$payload2, "div", 289, 10);
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <span class="progress-text svelte-xxao30">`);
    push_element($$payload2, "span", 291, 8);
    $$payload2.out.push(`${escape_html(progress)}% Complete</span>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <div class="timer-display svelte-xxao30">`);
    push_element($$payload2, "div", 294, 6);
    $$payload2.out.push(`<span class="timer-label svelte-xxao30">`);
    push_element($$payload2, "span", 295, 8);
    $$payload2.out.push(`Time Remaining:</span>`);
    pop_element();
    $$payload2.out.push(` <span class="timer-value svelte-xxao30">`);
    push_element($$payload2, "span", 296, 8);
    $$payload2.out.push(`${escape_html(timeRemaining)}</span>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <div class="content-grid svelte-xxao30">`);
    push_element($$payload2, "div", 300, 4);
    $$payload2.out.push(`<div class="scenario-column svelte-xxao30">`);
    push_element($$payload2, "div", 301, 6);
    Card($$payload2, {
      class: "scenario-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-xxao30">`);
        push_element($$payload3, "h2", 303, 10);
        $$payload3.out.push(`Scenario</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="scenario-text svelte-xxao30">`);
        push_element($$payload3, "p", 304, 10);
        $$payload3.out.push(`To integrate with <strong class="svelte-xxao30">`);
        push_element($$payload3, "strong", 305, 30);
        $$payload3.out.push(`MediBot Health's</strong>`);
        pop_element();
        $$payload3.out.push(` AI symptom checker,
            you need to set up a secure API endpoint and a simple web interface that
            demonstrates the prompt engineering configurations you designed in the
            previous section.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="requirements-box svelte-xxao30">`);
        push_element($$payload3, "div", 311, 10);
        $$payload3.out.push(`<h3 class="svelte-xxao30">`);
        push_element($$payload3, "h3", 312, 12);
        $$payload3.out.push(`Required Deliverables:</h3>`);
        pop_element();
        $$payload3.out.push(` <ul class="svelte-xxao30">`);
        push_element($$payload3, "ul", 313, 12);
        $$payload3.out.push(`<li class="svelte-xxao30">`);
        push_element($$payload3, "li", 314, 14);
        $$payload3.out.push(`FastAPI backend with /diagnose endpoint</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-xxao30">`);
        push_element($$payload3, "li", 315, 14);
        $$payload3.out.push(`React frontend with symptom input form</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-xxao30">`);
        push_element($$payload3, "li", 316, 14);
        $$payload3.out.push(`Demonstration of prompt parameter usage</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-xxao30">`);
        push_element($$payload3, "li", 317, 14);
        $$payload3.out.push(`API integration with proper error handling</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-xxao30">`);
        push_element($$payload3, "li", 318, 14);
        $$payload3.out.push(`Mobile-responsive design with Tailwind CSS</li>`);
        pop_element();
        $$payload3.out.push(`</ul>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="technical-specs svelte-xxao30">`);
        push_element($$payload3, "div", 322, 10);
        $$payload3.out.push(`<h3 class="svelte-xxao30">`);
        push_element($$payload3, "h3", 323, 12);
        $$payload3.out.push(`Technical Specifications:</h3>`);
        pop_element();
        $$payload3.out.push(` <ul class="svelte-xxao30">`);
        push_element($$payload3, "ul", 324, 12);
        $$payload3.out.push(`<li class="svelte-xxao30">`);
        push_element($$payload3, "li", 325, 14);
        $$payload3.out.push(`POST endpoint accepting symptom data</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-xxao30">`);
        push_element($$payload3, "li", 326, 14);
        $$payload3.out.push(`Structured JSON response format</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-xxao30">`);
        push_element($$payload3, "li", 327, 14);
        $$payload3.out.push(`Simulated AI service call</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-xxao30">`);
        push_element($$payload3, "li", 328, 14);
        $$payload3.out.push(`Clear code comments and documentation</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-xxao30">`);
        push_element($$payload3, "li", 329, 14);
        $$payload3.out.push(`Basic styling and user experience</li>`);
        pop_element();
        $$payload3.out.push(`</ul>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----></div>`);
    pop_element();
    $$payload2.out.push(` <div class="form-column svelte-xxao30">`);
    push_element($$payload2, "div", 335, 6);
    Card($$payload2, {
      class: "deliverable-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-xxao30">`);
        push_element($$payload3, "h2", 337, 10);
        $$payload3.out.push(`1. FastAPI Backend Implementation</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-xxao30">`);
        push_element($$payload3, "p", 338, 10);
        $$payload3.out.push(`Create a FastAPI application with a secure endpoint that accepts
            symptom descriptions and demonstrates how prompt engineering
            parameters would be used.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="code-section svelte-xxao30">`);
        push_element($$payload3, "div", 344, 10);
        $$payload3.out.push(`<div class="template-toggle svelte-xxao30">`);
        push_element($$payload3, "div", 345, 12);
        Button($$payload3, {
          variant: "outline",
          size: "small",
          children: prevent_snippet_stringification(($$payload4) => {
            $$payload4.out.push(`<!---->Load Template Code`);
          }),
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> <span class="template-note svelte-xxao30">`);
        push_element($$payload3, "span", 353, 14);
        $$payload3.out.push(`Optional: Use as starting point</span>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 356, 12);
        $$payload3.out.push(`FastAPI Code (main.py or similar)</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Write your complete FastAPI application here. Include the /diagnose endpoint, request/response models, simulated AI call, and parameter usage..." rows="20" class="code-textarea svelte-xxao30">`);
        push_element($$payload3, "textarea", 357, 12);
        const $$body = escape_html(formData.fastApiCode);
        if ($$body) {
          $$payload3.out.push(`${$$body}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="explanation-section svelte-xxao30">`);
        push_element($$payload3, "div", 366, 10);
        $$payload3.out.push(`<h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 367, 12);
        $$payload3.out.push(`Implementation Explanation</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain your FastAPI implementation. Include how you handle the simulated AI call, parameter passing, error handling, and any security considerations..." rows="5" class="svelte-xxao30">`);
        push_element($$payload3, "textarea", 368, 12);
        const $$body_1 = escape_html(formData.fastApiExplanation);
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
        $$payload3.out.push(`<h2 class="svelte-xxao30">`);
        push_element($$payload3, "h2", 378, 10);
        $$payload3.out.push(`2. React Frontend Implementation</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-xxao30">`);
        push_element($$payload3, "p", 379, 10);
        $$payload3.out.push(`Create a React application with a user-friendly interface that
            allows symptom input and displays the API response with proper
            styling.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="code-section svelte-xxao30">`);
        push_element($$payload3, "div", 385, 10);
        $$payload3.out.push(`<div class="template-toggle svelte-xxao30">`);
        push_element($$payload3, "div", 386, 12);
        Button($$payload3, {
          variant: "outline",
          size: "small",
          children: prevent_snippet_stringification(($$payload4) => {
            $$payload4.out.push(`<!---->Load Template Code`);
          }),
          $$slots: { default: true }
        });
        $$payload3.out.push(`<!----> <span class="template-note svelte-xxao30">`);
        push_element($$payload3, "span", 394, 14);
        $$payload3.out.push(`Optional: Use as starting point</span>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 397, 12);
        $$payload3.out.push(`React Code (App.js or similar)</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Write your complete React component here. Include the symptom input form, API call logic, response display, and Tailwind CSS styling..." rows="18" class="code-textarea svelte-xxao30">`);
        push_element($$payload3, "textarea", 398, 12);
        const $$body_2 = escape_html(formData.reactCode);
        if ($$body_2) {
          $$payload3.out.push(`${$$body_2}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="explanation-section svelte-xxao30">`);
        push_element($$payload3, "div", 407, 10);
        $$payload3.out.push(`<h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 408, 12);
        $$payload3.out.push(`Frontend Explanation</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain your React implementation. Include component structure, state management, API integration approach, styling decisions, and mobile responsiveness..." rows="5" class="svelte-xxao30">`);
        push_element($$payload3, "textarea", 409, 12);
        const $$body_3 = escape_html(formData.reactExplanation);
        if ($$body_3) {
          $$payload3.out.push(`${$$body_3}`);
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
        $$payload3.out.push(`<h2 class="svelte-xxao30">`);
        push_element($$payload3, "h2", 419, 10);
        $$payload3.out.push(`3. Integration &amp; Additional Details</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-xxao30">`);
        push_element($$payload3, "p", 420, 10);
        $$payload3.out.push(`Provide additional implementation details, testing approach, and
            deployment considerations.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="integration-sections svelte-xxao30">`);
        push_element($$payload3, "div", 425, 10);
        $$payload3.out.push(`<div class="integration-item svelte-xxao30">`);
        push_element($$payload3, "div", 426, 12);
        $$payload3.out.push(`<h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 427, 14);
        $$payload3.out.push(`API Integration Notes</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Describe how the React frontend integrates with the FastAPI backend. Include CORS handling, error management, loading states, and data flow..." rows="4" class="svelte-xxao30">`);
        push_element($$payload3, "textarea", 428, 14);
        const $$body_4 = escape_html(formData.integrationNotes);
        if ($$body_4) {
          $$payload3.out.push(`${$$body_4}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="integration-item svelte-xxao30">`);
        push_element($$payload3, "div", 436, 12);
        $$payload3.out.push(`<h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 437, 14);
        $$payload3.out.push(`Testing Approach</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain how you would test this application. Include unit tests, integration tests, API testing, and user experience testing strategies..." rows="4" class="svelte-xxao30">`);
        push_element($$payload3, "textarea", 438, 14);
        const $$body_5 = escape_html(formData.testingApproach);
        if ($$body_5) {
          $$payload3.out.push(`${$$body_5}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="integration-item svelte-xxao30">`);
        push_element($$payload3, "div", 446, 12);
        $$payload3.out.push(`<h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 447, 14);
        $$payload3.out.push(`Deployment &amp; Production Notes</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Describe deployment considerations, environment variables, security measures, scaling considerations, and production readiness..." rows="4" class="svelte-xxao30">`);
        push_element($$payload3, "textarea", 448, 14);
        const $$body_6 = escape_html(formData.deploymentNotes);
        if ($$body_6) {
          $$payload3.out.push(`${$$body_6}`);
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
    $$payload2.out.push(`<!----> `);
    Card($$payload2, {
      class: "deliverable-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-xxao30">`);
        push_element($$payload3, "h2", 459, 10);
        $$payload3.out.push(`4. Code Submission Options</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-xxao30">`);
        push_element($$payload3, "p", 460, 10);
        $$payload3.out.push(`Submit your code using one of the following methods for evaluation.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="submission-options svelte-xxao30">`);
        push_element($$payload3, "div", 464, 10);
        $$payload3.out.push(`<div class="option-group svelte-xxao30">`);
        push_element($$payload3, "div", 465, 12);
        $$payload3.out.push(`<h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 466, 14);
        $$payload3.out.push(`Option A: File Upload</h4>`);
        pop_element();
        $$payload3.out.push(` <div class="file-upload svelte-xxao30">`);
        push_element($$payload3, "div", 467, 14);
        $$payload3.out.push(`<input type="file" multiple accept=".py,.js,.jsx,.html,.css,.json,.txt,.zip" id="code-upload" hidden class="svelte-xxao30"/>`);
        push_element($$payload3, "input", 468, 16);
        pop_element();
        $$payload3.out.push(` <label for="code-upload" class="upload-button svelte-xxao30">`);
        push_element($$payload3, "label", 476, 16);
        $$payload3.out.push(`${escape_html("Upload Code Files")}</label>`);
        pop_element();
        $$payload3.out.push(` `);
        {
          $$payload3.out.push("<!--[!-->");
        }
        $$payload3.out.push(`<!--]--></div>`);
        pop_element();
        $$payload3.out.push(` <p class="option-note svelte-xxao30">`);
        push_element($$payload3, "p", 487, 14);
        $$payload3.out.push(`Upload individual files or a ZIP archive</p>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="option-separator svelte-xxao30">`);
        push_element($$payload3, "div", 492, 12);
        $$payload3.out.push(`OR</div>`);
        pop_element();
        $$payload3.out.push(` <div class="option-group svelte-xxao30">`);
        push_element($$payload3, "div", 494, 12);
        $$payload3.out.push(`<h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 495, 14);
        $$payload3.out.push(`Option B: GitHub Repository</h4>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          type: "url",
          placeholder: "https://github.com/username/repository",
          get value() {
            return formData.githubRepoUrl;
          },
          set value($$value) {
            formData.githubRepoUrl = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----> <p class="option-note svelte-xxao30">`);
        push_element($$payload3, "p", 502, 14);
        $$payload3.out.push(`Public repository with complete implementation</p>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="option-separator svelte-xxao30">`);
        push_element($$payload3, "div", 507, 12);
        $$payload3.out.push(`OR</div>`);
        pop_element();
        $$payload3.out.push(` <div class="option-group svelte-xxao30">`);
        push_element($$payload3, "div", 509, 12);
        $$payload3.out.push(`<h4 class="svelte-xxao30">`);
        push_element($$payload3, "h4", 510, 14);
        $$payload3.out.push(`Option C: Live Demo</h4>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          type: "url",
          placeholder: "https://your-app.vercel.app or https://your-app.herokuapp.com",
          get value() {
            return formData.liveDemo;
          },
          set value($$value) {
            formData.liveDemo = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----> <p class="option-note svelte-xxao30">`);
        push_element($$payload3, "p", 517, 14);
        $$payload3.out.push(`Deployed application with working functionality</p>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> <div class="navigation-buttons svelte-xxao30">`);
    push_element($$payload2, "div", 524, 8);
    Button($$payload2, {
      variant: "outline",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<!---->← Previous: Prompt Engineering`);
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Button($$payload2, {
      variant: "primary",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<!---->Final Submission →`);
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
