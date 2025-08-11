import { D as push, U as head, M as push_element, O as pop_element, F as prevent_snippet_stringification, G as pop, I as FILENAME } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { H as Header, F as Footer, B as Button } from "../../../chunks/Button.js";
import { C as Card } from "../../../chunks/Card.js";
_page[FILENAME] = "src/routes/careers/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Careers - Join the GY6AI Team</title>`;
    $$payload2.out.push(`<meta name="description" content="Join GY6AI and help transform businesses with revolutionary AI solutions. Explore career opportunities in our growing company." class="svelte-exxwpa"/>`);
    push_element($$payload2, "meta", 45, 2);
    pop_element();
  });
  $$payload.out.push(`<div class="gradient-bg svelte-exxwpa">`);
  push_element($$payload, "div", 52, 0);
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` `);
  Header($$payload);
  $$payload.out.push(`<!----> <main class="careers-main svelte-exxwpa">`);
  push_element($$payload, "main", 57, 0);
  $$payload.out.push(`<div class="container svelte-exxwpa">`);
  push_element($$payload, "div", 58, 2);
  $$payload.out.push(`<div class="careers-hero svelte-exxwpa">`);
  push_element($$payload, "div", 59, 4);
  $$payload.out.push(`<h1 class="title svelte-exxwpa">`);
  push_element($$payload, "h1", 60, 6);
  $$payload.out.push(`Join the GY6AI Team</h1>`);
  pop_element();
  $$payload.out.push(` <p class="subtitle svelte-exxwpa">`);
  push_element($$payload, "p", 61, 6);
  $$payload.out.push(`Help us revolutionize how businesses leverage AI technology. Be part of
        a team that's shaping the future of intelligent automation and customer
        engagement.</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="assessment-cta svelte-exxwpa">`);
  push_element($$payload, "div", 68, 4);
  Card($$payload, {
    className: "assessment-card",
    variant: "outlined",
    padding: "large",
    hover: true,
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="assessment-content svelte-exxwpa">`);
      push_element($$payload2, "div", 70, 8);
      $$payload2.out.push(`<div class="cta-badge svelte-exxwpa">`);
      push_element($$payload2, "div", 71, 10);
      $$payload2.out.push(`🔥 Assessment Available Now</div>`);
      pop_element();
      $$payload2.out.push(` <h2 class="svelte-exxwpa">`);
      push_element($$payload2, "h2", 72, 10);
      $$payload2.out.push(`🎯 Ready to Join Our Team?</h2>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-exxwpa">`);
      push_element($$payload2, "p", 73, 10);
      $$payload2.out.push(`Start your journey with our comprehensive assessment system. 
            This 48-hour evaluation will demonstrate your technical skills, problem-solving 
            abilities, and expertise across multiple disciplines.</p>`);
      pop_element();
      $$payload2.out.push(` <div class="assessment-features svelte-exxwpa">`);
      push_element($$payload2, "div", 78, 10);
      $$payload2.out.push(`<div class="feature svelte-exxwpa">`);
      push_element($$payload2, "div", 79, 12);
      $$payload2.out.push(`✅ Technical Problem Solving</div>`);
      pop_element();
      $$payload2.out.push(` <div class="feature svelte-exxwpa">`);
      push_element($$payload2, "div", 80, 12);
      $$payload2.out.push(`✅ AI Prompt Engineering</div>`);
      pop_element();
      $$payload2.out.push(` <div class="feature svelte-exxwpa">`);
      push_element($$payload2, "div", 81, 12);
      $$payload2.out.push(`✅ Client Solution Design</div>`);
      pop_element();
      $$payload2.out.push(` <div class="feature svelte-exxwpa">`);
      push_element($$payload2, "div", 82, 12);
      $$payload2.out.push(`✅ Code Implementation</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="assessment-action svelte-exxwpa">`);
      push_element($$payload2, "div", 84, 10);
      Button($$payload2, {
        variant: "primary",
        size: "large",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->🚀 Start Assessment Now`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <p class="assessment-info svelte-exxwpa">`);
      push_element($$payload2, "p", 88, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 89, 14);
      $$payload2.out.push(`48-hour time limit</strong>`);
      pop_element();
      $$payload2.out.push(` • No prior experience required • 
              Comprehensive evaluation of your skills</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
  pop_element();
  $$payload.out.push(` <div class="company-values svelte-exxwpa">`);
  push_element($$payload, "div", 97, 4);
  $$payload.out.push(`<h2 class="svelte-exxwpa">`);
  push_element($$payload, "h2", 98, 6);
  $$payload.out.push(`Why Work at GY6AI?</h2>`);
  pop_element();
  $$payload.out.push(` <div class="values-grid svelte-exxwpa">`);
  push_element($$payload, "div", 99, 6);
  Card($$payload, {
    class: "value-item",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<h3 class="svelte-exxwpa">`);
      push_element($$payload2, "h3", 101, 10);
      $$payload2.out.push(`🚀 Innovation First</h3>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-exxwpa">`);
      push_element($$payload2, "p", 102, 10);
      $$payload2.out.push(`Work with cutting-edge AI technology and shape the future of
            business automation.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "value-item",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<h3 class="svelte-exxwpa">`);
      push_element($$payload2, "h3", 109, 10);
      $$payload2.out.push(`🤝 Collaborative Culture</h3>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-exxwpa">`);
      push_element($$payload2, "p", 110, 10);
      $$payload2.out.push(`Join a team that values diverse perspectives and collaborative
            problem-solving.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "value-item",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<h3 class="svelte-exxwpa">`);
      push_element($$payload2, "h3", 117, 10);
      $$payload2.out.push(`📈 Growth Opportunities</h3>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-exxwpa">`);
      push_element($$payload2, "p", 118, 10);
      $$payload2.out.push(`Advance your career with continuous learning and professional
            development programs.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "value-item",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<h3 class="svelte-exxwpa">`);
      push_element($$payload2, "h3", 125, 10);
      $$payload2.out.push(`🌟 Impact at Scale</h3>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-exxwpa">`);
      push_element($$payload2, "p", 126, 10);
      $$payload2.out.push(`Your work directly impacts thousands of businesses and millions of
            customer interactions.</p>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="open-positions svelte-exxwpa">`);
  push_element($$payload, "div", 134, 4);
  $$payload.out.push(`<h2 class="svelte-exxwpa">`);
  push_element($$payload, "h2", 135, 6);
  $$payload.out.push(`Current Openings</h2>`);
  pop_element();
  $$payload.out.push(` <div class="positions-grid svelte-exxwpa">`);
  push_element($$payload, "div", 136, 6);
  Card($$payload, {
    class: "position-card featured",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="position-header svelte-exxwpa">`);
      push_element($$payload2, "div", 138, 10);
      $$payload2.out.push(`<h3 class="svelte-exxwpa">`);
      push_element($$payload2, "h3", 139, 12);
      $$payload2.out.push(`Client Solutions Specialist</h3>`);
      pop_element();
      $$payload2.out.push(` <div class="badge-group svelte-exxwpa">`);
      push_element($$payload2, "div", 140, 12);
      $$payload2.out.push(`<span class="position-badge featured-badge svelte-exxwpa">`);
      push_element($$payload2, "span", 141, 14);
      $$payload2.out.push(`Featured</span>`);
      pop_element();
      $$payload2.out.push(` <span class="assessment-badge svelte-exxwpa">`);
      push_element($$payload2, "span", 142, 14);
      $$payload2.out.push(`🎯 Assessment Ready</span>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="position-details svelte-exxwpa">`);
      push_element($$payload2, "div", 145, 10);
      $$payload2.out.push(`<div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 146, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 147, 14);
      $$payload2.out.push(`Department:</strong>`);
      pop_element();
      $$payload2.out.push(` Customer Success</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 149, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 150, 14);
      $$payload2.out.push(`Location:</strong>`);
      pop_element();
      $$payload2.out.push(` Remote / Hybrid</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 152, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 153, 14);
      $$payload2.out.push(`Type:</strong>`);
      pop_element();
      $$payload2.out.push(` Full-time</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <p class="position-description svelte-exxwpa">`);
      push_element($$payload2, "p", 156, 10);
      $$payload2.out.push(`We're looking for a Client Solutions Specialist to help our clients
            maximize their success with GY6AI's platform. This role combines
            technical expertise with client relationship management, requiring
            skills in system configuration, problem-solving, and AI prompt
            engineering.</p>`);
      pop_element();
      $$payload2.out.push(` <div class="position-requirements svelte-exxwpa">`);
      push_element($$payload2, "div", 163, 10);
      $$payload2.out.push(`<h4 class="svelte-exxwpa">`);
      push_element($$payload2, "h4", 164, 12);
      $$payload2.out.push(`Key Requirements:</h4>`);
      pop_element();
      $$payload2.out.push(` <ul class="svelte-exxwpa">`);
      push_element($$payload2, "ul", 165, 12);
      $$payload2.out.push(`<li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 166, 14);
      $$payload2.out.push(`Experience in client-facing technical roles</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 167, 14);
      $$payload2.out.push(`Strong problem-solving and troubleshooting skills</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 168, 14);
      $$payload2.out.push(`Knowledge of cloud infrastructure and modern web technologies</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 171, 14);
      $$payload2.out.push(`Interest in AI/ML technologies and prompt engineering</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 172, 14);
      $$payload2.out.push(`Excellent communication and presentation skills</li>`);
      pop_element();
      $$payload2.out.push(`</ul>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="position-actions svelte-exxwpa">`);
      push_element($$payload2, "div", 175, 10);
      Button($$payload2, {
        variant: "primary",
        size: "large",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Take Assessment`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <p class="assessment-note svelte-exxwpa">`);
      push_element($$payload2, "p", 179, 12);
      $$payload2.out.push(`Complete our comprehensive pre-trial assessment to demonstrate
              your skills</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "position-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="position-header svelte-exxwpa">`);
      push_element($$payload2, "div", 187, 10);
      $$payload2.out.push(`<h3 class="svelte-exxwpa">`);
      push_element($$payload2, "h3", 188, 12);
      $$payload2.out.push(`AI Automation Developer</h3>`);
      pop_element();
      $$payload2.out.push(` <div class="badge-group svelte-exxwpa">`);
      push_element($$payload2, "div", 189, 12);
      $$payload2.out.push(`<span class="position-badge new-badge svelte-exxwpa">`);
      push_element($$payload2, "span", 190, 14);
      $$payload2.out.push(`New</span>`);
      pop_element();
      $$payload2.out.push(` <span class="assessment-badge svelte-exxwpa">`);
      push_element($$payload2, "span", 191, 14);
      $$payload2.out.push(`🎯 Assessment Ready</span>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="position-details svelte-exxwpa">`);
      push_element($$payload2, "div", 194, 10);
      $$payload2.out.push(`<div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 195, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 196, 14);
      $$payload2.out.push(`Department:</strong>`);
      pop_element();
      $$payload2.out.push(` Engineering</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 198, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 199, 14);
      $$payload2.out.push(`Location:</strong>`);
      pop_element();
      $$payload2.out.push(` Remote / Hybrid</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 201, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 202, 14);
      $$payload2.out.push(`Type:</strong>`);
      pop_element();
      $$payload2.out.push(` Full-time</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <p class="position-description svelte-exxwpa">`);
      push_element($$payload2, "p", 205, 10);
      $$payload2.out.push(`Build and optimize AI-driven automation workflows that help businesses 
            streamline their operations. You'll work with cutting-edge AI models, 
            integration APIs, and workflow automation tools to create intelligent 
            solutions that save time and increase efficiency.</p>`);
      pop_element();
      $$payload2.out.push(` <div class="position-requirements svelte-exxwpa">`);
      push_element($$payload2, "div", 211, 10);
      $$payload2.out.push(`<h4 class="svelte-exxwpa">`);
      push_element($$payload2, "h4", 212, 12);
      $$payload2.out.push(`Key Requirements:</h4>`);
      pop_element();
      $$payload2.out.push(` <ul class="svelte-exxwpa">`);
      push_element($$payload2, "ul", 213, 12);
      $$payload2.out.push(`<li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 214, 14);
      $$payload2.out.push(`3+ years experience with Python, JavaScript, or similar languages</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 215, 14);
      $$payload2.out.push(`Experience with API integrations and workflow automation</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 216, 14);
      $$payload2.out.push(`Knowledge of AI/ML frameworks and prompt engineering</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 217, 14);
      $$payload2.out.push(`Familiarity with cloud platforms (AWS, GCP, Azure)</li>`);
      pop_element();
      $$payload2.out.push(`</ul>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="position-actions svelte-exxwpa">`);
      push_element($$payload2, "div", 220, 10);
      Button($$payload2, {
        variant: "primary",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Take Assessment`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <p class="assessment-note svelte-exxwpa">`);
      push_element($$payload2, "p", 224, 12);
      $$payload2.out.push(`Complete our technical assessment to showcase your automation skills</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "position-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="position-header svelte-exxwpa">`);
      push_element($$payload2, "div", 231, 10);
      $$payload2.out.push(`<h3 class="svelte-exxwpa">`);
      push_element($$payload2, "h3", 232, 12);
      $$payload2.out.push(`Sales Director</h3>`);
      pop_element();
      $$payload2.out.push(` <div class="badge-group svelte-exxwpa">`);
      push_element($$payload2, "div", 233, 12);
      $$payload2.out.push(`<span class="position-badge leadership-badge svelte-exxwpa">`);
      push_element($$payload2, "span", 234, 14);
      $$payload2.out.push(`Leadership</span>`);
      pop_element();
      $$payload2.out.push(` <span class="assessment-badge svelte-exxwpa">`);
      push_element($$payload2, "span", 235, 14);
      $$payload2.out.push(`🎯 Assessment Ready</span>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="position-details svelte-exxwpa">`);
      push_element($$payload2, "div", 238, 10);
      $$payload2.out.push(`<div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 239, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 240, 14);
      $$payload2.out.push(`Department:</strong>`);
      pop_element();
      $$payload2.out.push(` Sales</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 242, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 243, 14);
      $$payload2.out.push(`Location:</strong>`);
      pop_element();
      $$payload2.out.push(` Remote / Hybrid</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 245, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 246, 14);
      $$payload2.out.push(`Type:</strong>`);
      pop_element();
      $$payload2.out.push(` Full-time</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <p class="position-description svelte-exxwpa">`);
      push_element($$payload2, "p", 249, 10);
      $$payload2.out.push(`Lead our sales organization to drive revenue growth and market expansion. 
            You'll build and manage a high-performing sales team, develop strategic 
            partnerships, and work directly with enterprise clients to showcase the 
            transformative power of our AI solutions.</p>`);
      pop_element();
      $$payload2.out.push(` <div class="position-requirements svelte-exxwpa">`);
      push_element($$payload2, "div", 255, 10);
      $$payload2.out.push(`<h4 class="svelte-exxwpa">`);
      push_element($$payload2, "h4", 256, 12);
      $$payload2.out.push(`Key Requirements:</h4>`);
      pop_element();
      $$payload2.out.push(` <ul class="svelte-exxwpa">`);
      push_element($$payload2, "ul", 257, 12);
      $$payload2.out.push(`<li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 258, 14);
      $$payload2.out.push(`7+ years of B2B sales leadership experience</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 259, 14);
      $$payload2.out.push(`Proven track record of building and scaling sales teams</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 260, 14);
      $$payload2.out.push(`Experience selling SaaS or technology solutions to enterprises</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 261, 14);
      $$payload2.out.push(`Strong understanding of AI/automation market trends</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 262, 14);
      $$payload2.out.push(`Excellent communication and strategic thinking skills</li>`);
      pop_element();
      $$payload2.out.push(`</ul>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="position-actions svelte-exxwpa">`);
      push_element($$payload2, "div", 265, 10);
      Button($$payload2, {
        variant: "primary",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Take Assessment`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <p class="assessment-note svelte-exxwpa">`);
      push_element($$payload2, "p", 269, 12);
      $$payload2.out.push(`Demonstrate your sales leadership and strategic thinking abilities</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Card($$payload, {
    class: "position-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<div class="position-header svelte-exxwpa">`);
      push_element($$payload2, "div", 276, 10);
      $$payload2.out.push(`<h3 class="svelte-exxwpa">`);
      push_element($$payload2, "h3", 277, 12);
      $$payload2.out.push(`DevOps Engineer</h3>`);
      pop_element();
      $$payload2.out.push(` <div class="badge-group svelte-exxwpa">`);
      push_element($$payload2, "div", 278, 12);
      $$payload2.out.push(`<span class="position-badge urgent-badge svelte-exxwpa">`);
      push_element($$payload2, "span", 279, 14);
      $$payload2.out.push(`Urgent</span>`);
      pop_element();
      $$payload2.out.push(` <span class="assessment-badge svelte-exxwpa">`);
      push_element($$payload2, "span", 280, 14);
      $$payload2.out.push(`🎯 Assessment Ready</span>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="position-details svelte-exxwpa">`);
      push_element($$payload2, "div", 283, 10);
      $$payload2.out.push(`<div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 284, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 285, 14);
      $$payload2.out.push(`Department:</strong>`);
      pop_element();
      $$payload2.out.push(` Engineering</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 287, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 288, 14);
      $$payload2.out.push(`Location:</strong>`);
      pop_element();
      $$payload2.out.push(` Hybrid</div>`);
      pop_element();
      $$payload2.out.push(` <div class="detail-item svelte-exxwpa">`);
      push_element($$payload2, "div", 290, 12);
      $$payload2.out.push(`<strong class="svelte-exxwpa">`);
      push_element($$payload2, "strong", 291, 14);
      $$payload2.out.push(`Type:</strong>`);
      pop_element();
      $$payload2.out.push(` Full-time</div>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <p class="position-description svelte-exxwpa">`);
      push_element($$payload2, "p", 294, 10);
      $$payload2.out.push(`Scale our infrastructure to support millions of AI conversations
            while maintaining high availability and performance standards. You'll 
            work with containerization, CI/CD pipelines, and cloud infrastructure 
            to ensure our AI platform runs smoothly at scale.</p>`);
      pop_element();
      $$payload2.out.push(` <div class="position-requirements svelte-exxwpa">`);
      push_element($$payload2, "div", 300, 10);
      $$payload2.out.push(`<h4 class="svelte-exxwpa">`);
      push_element($$payload2, "h4", 301, 12);
      $$payload2.out.push(`Key Requirements:</h4>`);
      pop_element();
      $$payload2.out.push(` <ul class="svelte-exxwpa">`);
      push_element($$payload2, "ul", 302, 12);
      $$payload2.out.push(`<li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 303, 14);
      $$payload2.out.push(`5+ years experience with cloud platforms (AWS, GCP, Azure)</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 304, 14);
      $$payload2.out.push(`Expertise in containerization (Docker, Kubernetes)</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 305, 14);
      $$payload2.out.push(`Experience with CI/CD pipelines and Infrastructure as Code</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 306, 14);
      $$payload2.out.push(`Knowledge of monitoring and observability tools</li>`);
      pop_element();
      $$payload2.out.push(` <li class="svelte-exxwpa">`);
      push_element($$payload2, "li", 307, 14);
      $$payload2.out.push(`Strong scripting skills (Python, Bash, or similar)</li>`);
      pop_element();
      $$payload2.out.push(`</ul>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
      $$payload2.out.push(` <div class="position-actions svelte-exxwpa">`);
      push_element($$payload2, "div", 310, 10);
      Button($$payload2, {
        variant: "primary",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Take Assessment`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> <p class="assessment-note svelte-exxwpa">`);
      push_element($$payload2, "p", 314, 12);
      $$payload2.out.push(`Show your infrastructure and automation expertise</p>`);
      pop_element();
      $$payload2.out.push(`</div>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="application-process svelte-exxwpa">`);
  push_element($$payload, "div", 322, 4);
  $$payload.out.push(`<h2 class="svelte-exxwpa">`);
  push_element($$payload, "h2", 323, 6);
  $$payload.out.push(`Our Hiring Process</h2>`);
  pop_element();
  $$payload.out.push(` <div class="process-steps svelte-exxwpa">`);
  push_element($$payload, "div", 324, 6);
  $$payload.out.push(`<div class="step svelte-exxwpa">`);
  push_element($$payload, "div", 325, 8);
  $$payload.out.push(`<div class="step-number svelte-exxwpa">`);
  push_element($$payload, "div", 326, 10);
  $$payload.out.push(`1</div>`);
  pop_element();
  $$payload.out.push(` <div class="step-content svelte-exxwpa">`);
  push_element($$payload, "div", 327, 10);
  $$payload.out.push(`<h4 class="svelte-exxwpa">`);
  push_element($$payload, "h4", 328, 12);
  $$payload.out.push(`Application &amp; Assessment</h4>`);
  pop_element();
  $$payload.out.push(` <p class="svelte-exxwpa">`);
  push_element($$payload, "p", 329, 12);
  $$payload.out.push(`Submit your application and complete our role-specific assessment
              to demonstrate your skills.</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="step svelte-exxwpa">`);
  push_element($$payload, "div", 336, 8);
  $$payload.out.push(`<div class="step-number svelte-exxwpa">`);
  push_element($$payload, "div", 337, 10);
  $$payload.out.push(`2</div>`);
  pop_element();
  $$payload.out.push(` <div class="step-content svelte-exxwpa">`);
  push_element($$payload, "div", 338, 10);
  $$payload.out.push(`<h4 class="svelte-exxwpa">`);
  push_element($$payload, "h4", 339, 12);
  $$payload.out.push(`Initial Interview</h4>`);
  pop_element();
  $$payload.out.push(` <p class="svelte-exxwpa">`);
  push_element($$payload, "p", 340, 12);
  $$payload.out.push(`Meet with our team to discuss your experience and learn more about
              the role and company.</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="step svelte-exxwpa">`);
  push_element($$payload, "div", 347, 8);
  $$payload.out.push(`<div class="step-number svelte-exxwpa">`);
  push_element($$payload, "div", 348, 10);
  $$payload.out.push(`3</div>`);
  pop_element();
  $$payload.out.push(` <div class="step-content svelte-exxwpa">`);
  push_element($$payload, "div", 349, 10);
  $$payload.out.push(`<h4 class="svelte-exxwpa">`);
  push_element($$payload, "h4", 350, 12);
  $$payload.out.push(`Technical/Practical Round</h4>`);
  pop_element();
  $$payload.out.push(` <p class="svelte-exxwpa">`);
  push_element($$payload, "p", 351, 12);
  $$payload.out.push(`Demonstrate your technical skills or complete a practical exercise
              relevant to the position.</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="step svelte-exxwpa">`);
  push_element($$payload, "div", 358, 8);
  $$payload.out.push(`<div class="step-number svelte-exxwpa">`);
  push_element($$payload, "div", 359, 10);
  $$payload.out.push(`4</div>`);
  pop_element();
  $$payload.out.push(` <div class="step-content svelte-exxwpa">`);
  push_element($$payload, "div", 360, 10);
  $$payload.out.push(`<h4 class="svelte-exxwpa">`);
  push_element($$payload, "h4", 361, 12);
  $$payload.out.push(`Final Interview</h4>`);
  pop_element();
  $$payload.out.push(` <p class="svelte-exxwpa">`);
  push_element($$payload, "p", 362, 12);
  $$payload.out.push(`Meet with senior team members and discuss cultural fit, career
              goals, and next steps.</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="step svelte-exxwpa">`);
  push_element($$payload, "div", 369, 8);
  $$payload.out.push(`<div class="step-number svelte-exxwpa">`);
  push_element($$payload, "div", 370, 10);
  $$payload.out.push(`5</div>`);
  pop_element();
  $$payload.out.push(` <div class="step-content svelte-exxwpa">`);
  push_element($$payload, "div", 371, 10);
  $$payload.out.push(`<h4 class="svelte-exxwpa">`);
  push_element($$payload, "h4", 372, 12);
  $$payload.out.push(`Welcome to GY6AI!</h4>`);
  pop_element();
  $$payload.out.push(` <p class="svelte-exxwpa">`);
  push_element($$payload, "p", 373, 12);
  $$payload.out.push(`Join our team and begin your journey helping businesses transform
              with AI technology.</p>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(`</div>`);
  pop_element();
  $$payload.out.push(` <div class="cta-section svelte-exxwpa">`);
  push_element($$payload, "div", 382, 4);
  Card($$payload, {
    class: "cta-card",
    children: prevent_snippet_stringification(($$payload2) => {
      $$payload2.out.push(`<h2 class="svelte-exxwpa">`);
      push_element($$payload2, "h2", 384, 8);
      $$payload2.out.push(`Ready to Shape the Future of AI?</h2>`);
      pop_element();
      $$payload2.out.push(` <p class="svelte-exxwpa">`);
      push_element($$payload2, "p", 385, 8);
      $$payload2.out.push(`Don't see a position that fits? We're always looking for exceptional
          talent. Send us your resume and let us know how you'd like to
          contribute to our mission.</p>`);
      pop_element();
      $$payload2.out.push(` <div class="cta-actions svelte-exxwpa">`);
      push_element($$payload2, "div", 390, 8);
      Button($$payload2, {
        variant: "primary",
        size: "large",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Learn More About GY6AI`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----> `);
      Button($$payload2, {
        variant: "outline",
        size: "large",
        children: prevent_snippet_stringification(($$payload3) => {
          $$payload3.out.push(`<!---->Send General Application`);
        }),
        $$slots: { default: true }
      });
      $$payload2.out.push(`<!----></div>`);
      pop_element();
    }),
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div>`);
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
