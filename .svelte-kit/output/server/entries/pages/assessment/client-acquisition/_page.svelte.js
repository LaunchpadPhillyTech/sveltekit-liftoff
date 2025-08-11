import { D as push, V as copy_payload, W as assign_payload, G as pop, U as head, M as push_element, O as pop_element, X as attr_style, N as escape_html, F as prevent_snippet_stringification, Q as attr_class, I as FILENAME, Y as stringify } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { H as Header, B as Button, F as Footer } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { I as Input } from "../../../../chunks/Input.js";
import { A as AutoSave } from "../../../../chunks/AutoSave.js";
_page[FILENAME] = "src/routes/assessment/client-acquisition/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  let progress = 0;
  let timeRemaining = "48:00:00";
  let formData = {
    solutionSummary: "",
    pitchScript: "",
    painPoint1: "",
    painPoint1Solution: "",
    painPoint2: "",
    painPoint2Solution: "",
    painPoint3: "",
    painPoint3Solution: "",
    videoFile: null,
    videoUrl: ""
  };
  let wordCount = 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Client Acquisition &amp; Problem-Solving - Assessment - GY6AI</title>`;
      $$payload3.out.push(`<meta name="description" content="Client acquisition and problem-solving assessment section." class="svelte-1ces2mv"/>`);
      push_element($$payload3, "meta", 161, 2);
      pop_element();
      $$payload3.out.push(` <meta name="robots" content="noindex, nofollow" class="svelte-1ces2mv"/>`);
      push_element($$payload3, "meta", 165, 2);
      pop_element();
    });
    $$payload2.out.push(`<div class="gradient-bg svelte-1ces2mv">`);
    push_element($$payload2, "div", 169, 0);
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` `);
    Header($$payload2);
    $$payload2.out.push(`<!----> <main class="assessment-main svelte-1ces2mv">`);
    push_element($$payload2, "main", 174, 0);
    AutoSave($$payload2, {
      sectionId: "client-acquisition",
      data: formData,
      interval: 3e4,
      showStatus: true
    });
    $$payload2.out.push(`<!----> <div class="container svelte-1ces2mv">`);
    push_element($$payload2, "div", 178, 2);
    $$payload2.out.push(`<div class="assessment-header svelte-1ces2mv">`);
    push_element($$payload2, "div", 179, 4);
    $$payload2.out.push(`<div class="section-info svelte-1ces2mv">`);
    push_element($$payload2, "div", 180, 6);
    $$payload2.out.push(`<h1 class="section-title svelte-1ces2mv">`);
    push_element($$payload2, "h1", 181, 8);
    $$payload2.out.push(`Section I: Client Acquisition &amp; Problem-Solving</h1>`);
    pop_element();
    $$payload2.out.push(` <div class="progress-bar svelte-1ces2mv">`);
    push_element($$payload2, "div", 184, 8);
    $$payload2.out.push(`<div class="progress-fill svelte-1ces2mv"${attr_style(`width: ${stringify(progress)}%`)}>`);
    push_element($$payload2, "div", 185, 10);
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <span class="progress-text svelte-1ces2mv">`);
    push_element($$payload2, "span", 187, 8);
    $$payload2.out.push(`${escape_html(progress)}% Complete</span>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <div class="timer-display svelte-1ces2mv">`);
    push_element($$payload2, "div", 190, 6);
    $$payload2.out.push(`<span class="timer-label svelte-1ces2mv">`);
    push_element($$payload2, "span", 191, 8);
    $$payload2.out.push(`Time Remaining:</span>`);
    pop_element();
    $$payload2.out.push(` <span class="timer-value svelte-1ces2mv">`);
    push_element($$payload2, "span", 192, 8);
    $$payload2.out.push(`${escape_html(timeRemaining)}</span>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <div class="content-grid svelte-1ces2mv">`);
    push_element($$payload2, "div", 196, 4);
    $$payload2.out.push(`<div class="scenario-column svelte-1ces2mv">`);
    push_element($$payload2, "div", 197, 6);
    Card($$payload2, {
      class: "scenario-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-1ces2mv">`);
        push_element($$payload3, "h2", 199, 10);
        $$payload3.out.push(`Scenario</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="scenario-text svelte-1ces2mv">`);
        push_element($$payload3, "p", 200, 10);
        $$payload3.out.push(`You are a newly onboarded Client Solutions Specialist at GY6AI, a
            company specializing in providing tailored IT infrastructure and
            software solutions. Your first critical task is to engage with a
            potential new client, <strong class="svelte-1ces2mv">`);
        push_element($$payload3, "strong", 204, 34);
        $$payload3.out.push(`"Global Connect Corp."</strong>`);
        pop_element();
        $$payload3.out.push(` (a mock
            client), which is experiencing significant issues with its legacy data
            processing system and requires a modern, scalable, and secure solution.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="requirements-box svelte-1ces2mv">`);
        push_element($$payload3, "div", 209, 10);
        $$payload3.out.push(`<h3 class="svelte-1ces2mv">`);
        push_element($$payload3, "h3", 210, 12);
        $$payload3.out.push(`Required Deliverables:</h3>`);
        pop_element();
        $$payload3.out.push(` <ul class="svelte-1ces2mv">`);
        push_element($$payload3, "ul", 211, 12);
        $$payload3.out.push(`<li class="svelte-1ces2mv">`);
        push_element($$payload3, "li", 212, 14);
        $$payload3.out.push(`Brief written summary (max 500 words) of your proposed solution</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1ces2mv">`);
        push_element($$payload3, "li", 215, 14);
        $$payload3.out.push(`Short video recording or detailed script of your mock pitch</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1ces2mv">`);
        push_element($$payload3, "li", 218, 14);
        $$payload3.out.push(`Identify and articulate at least three critical pain points</li>`);
        pop_element();
        $$payload3.out.push(` <li class="svelte-1ces2mv">`);
        push_element($$payload3, "li", 221, 14);
        $$payload3.out.push(`Explain how your solution specifically alleviates each pain
                point</li>`);
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
    $$payload2.out.push(` <div class="form-column svelte-1ces2mv">`);
    push_element($$payload2, "div", 230, 6);
    Card($$payload2, {
      class: "deliverable-card",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<h2 class="svelte-1ces2mv">`);
        push_element($$payload3, "h2", 232, 10);
        $$payload3.out.push(`1. Solution Summary</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-1ces2mv">`);
        push_element($$payload3, "p", 233, 10);
        $$payload3.out.push(`Prepare a concise written summary (max 500 words) outlining how
            GY6AI can address Global Connect Corp.'s data processing challenges.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="textarea-container svelte-1ces2mv">`);
        push_element($$payload3, "div", 238, 10);
        $$payload3.out.push(`<textarea placeholder="Describe your proposed solution for Global Connect Corp., highlighting key benefits and how it addresses their legacy system issues..." rows="8" class="svelte-1ces2mv">`);
        push_element($$payload3, "textarea", 239, 12);
        const $$body = escape_html(formData.solutionSummary);
        if ($$body) {
          $$payload3.out.push(`${$$body}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(` <div class="word-counter svelte-1ces2mv">`);
        push_element($$payload3, "div", 245, 12);
        $$payload3.out.push(`<span${attr_class("word-count svelte-1ces2mv", void 0, { "warning": wordCount > 450, "error": wordCount > 500 })}>`);
        push_element($$payload3, "span", 246, 14);
        $$payload3.out.push(`${escape_html(wordCount)}/500 words</span>`);
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
        $$payload3.out.push(`<h2 class="svelte-1ces2mv">`);
        push_element($$payload3, "h2", 258, 10);
        $$payload3.out.push(`2. Mock Pitch</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-1ces2mv">`);
        push_element($$payload3, "p", 259, 10);
        $$payload3.out.push(`Create either a video recording (max 10 minutes) or a detailed
            script demonstrating your communication style and ability to
            articulate value to a non-technical executive.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="pitch-options svelte-1ces2mv">`);
        push_element($$payload3, "div", 265, 10);
        $$payload3.out.push(`<div class="option-group svelte-1ces2mv">`);
        push_element($$payload3, "div", 266, 12);
        $$payload3.out.push(`<h4 class="svelte-1ces2mv">`);
        push_element($$payload3, "h4", 267, 14);
        $$payload3.out.push(`Option A: Video Upload</h4>`);
        pop_element();
        $$payload3.out.push(` <div class="file-upload svelte-1ces2mv">`);
        push_element($$payload3, "div", 268, 14);
        $$payload3.out.push(`<input type="file" accept="video/*" id="video-upload" hidden class="svelte-1ces2mv"/>`);
        push_element($$payload3, "input", 269, 16);
        pop_element();
        $$payload3.out.push(` <label for="video-upload" class="upload-button svelte-1ces2mv">`);
        push_element($$payload3, "label", 276, 16);
        $$payload3.out.push(`${escape_html("Upload Video")}</label>`);
        pop_element();
        $$payload3.out.push(` `);
        {
          $$payload3.out.push("<!--[!-->");
        }
        $$payload3.out.push(`<!--]--></div>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="option-separator svelte-1ces2mv">`);
        push_element($$payload3, "div", 286, 12);
        $$payload3.out.push(`OR</div>`);
        pop_element();
        $$payload3.out.push(` <div class="option-group svelte-1ces2mv">`);
        push_element($$payload3, "div", 288, 12);
        $$payload3.out.push(`<h4 class="svelte-1ces2mv">`);
        push_element($$payload3, "h4", 289, 14);
        $$payload3.out.push(`Option B: Detailed Script</h4>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Write your detailed pitch script here. Include your opening, key points, value proposition, and closing..." rows="6" class="svelte-1ces2mv">`);
        push_element($$payload3, "textarea", 290, 14);
        const $$body_1 = escape_html(formData.pitchScript);
        if ($$body_1) {
          $$payload3.out.push(`${$$body_1}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="option-group svelte-1ces2mv">`);
        push_element($$payload3, "div", 298, 12);
        $$payload3.out.push(`<h4 class="svelte-1ces2mv">`);
        push_element($$payload3, "h4", 299, 14);
        $$payload3.out.push(`Option C: Video URL</h4>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          type: "url",
          placeholder: "https://youtu.be/example or https://vimeo.com/example",
          get value() {
            return formData.videoUrl;
          },
          set value($$value) {
            formData.videoUrl = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----></div>`);
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
        $$payload3.out.push(`<h2 class="svelte-1ces2mv">`);
        push_element($$payload3, "h2", 311, 10);
        $$payload3.out.push(`3. Critical Pain Points Analysis</h2>`);
        pop_element();
        $$payload3.out.push(` <p class="instruction svelte-1ces2mv">`);
        push_element($$payload3, "p", 312, 10);
        $$payload3.out.push(`Identify and articulate at least three critical pain points Global
            Connect Corp. is likely facing with their legacy system and explain
            how your solution alleviates each.</p>`);
        pop_element();
        $$payload3.out.push(` <div class="pain-points svelte-1ces2mv">`);
        push_element($$payload3, "div", 318, 10);
        $$payload3.out.push(`<div class="pain-point svelte-1ces2mv">`);
        push_element($$payload3, "div", 319, 12);
        $$payload3.out.push(`<h4 class="svelte-1ces2mv">`);
        push_element($$payload3, "h4", 320, 14);
        $$payload3.out.push(`Pain Point #1</h4>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "Describe the first critical pain point...",
          get value() {
            return formData.painPoint1;
          },
          set value($$value) {
            formData.painPoint1 = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----> <h5 class="svelte-1ces2mv">`);
        push_element($$payload3, "h5", 326, 14);
        $$payload3.out.push(`How Your Solution Addresses This:</h5>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain how your proposed solution specifically alleviates this pain point..." rows="3" class="svelte-1ces2mv">`);
        push_element($$payload3, "textarea", 327, 14);
        const $$body_2 = escape_html(formData.painPoint1Solution);
        if ($$body_2) {
          $$payload3.out.push(`${$$body_2}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="pain-point svelte-1ces2mv">`);
        push_element($$payload3, "div", 335, 12);
        $$payload3.out.push(`<h4 class="svelte-1ces2mv">`);
        push_element($$payload3, "h4", 336, 14);
        $$payload3.out.push(`Pain Point #2</h4>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "Describe the second critical pain point...",
          get value() {
            return formData.painPoint2;
          },
          set value($$value) {
            formData.painPoint2 = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----> <h5 class="svelte-1ces2mv">`);
        push_element($$payload3, "h5", 342, 14);
        $$payload3.out.push(`How Your Solution Addresses This:</h5>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain how your proposed solution specifically alleviates this pain point..." rows="3" class="svelte-1ces2mv">`);
        push_element($$payload3, "textarea", 343, 14);
        const $$body_3 = escape_html(formData.painPoint2Solution);
        if ($$body_3) {
          $$payload3.out.push(`${$$body_3}`);
        }
        $$payload3.out.push(`</textarea>`);
        pop_element();
        $$payload3.out.push(`</div>`);
        pop_element();
        $$payload3.out.push(` <div class="pain-point svelte-1ces2mv">`);
        push_element($$payload3, "div", 351, 12);
        $$payload3.out.push(`<h4 class="svelte-1ces2mv">`);
        push_element($$payload3, "h4", 352, 14);
        $$payload3.out.push(`Pain Point #3</h4>`);
        pop_element();
        $$payload3.out.push(` `);
        Input($$payload3, {
          placeholder: "Describe the third critical pain point...",
          get value() {
            return formData.painPoint3;
          },
          set value($$value) {
            formData.painPoint3 = $$value;
            $$settled = false;
          }
        });
        $$payload3.out.push(`<!----> <h5 class="svelte-1ces2mv">`);
        push_element($$payload3, "h5", 358, 14);
        $$payload3.out.push(`How Your Solution Addresses This:</h5>`);
        pop_element();
        $$payload3.out.push(` <textarea placeholder="Explain how your proposed solution specifically alleviates this pain point..." rows="3" class="svelte-1ces2mv">`);
        push_element($$payload3, "textarea", 359, 14);
        const $$body_4 = escape_html(formData.painPoint3Solution);
        if ($$body_4) {
          $$payload3.out.push(`${$$body_4}`);
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
    $$payload2.out.push(`<!----> <div class="action-buttons svelte-1ces2mv">`);
    push_element($$payload2, "div", 369, 8);
    $$payload2.out.push(`<div class="save-section svelte-1ces2mv">`);
    push_element($$payload2, "div", 370, 10);
    Button($$payload2, {
      variant: "ghost",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<!---->💾 Save Progress`);
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> <p class="auto-save-note svelte-1ces2mv">`);
    push_element($$payload2, "p", 374, 12);
    $$payload2.out.push(`Auto-saves every 30 seconds</p>`);
    pop_element();
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` <div class="navigation-buttons svelte-1ces2mv">`);
    push_element($$payload2, "div", 377, 10);
    Button($$payload2, {
      variant: "outline",
      children: prevent_snippet_stringification(($$payload3) => {
        $$payload3.out.push(`<!---->← Previous: Overview`);
      }),
      $$slots: { default: true }
    });
    $$payload2.out.push(`<!----> `);
    {
      $$payload2.out.push("<!--[!-->");
      Button($$payload2, {
        variant: "secondary",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Next: Technical Solution →`);
        }),
        $$slots: { default: true }
      });
    }
    $$payload2.out.push(`<!--]--></div>`);
    pop_element();
    $$payload2.out.push(`</div>`);
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
