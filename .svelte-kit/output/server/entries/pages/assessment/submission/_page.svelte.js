import { D as push, V as copy_payload, W as assign_payload, G as pop, U as head, M as push_element, O as pop_element, X as attr_style, N as escape_html, F as prevent_snippet_stringification, Q as attr_class, T as attr, I as FILENAME, Y as stringify } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { H as Header, B as Button, F as Footer } from "../../../../chunks/Button.js";
import { C as Card } from "../../../../chunks/Card.js";
import { I as Input } from "../../../../chunks/Input.js";
_page[FILENAME] = "src/routes/assessment/submission/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  let timeRemaining = "48:00:00";
  let overallProgress = 0;
  let sectionProgress = {
    clientAcquisition: { completed: false, progress: 0 },
    technicalSolution: { completed: false, progress: 0 },
    promptEngineering: { completed: false, progress: 0 },
    implementation: { completed: false, progress: 0 }
  };
  let candidateInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    additionalNotes: "",
    consent: false
  };
  function getSectionStatusIcon(section) {
    if (section.completed) {
      return "✅";
    } else if (section.progress > 0) {
      return "🔄";
    } else {
      return "⚪";
    }
  }
  function getSectionStatusText(section) {
    if (section.completed) {
      return "Completed";
    } else if (section.progress > 0) {
      return `${section.progress}% In Progress`;
    } else {
      return "Not Started";
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>Final Submission - Assessment - GY6AI</title>`;
      $$payload3.out.push(`<meta name="description" content="Final submission and review for the Client Solutions Specialist assessment." class="svelte-1y4q5qm"/>`);
      push_element($$payload3, "meta", 222, 2);
      pop_element();
      $$payload3.out.push(` <meta name="robots" content="noindex, nofollow" class="svelte-1y4q5qm"/>`);
      push_element($$payload3, "meta", 226, 2);
      pop_element();
    });
    $$payload2.out.push(`<div class="gradient-bg svelte-1y4q5qm">`);
    push_element($$payload2, "div", 230, 0);
    $$payload2.out.push(`</div>`);
    pop_element();
    $$payload2.out.push(` `);
    Header($$payload2);
    $$payload2.out.push(`<!----> <main class="assessment-main svelte-1y4q5qm">`);
    push_element($$payload2, "main", 235, 0);
    $$payload2.out.push(`<div class="container svelte-1y4q5qm">`);
    push_element($$payload2, "div", 236, 2);
    {
      $$payload2.out.push("<!--[-->");
      $$payload2.out.push(`<div class="assessment-header svelte-1y4q5qm">`);
      push_element($$payload2, "div", 238, 6);
      $$payload2.out.push(`<div class="section-info svelte-1y4q5qm">`);
      push_element($$payload2, "div", 239, 8);
      $$payload2.out.push(`<h1 class="section-title svelte-1y4q5qm">`);
      push_element($$payload2, "h1", 240, 10);
      $$payload2.out.push(`Final Submission &amp; Review</h1>`);
      pop_element();
      $$payload2.out.push(` <div class="progress-bar svelte-1y4q5qm">`);
      push_element($$payload2, "div", 241, 10);
      $$payload2.out.push(`<div class="progress-fill svelte-1y4q5qm"${attr_style(`width: ${stringify(overallProgress)}%`)}>`);
      push_element($$payload2, "div", 242, 12);
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <span class="progress-text svelte-1y4q5qm">`);
      push_element($$payload2, "span", 244, 10);
      $$payload2.out.push(`Overall Progress: ${escape_html(overallProgress)}%</span>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="timer-display svelte-1y4q5qm">`);
      push_element($$payload2, "div", 248, 8);
      $$payload2.out.push(`<span class="timer-label svelte-1y4q5qm">`);
      push_element($$payload2, "span", 249, 10);
      $$payload2.out.push(`Time Remaining:</span>`);
      pop_element();
      $$payload2.out.push(` <span class="timer-value svelte-1y4q5qm">`);
      push_element($$payload2, "span", 250, 10);
      $$payload2.out.push(`${escape_html(timeRemaining)}</span>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="content-grid svelte-1y4q5qm">`);
      push_element($$payload2, "div", 254, 6);
      $$payload2.out.push(`<div class="review-column svelte-1y4q5qm">`);
      push_element($$payload2, "div", 255, 8);
      Card($$payload2, {
        class: "review-card",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<h2 class="svelte-1y4q5qm">`);
          push_element($$payload3, "h2", 257, 12);
          $$payload3.out.push(`Assessment Review</h2>`);
          pop_element();
          $$payload3.out.push(` <p class="review-description svelte-1y4q5qm">`);
          push_element($$payload3, "p", 258, 12);
          $$payload3.out.push(`Review your progress across all assessment sections before final
              submission.</p>`);
          pop_element();
          $$payload3.out.push(` <div class="sections-review svelte-1y4q5qm">`);
          push_element($$payload3, "div", 263, 12);
          $$payload3.out.push(`<div${attr_class("section-item svelte-1y4q5qm", void 0, { "completed": sectionProgress.clientAcquisition.completed })}>`);
          push_element($$payload3, "div", 264, 14);
          $$payload3.out.push(`<div class="section-header svelte-1y4q5qm">`);
          push_element($$payload3, "div", 268, 16);
          $$payload3.out.push(`<span class="section-icon svelte-1y4q5qm">`);
          push_element($$payload3, "span", 272, 18);
          $$payload3.out.push(`${escape_html(getSectionStatusIcon(sectionProgress.clientAcquisition))}</span>`);
          pop_element();
          $$payload3.out.push(` <div class="section-info svelte-1y4q5qm">`);
          push_element($$payload3, "div", 277, 18);
          $$payload3.out.push(`<h4 class="svelte-1y4q5qm">`);
          push_element($$payload3, "h4", 278, 20);
          $$payload3.out.push(`Section I: Client Acquisition</h4>`);
          pop_element();
          $$payload3.out.push(` <span class="section-status svelte-1y4q5qm">`);
          push_element($$payload3, "span", 279, 20);
          $$payload3.out.push(`${escape_html(getSectionStatusText(sectionProgress.clientAcquisition))}</span>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` `);
          Button($$payload3, {
            variant: "outline",
            size: "small",
            children: prevent_snippet_stringification(($$payload4) => {
              $$payload4.out.push(`<!---->Review`);
            }),
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` <div${attr_class("section-item svelte-1y4q5qm", void 0, { "completed": sectionProgress.technicalSolution.completed })}>`);
          push_element($$payload3, "div", 289, 14);
          $$payload3.out.push(`<div class="section-header svelte-1y4q5qm">`);
          push_element($$payload3, "div", 293, 16);
          $$payload3.out.push(`<span class="section-icon svelte-1y4q5qm">`);
          push_element($$payload3, "span", 297, 18);
          $$payload3.out.push(`${escape_html(getSectionStatusIcon(sectionProgress.technicalSolution))}</span>`);
          pop_element();
          $$payload3.out.push(` <div class="section-info svelte-1y4q5qm">`);
          push_element($$payload3, "div", 302, 18);
          $$payload3.out.push(`<h4 class="svelte-1y4q5qm">`);
          push_element($$payload3, "h4", 303, 20);
          $$payload3.out.push(`Section II: Technical Solution</h4>`);
          pop_element();
          $$payload3.out.push(` <span class="section-status svelte-1y4q5qm">`);
          push_element($$payload3, "span", 304, 20);
          $$payload3.out.push(`${escape_html(getSectionStatusText(sectionProgress.technicalSolution))}</span>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` `);
          Button($$payload3, {
            variant: "outline",
            size: "small",
            children: prevent_snippet_stringification(($$payload4) => {
              $$payload4.out.push(`<!---->Review`);
            }),
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` <div${attr_class("section-item svelte-1y4q5qm", void 0, { "completed": sectionProgress.promptEngineering.completed })}>`);
          push_element($$payload3, "div", 314, 14);
          $$payload3.out.push(`<div class="section-header svelte-1y4q5qm">`);
          push_element($$payload3, "div", 318, 16);
          $$payload3.out.push(`<span class="section-icon svelte-1y4q5qm">`);
          push_element($$payload3, "span", 322, 18);
          $$payload3.out.push(`${escape_html(getSectionStatusIcon(sectionProgress.promptEngineering))}</span>`);
          pop_element();
          $$payload3.out.push(` <div class="section-info svelte-1y4q5qm">`);
          push_element($$payload3, "div", 327, 18);
          $$payload3.out.push(`<h4 class="svelte-1y4q5qm">`);
          push_element($$payload3, "h4", 328, 20);
          $$payload3.out.push(`Section III: Prompt Engineering</h4>`);
          pop_element();
          $$payload3.out.push(` <span class="section-status svelte-1y4q5qm">`);
          push_element($$payload3, "span", 329, 20);
          $$payload3.out.push(`${escape_html(getSectionStatusText(sectionProgress.promptEngineering))}</span>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` `);
          Button($$payload3, {
            variant: "outline",
            size: "small",
            children: prevent_snippet_stringification(($$payload4) => {
              $$payload4.out.push(`<!---->Review`);
            }),
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` <div${attr_class("section-item svelte-1y4q5qm", void 0, { "completed": sectionProgress.implementation.completed })}>`);
          push_element($$payload3, "div", 339, 14);
          $$payload3.out.push(`<div class="section-header svelte-1y4q5qm">`);
          push_element($$payload3, "div", 343, 16);
          $$payload3.out.push(`<span class="section-icon svelte-1y4q5qm">`);
          push_element($$payload3, "span", 347, 18);
          $$payload3.out.push(`${escape_html(getSectionStatusIcon(sectionProgress.implementation))}</span>`);
          pop_element();
          $$payload3.out.push(` <div class="section-info svelte-1y4q5qm">`);
          push_element($$payload3, "div", 352, 18);
          $$payload3.out.push(`<h4 class="svelte-1y4q5qm">`);
          push_element($$payload3, "h4", 353, 20);
          $$payload3.out.push(`Section IV: Implementation</h4>`);
          pop_element();
          $$payload3.out.push(` <span class="section-status svelte-1y4q5qm">`);
          push_element($$payload3, "span", 354, 20);
          $$payload3.out.push(`${escape_html(getSectionStatusText(sectionProgress.implementation))}</span>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` `);
          Button($$payload3, {
            variant: "outline",
            size: "small",
            children: prevent_snippet_stringification(($$payload4) => {
              $$payload4.out.push(`<!---->Review`);
            }),
            $$slots: { default: true }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` <div class="completion-status svelte-1y4q5qm">`);
          push_element($$payload3, "div", 365, 12);
          $$payload3.out.push(`<h3 class="svelte-1y4q5qm">`);
          push_element($$payload3, "h3", 366, 14);
          $$payload3.out.push(`Completion Status</h3>`);
          pop_element();
          $$payload3.out.push(` <div class="status-grid svelte-1y4q5qm">`);
          push_element($$payload3, "div", 367, 14);
          $$payload3.out.push(`<div class="status-item svelte-1y4q5qm">`);
          push_element($$payload3, "div", 368, 16);
          $$payload3.out.push(`<span class="status-label svelte-1y4q5qm">`);
          push_element($$payload3, "span", 369, 18);
          $$payload3.out.push(`Sections Completed:</span>`);
          pop_element();
          $$payload3.out.push(` <span class="status-value svelte-1y4q5qm">`);
          push_element($$payload3, "span", 370, 18);
          $$payload3.out.push(`${escape_html(Object.values(sectionProgress).filter((s) => s.completed).length)} / 4</span>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` <div class="status-item svelte-1y4q5qm">`);
          push_element($$payload3, "div", 375, 16);
          $$payload3.out.push(`<span class="status-label svelte-1y4q5qm">`);
          push_element($$payload3, "span", 376, 18);
          $$payload3.out.push(`Overall Progress:</span>`);
          pop_element();
          $$payload3.out.push(` <span class="status-value svelte-1y4q5qm">`);
          push_element($$payload3, "span", 377, 18);
          $$payload3.out.push(`${escape_html(overallProgress)}%</span>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` <div class="status-item svelte-1y4q5qm">`);
          push_element($$payload3, "div", 379, 16);
          $$payload3.out.push(`<span class="status-label svelte-1y4q5qm">`);
          push_element($$payload3, "span", 380, 18);
          $$payload3.out.push(`Time Used:</span>`);
          pop_element();
          $$payload3.out.push(` <span class="status-value svelte-1y4q5qm">`);
          push_element($$payload3, "span", 381, 18);
          $$payload3.out.push(`${escape_html(Math.floor((48 * 60 * 60 * 1e3 - (new Date((/* @__PURE__ */ new Date()).getTime() + timeRemaining.split(":").reduce((acc, time) => 60 * acc + +time) * 1e3) - /* @__PURE__ */ new Date())) / (1e3 * 60 * 60)))}h</span>`);
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
      $$payload2.out.push(`<!----></div>`);
      pop_element();
      $$payload2.out.push(` <div class="form-column svelte-1y4q5qm">`);
      push_element($$payload2, "div", 401, 8);
      Card($$payload2, {
        class: "candidate-card",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<h2 class="svelte-1y4q5qm">`);
          push_element($$payload3, "h2", 403, 12);
          $$payload3.out.push(`Candidate Information</h2>`);
          pop_element();
          $$payload3.out.push(` <p class="card-description svelte-1y4q5qm">`);
          push_element($$payload3, "p", 404, 12);
          $$payload3.out.push(`Please provide your contact information for our records and
              follow-up communication.</p>`);
          pop_element();
          $$payload3.out.push(` <div class="candidate-form svelte-1y4q5qm">`);
          push_element($$payload3, "div", 409, 12);
          $$payload3.out.push(`<div class="form-row svelte-1y4q5qm">`);
          push_element($$payload3, "div", 410, 14);
          $$payload3.out.push(`<div class="form-group svelte-1y4q5qm">`);
          push_element($$payload3, "div", 411, 16);
          $$payload3.out.push(`<label for="firstName" class="svelte-1y4q5qm">`);
          push_element($$payload3, "label", 412, 18);
          $$payload3.out.push(`First Name *</label>`);
          pop_element();
          $$payload3.out.push(` `);
          Input($$payload3, {
            id: "firstName",
            placeholder: "Enter your first name",
            required: true,
            get value() {
              return candidateInfo.firstName;
            },
            set value($$value) {
              candidateInfo.firstName = $$value;
              $$settled = false;
            }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(` <div class="form-group svelte-1y4q5qm">`);
          push_element($$payload3, "div", 422, 16);
          $$payload3.out.push(`<label for="lastName" class="svelte-1y4q5qm">`);
          push_element($$payload3, "label", 423, 18);
          $$payload3.out.push(`Last Name *</label>`);
          pop_element();
          $$payload3.out.push(` `);
          Input($$payload3, {
            id: "lastName",
            placeholder: "Enter your last name",
            required: true,
            get value() {
              return candidateInfo.lastName;
            },
            set value($$value) {
              candidateInfo.lastName = $$value;
              $$settled = false;
            }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` <div class="form-group svelte-1y4q5qm">`);
          push_element($$payload3, "div", 434, 14);
          $$payload3.out.push(`<label for="email" class="svelte-1y4q5qm">`);
          push_element($$payload3, "label", 435, 16);
          $$payload3.out.push(`Email Address *</label>`);
          pop_element();
          $$payload3.out.push(` `);
          Input($$payload3, {
            id: "email",
            type: "email",
            placeholder: "Enter your email address",
            required: true,
            get value() {
              return candidateInfo.email;
            },
            set value($$value) {
              candidateInfo.email = $$value;
              $$settled = false;
            }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(` <div class="form-group svelte-1y4q5qm">`);
          push_element($$payload3, "div", 446, 14);
          $$payload3.out.push(`<label for="phone" class="svelte-1y4q5qm">`);
          push_element($$payload3, "label", 447, 16);
          $$payload3.out.push(`Phone Number</label>`);
          pop_element();
          $$payload3.out.push(` `);
          Input($$payload3, {
            id: "phone",
            type: "tel",
            placeholder: "Enter your phone number",
            get value() {
              return candidateInfo.phone;
            },
            set value($$value) {
              candidateInfo.phone = $$value;
              $$settled = false;
            }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(` <div class="form-group svelte-1y4q5qm">`);
          push_element($$payload3, "div", 457, 14);
          $$payload3.out.push(`<label for="linkedin" class="svelte-1y4q5qm">`);
          push_element($$payload3, "label", 458, 16);
          $$payload3.out.push(`LinkedIn Profile</label>`);
          pop_element();
          $$payload3.out.push(` `);
          Input($$payload3, {
            id: "linkedin",
            type: "url",
            placeholder: "https://linkedin.com/in/yourprofile",
            get value() {
              return candidateInfo.linkedin;
            },
            set value($$value) {
              candidateInfo.linkedin = $$value;
              $$settled = false;
            }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(` <div class="form-group svelte-1y4q5qm">`);
          push_element($$payload3, "div", 468, 14);
          $$payload3.out.push(`<label for="portfolio" class="svelte-1y4q5qm">`);
          push_element($$payload3, "label", 469, 16);
          $$payload3.out.push(`Portfolio/Website</label>`);
          pop_element();
          $$payload3.out.push(` `);
          Input($$payload3, {
            id: "portfolio",
            type: "url",
            placeholder: "https://yourportfolio.com",
            get value() {
              return candidateInfo.portfolio;
            },
            set value($$value) {
              candidateInfo.portfolio = $$value;
              $$settled = false;
            }
          });
          $$payload3.out.push(`<!----></div>`);
          pop_element();
          $$payload3.out.push(` <div class="form-group svelte-1y4q5qm">`);
          push_element($$payload3, "div", 479, 14);
          $$payload3.out.push(`<label for="notes" class="svelte-1y4q5qm">`);
          push_element($$payload3, "label", 480, 16);
          $$payload3.out.push(`Additional Notes</label>`);
          pop_element();
          $$payload3.out.push(` <textarea id="notes" placeholder="Any additional information you'd like to share..." rows="4" class="svelte-1y4q5qm">`);
          push_element($$payload3, "textarea", 481, 16);
          const $$body = escape_html(candidateInfo.additionalNotes);
          if ($$body) {
            $$payload3.out.push(`${$$body}`);
          }
          $$payload3.out.push(`</textarea>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(` <div class="consent-section svelte-1y4q5qm">`);
          push_element($$payload3, "div", 490, 14);
          $$payload3.out.push(`<label class="consent-checkbox svelte-1y4q5qm">`);
          push_element($$payload3, "label", 491, 16);
          $$payload3.out.push(`<input type="checkbox"${attr("checked", candidateInfo.consent, true)} class="svelte-1y4q5qm"/>`);
          push_element($$payload3, "input", 492, 18);
          pop_element();
          $$payload3.out.push(` <span class="checkmark svelte-1y4q5qm">`);
          push_element($$payload3, "span", 497, 18);
          $$payload3.out.push(`</span>`);
          pop_element();
          $$payload3.out.push(` <span class="consent-text svelte-1y4q5qm">`);
          push_element($$payload3, "span", 498, 18);
          $$payload3.out.push(`I confirm that all information provided is accurate and that
                    I completed this assessment independently using my own
                    knowledge and skills. I consent to the processing of my
                    personal data for evaluation purposes.</span>`);
          pop_element();
          $$payload3.out.push(`</label>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
          $$payload3.out.push(`</div>`);
          pop_element();
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <div class="submission-actions svelte-1y4q5qm">`);
      push_element($$payload2, "div", 509, 10);
      $$payload2.out.push(`<div class="action-buttons svelte-1y4q5qm">`);
      push_element($$payload2, "div", 510, 12);
      Button($$payload2, {
        variant: "outline",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->← Previous: Implementation`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Button($$payload2, {
        variant: "primary",
        size: "large",
        disabled: true,
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Submit Assessment`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></div>`);
      pop_element();
      $$payload2.out.push(` <div class="submission-note svelte-1y4q5qm">`);
      push_element($$payload2, "div", 524, 12);
      $$payload2.out.push(`<p class="svelte-1y4q5qm">`);
      push_element($$payload2, "p", 525, 14);
      $$payload2.out.push(`<strong class="svelte-1y4q5qm">`);
      push_element($$payload2, "strong", 526, 16);
      $$payload2.out.push(`Important:</strong>`);
      pop_element();
      $$payload2.out.push(` Once submitted, you will not be able
                to make changes to your assessment. Please ensure all sections are
                complete and information is accurate.</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
    }
    $$payload2.out.push(`<!--]--></div>`);
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
