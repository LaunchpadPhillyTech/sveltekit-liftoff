import { D as push, V as copy_payload, W as assign_payload, G as pop, U as head, M as push_element, O as pop_element, X as attr_style, N as escape_html, F as prevent_snippet_stringification, I as FILENAME, Y as stringify } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { H as Header, B as Button, F as Footer } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { I as Input } from "../../../../chunks/Input.js";
_page[FILENAME] = "src/routes/assessment/prompt-engineering/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  let progress = 0;
  let timeRemaining = "48:00:00";
  let formData = {
    coreSystemPrompt: "",
    promptStrategy: "",
    temperatureHigh: "",
    temperatureLow: "",
    temperatureExplanation: "",
    topPStrict: "",
    topPGeneral: "",
    topPExplanation: "",
    frequencyPenaltyValue: "",
    frequencyPenaltyExplanation: "",
    presencePenaltyValue: "",
    presencePenaltyExplanation: ""
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Prompt Engineering - Assessment - GY6AI</title>`;
      $$payload3.out.push(`<meta name="description" content="Prompt engineering and AI configuration assessment section." class="svelte-1abgi7j"/>`);
      push_element($$payload3, "meta", 139, 2);
      pop_element();
      $$payload3.out.push(` <meta name="robots" content="noindex, nofollow" class="svelte-1abgi7j"/>`);
      push_element($$payload3, "meta", 143, 2);
      pop_element();
    });
    $$payload2.out.push(`<div class="gradient-bg svelte-1abgi7j">`);
    push_element($$payload2, "div", 147, 0);
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` `);
    Header($$payload2);
    $$payload2.out.push(`<!----> <main class="assessment-main svelte-1abgi7j">`);
    push_element($$payload2, "main", 152, 0);
    $$payload2.out.push(`<div class="container svelte-1abgi7j">`);
    push_element($$payload2, "div", 153, 2);
    $$payload2.out.push(`<div class="assessment-header svelte-1abgi7j">`);
    push_element($$payload2, "div", 154, 4);
    $$payload2.out.push(`<div class="section-info svelte-1abgi7j">`);
    push_element($$payload2, "div", 155, 6);
    $$payload2.out.push(`<h1 class="section-title svelte-1abgi7j">`);
    push_element($$payload2, "h1", 156, 8);
    $$payload2.out.push(`Section III: Prompt Engineering &amp; Custom Configuration</h1>`);
    pop_element();
    $$payload2.out.push(` <div class="progress-bar svelte-1abgi7j">`);
    push_element($$payload2, "div", 159, 8);
    $$payload2.out.push(`<div class="progress-fill svelte-1abgi7j"${attr_style(`width: ${stringify(progress)}%`)}>`);
    push_element($$payload2, "div", 160, 10);
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <span class="progress-text svelte-1abgi7j">`);
    push_element($$payload2, "span", 162, 8);
    $$payload2.out.push(`${escape_html(progress)}% Complete</span>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <div class="timer-display svelte-1abgi7j">`);
    push_element($$payload2, "div", 165, 6);
    $$payload2.out.push(`<span class="timer-label svelte-1abgi7j">`);
    push_element($$payload2, "span", 166, 8);
    $$payload2.out.push(`Time Remaining:</span>`);
    pop_element();
    $$payload2.out.push(` <span class="timer-value svelte-1abgi7j">`);
    push_element($$payload2, "span", 167, 8);
    $$payload2.out.push(`${escape_html(timeRemaining)}</span>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <div class="content-grid svelte-1abgi7j">`);
    push_element($$payload2, "div", 171, 4);
    $$payload2.out.push(`<div class="scenario-column svelte-1abgi7j">`);
    push_element($$payload2, "div", 172, 6);
    Card($$payload2, {
      class: "scenario-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-1abgi7j">`);
        push_element($$payload3, "h2", 174, 10);
        $$payload3.out.push(`Scenario</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="scenario-text svelte-1abgi7j">`);
        push_element($$payload3, "p", 175, 10);
        $$payload3.out.push(`A new client, <strong class="svelte-1abgi7j">`);
        push_element($$payload3, "strong", 176, 26);
        $$payload3.out.push(`"MediBot Health,"</strong>`);
        pop_element();
        $$payload3.out.push(` is developing an AI-powered
            symptom checker. They need help ensuring their AI assistant provides
            accurate, consistent, and non-hallucinatory responses to user queries
            about health symptoms. They also want to fine-tune the AI's "personality"
            for empathy and clarity.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="requirements-box svelte-1abgi7j">`);
        push_element($$payload3, "div", 183, 10);
        $$payload3.out.push(`<h3 class="svelte-1abgi7j">`);
        push_element($$payload3, "h3", 184, 12);
        $$payload3.out.push(`Required Deliverables:</h3>`);
        pop_element();
        $$payload3.out.push(` <ul class="svelte-1abgi7j">`);
        push_element($$payload3, "ul", 185, 12);
        $$payload3.out.push(`<li class="svelte-1abgi7j">`);
        push_element($$payload3, "li", 186, 14);
        $$payload3.out.push(`Complete core system prompt for medical AI assistant</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1abgi7j">`);
        push_element($$payload3, "li", 187, 14);
        $$payload3.out.push(`Prompt engineering strategy explanation (max 200 words)</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1abgi7j">`);
        push_element($$payload3, "li", 188, 14);
        $$payload3.out.push(`Parameter configuration examples for different scenarios</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1abgi7j">`);
        push_element($$payload3, "li", 189, 14);
        $$payload3.out.push(`Justification for each parameter setting</li>`);
        pop_element();
        $$payload3.out.push(`</ul>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="focus-areas svelte-1abgi7j">`);
        push_element($$payload3, "div", 193, 10);
        $$payload3.out.push(`<h3 class="svelte-1abgi7j">`);
        push_element($$payload3, "h3", 194, 12);
        $$payload3.out.push(`Focus Areas:</h3>`);
        pop_element();
        $$payload3.out.push(` <ul class="svelte-1abgi7j">`);
        push_element($$payload3, "ul", 195, 12);
        $$payload3.out.push(`<li class="svelte-1abgi7j">`);
        push_element($$payload3, "li", 196, 14);
        $$payload3.out.push(`Hallucination reduction</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1abgi7j">`);
        push_element($$payload3, "li", 197, 14);
        $$payload3.out.push(`Response consistency</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1abgi7j">`);
        push_element($$payload3, "li", 198, 14);
        $$payload3.out.push(`Medical accuracy</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1abgi7j">`);
        push_element($$payload3, "li", 199, 14);
        $$payload3.out.push(`Empathetic communication</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1abgi7j">`);
        push_element($$payload3, "li", 200, 14);
        $$payload3.out.push(`Clear, accessible language</li>`);
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
    $$payload2.out.push(` <div class="form-column svelte-1abgi7j">`);
    push_element($$payload2, "div", 206, 6);
    Card($$payload2, {
      class: "deliverable-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-1abgi7j">`);
        push_element($$payload3, "h2", 208, 10);
        $$payload3.out.push(`1. Core System Prompt Development</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-1abgi7j">`);
        push_element($$payload3, "p", 209, 10);
        $$payload3.out.push(`Design a core system prompt for the MediBot Health AI assistant that
            minimizes hallucinations and provides consistent, medically
            relevant, and clear information regarding common cold symptoms.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="prompt-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 215, 10);
        $$payload3.out.push(`<h4 class="svelte-1abgi7j">`);
        push_element($$payload3, "h4", 216, 12);
        $$payload3.out.push(`Core System Prompt</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Write your complete system prompt here. Consider including: role definition, behavior guidelines, accuracy requirements, response format, safety constraints, and empathy instructions..." rows="12" class="large-textarea svelte-1abgi7j">`);
        push_element($$payload3, "textarea", 217, 12);
        const $$body = escape_html(formData.coreSystemPrompt);
        if ($$body) {
          $$payload3.out.push(`${$$body}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="strategy-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 226, 10);
        $$payload3.out.push(`<h4 class="svelte-1abgi7j">`);
        push_element($$payload3, "h4", 227, 12);
        $$payload3.out.push(`Prompt Engineering Strategy (Max 200 words)</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain your prompt engineering strategy, highlighting how it addresses hallucination reduction and consistency. Include specific techniques, constraints, and design decisions..." rows="5" class="svelte-1abgi7j">`);
        push_element($$payload3, "textarea", 228, 12);
        const $$body_1 = escape_html(formData.promptStrategy);
        if ($$body_1) {
          $$payload3.out.push(`${$$body_1}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(` <div class="word-limit svelte-1abgi7j">`);
        push_element($$payload3, "div", 234, 12);
        $$payload3.out.push(`Max 200 words</div>`);
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
        $$payload3.out.push(`<h2 class="svelte-1abgi7j">`);
        push_element($$payload3, "h2", 239, 10);
        $$payload3.out.push(`2. Parameter Configuration for Different Scenarios</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-1abgi7j">`);
        push_element($$payload3, "p", 240, 10);
        $$payload3.out.push(`Provide examples of how you would adjust prompt parameters to
            achieve specific outcomes, explaining the impact of each adjustment.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="parameters-grid svelte-1abgi7j">`);
        push_element($$payload3, "div", 245, 10);
        $$payload3.out.push(`<div class="parameter-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 246, 12);
        $$payload3.out.push(`<h3 class="svelte-1abgi7j">`);
        push_element($$payload3, "h3", 247, 14);
        $$payload3.out.push(`Temperature Configuration</h3>`);
        pop_element();
        $$payload3.out.push(` <p class="parameter-question svelte-1abgi7j">`);
        push_element($$payload3, "p", 248, 14);
        $$payload3.out.push(`How would you set the temperature for different response
                requirements?</p>`);
        pop_element();
        $$payload3.out.push(` <div class="parameter-inputs svelte-1abgi7j">`);
        push_element($$payload3, "div", 253, 14);
        $$payload3.out.push(`<div class="input-group svelte-1abgi7j">`);
        push_element($$payload3, "div", 254, 16);
        $$payload3.out.push(`<label class="svelte-1abgi7j">`);
        push_element($$payload3, "label", 255, 18);
        $$payload3.out.push(`High Factual Accuracy Value:</label>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "e.g., 0.1",
          get value() {
            return formData.temperatureHigh;
          },
          set value($$value) {
            formData.temperatureHigh = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(` <div class="input-group svelte-1abgi7j">`);
        push_element($$payload3, "div", 263, 16);
        $$payload3.out.push(`<label class="svelte-1abgi7j">`);
        push_element($$payload3, "label", 264, 18);
        $$payload3.out.push(`Empathetic/Conversational Value:</label>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "e.g., 0.7",
          get value() {
            return formData.temperatureLow;
          },
          set value($$value) {
            formData.temperatureLow = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="explanation-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 273, 14);
        $$payload3.out.push(`<h5 class="svelte-1abgi7j">`);
        push_element($$payload3, "h5", 274, 16);
        $$payload3.out.push(`Temperature Explanation &amp; Impact</h5>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain why you chose these values and their expected effect on the AI's response for the MediBot Health scenario..." rows="4" class="svelte-1abgi7j">`);
        push_element($$payload3, "textarea", 275, 16);
        const $$body_2 = escape_html(formData.temperatureExplanation);
        if ($$body_2) {
          $$payload3.out.push(`${$$body_2}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="parameter-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 284, 12);
        $$payload3.out.push(`<h3 class="svelte-1abgi7j">`);
        push_element($$payload3, "h3", 285, 14);
        $$payload3.out.push(`Top P (Nucleus Sampling)</h3>`);
        pop_element();
        $$payload3.out.push(` <p class="parameter-question svelte-1abgi7j">`);
        push_element($$payload3, "p", 286, 14);
        $$payload3.out.push(`How does top_p influence response diversity and how would you
                configure it?</p>`);
        pop_element();
        $$payload3.out.push(` <div class="parameter-inputs svelte-1abgi7j">`);
        push_element($$payload3, "div", 291, 14);
        $$payload3.out.push(`<div class="input-group svelte-1abgi7j">`);
        push_element($$payload3, "div", 292, 16);
        $$payload3.out.push(`<label class="svelte-1abgi7j">`);
        push_element($$payload3, "label", 293, 18);
        $$payload3.out.push(`Strict Medical Advice Value:</label>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "e.g., 0.3",
          get value() {
            return formData.topPStrict;
          },
          set value($$value) {
            formData.topPStrict = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(` <div class="input-group svelte-1abgi7j">`);
        push_element($$payload3, "div", 301, 16);
        $$payload3.out.push(`<label class="svelte-1abgi7j">`);
        push_element($$payload3, "label", 302, 18);
        $$payload3.out.push(`General Health Tips Value:</label>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "e.g., 0.8",
          get value() {
            return formData.topPGeneral;
          },
          set value($$value) {
            formData.topPGeneral = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="explanation-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 311, 14);
        $$payload3.out.push(`<h5 class="svelte-1abgi7j">`);
        push_element($$payload3, "h5", 312, 16);
        $$payload3.out.push(`Top P Explanation &amp; Impact</h5>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain how top_p influences response diversity and why these values are appropriate for different medical contexts..." rows="4" class="svelte-1abgi7j">`);
        push_element($$payload3, "textarea", 313, 16);
        const $$body_3 = escape_html(formData.topPExplanation);
        if ($$body_3) {
          $$payload3.out.push(`${$$body_3}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="parameter-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 322, 12);
        $$payload3.out.push(`<h3 class="svelte-1abgi7j">`);
        push_element($$payload3, "h3", 323, 14);
        $$payload3.out.push(`Frequency Penalty</h3>`);
        pop_element();
        $$payload3.out.push(` <p class="parameter-question svelte-1abgi7j">`);
        push_element($$payload3, "p", 324, 14);
        $$payload3.out.push(`How would you use frequency penalty to discourage repetitive
                phrasing or common medical jargon?</p>`);
        pop_element();
        $$payload3.out.push(` <div class="parameter-inputs svelte-1abgi7j">`);
        push_element($$payload3, "div", 329, 14);
        $$payload3.out.push(`<div class="input-group svelte-1abgi7j">`);
        push_element($$payload3, "div", 330, 16);
        $$payload3.out.push(`<label class="svelte-1abgi7j">`);
        push_element($$payload3, "label", 331, 18);
        $$payload3.out.push(`Recommended Value:</label>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "e.g., 0.2",
          get value() {
            return formData.frequencyPenaltyValue;
          },
          set value($$value) {
            formData.frequencyPenaltyValue = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="explanation-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 340, 14);
        $$payload3.out.push(`<h5 class="svelte-1abgi7j">`);
        push_element($$payload3, "h5", 341, 16);
        $$payload3.out.push(`Frequency Penalty Explanation &amp; Impact</h5>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain how frequency penalty would help make the AI's medical responses sound more natural and less repetitive..." rows="4" class="svelte-1abgi7j">`);
        push_element($$payload3, "textarea", 342, 16);
        const $$body_4 = escape_html(formData.frequencyPenaltyExplanation);
        if ($$body_4) {
          $$payload3.out.push(`${$$body_4}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="parameter-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 351, 12);
        $$payload3.out.push(`<h3 class="svelte-1abgi7j">`);
        push_element($$payload3, "h3", 352, 14);
        $$payload3.out.push(`Presence Penalty</h3>`);
        pop_element();
        $$payload3.out.push(` <p class="parameter-question svelte-1abgi7j">`);
        push_element($$payload3, "p", 353, 14);
        $$payload3.out.push(`How would you use presence penalty to encourage new concepts or
                perspectives?</p>`);
        pop_element();
        $$payload3.out.push(` <div class="parameter-inputs svelte-1abgi7j">`);
        push_element($$payload3, "div", 358, 14);
        $$payload3.out.push(`<div class="input-group svelte-1abgi7j">`);
        push_element($$payload3, "div", 359, 16);
        $$payload3.out.push(`<label class="svelte-1abgi7j">`);
        push_element($$payload3, "label", 360, 18);
        $$payload3.out.push(`Recommended Value:</label>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "e.g., 0.1",
          get value() {
            return formData.presencePenaltyValue;
          },
          set value($$value) {
            formData.presencePenaltyValue = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="explanation-section svelte-1abgi7j">`);
        push_element($$payload3, "div", 369, 14);
        $$payload3.out.push(`<h5 class="svelte-1abgi7j">`);
        push_element($$payload3, "h5", 370, 16);
        $$payload3.out.push(`Presence Penalty Explanation &amp; Impact</h5>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain how presence penalty would encourage the AI to introduce new concepts or perspectives relevant to health queries..." rows="4" class="svelte-1abgi7j">`);
        push_element($$payload3, "textarea", 371, 16);
        const $$body_5 = escape_html(formData.presencePenaltyExplanation);
        if ($$body_5) {
          $$payload3.out.push(`${$$body_5}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> <div class="navigation-buttons svelte-1abgi7j">`);
    push_element($$payload2, "div", 382, 8);
    Button($$payload2, {
      variant: "outline",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<!---->← Previous: Technical Solution`);
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    Button($$payload2, {
      variant: "primary",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<!---->Next: Implementation →`);
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
