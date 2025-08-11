<!-- src/routes/careers/+page.svelte -->
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Header from "$components/layout/Header.svelte";
  import Footer from "$components/layout/Footer.svelte";
  import Button from "$components/ui/Button.svelte";
  import Card from "$components/ui/Card.svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  function goHome() {
    goto("/");
  }

  function startAssessment() {
    goto("/assessment");
  }

  function handleNavigation(section) {
    // Navigate to main page with section - this is a fallback
    // The Header component should now handle this automatically
    goto(`/`).then(() => {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    });
  }
</script>

<svelte:head>
  <title>Careers - Join the GY6AI Team</title>
  <meta
    name="description"
    content="Join GY6AI and help transform businesses with revolutionary AI solutions. Explore career opportunities in our growing company."
  />
</svelte:head>

<!-- Background Elements -->
<div class="gradient-bg" />

<!-- Layout -->
<Header on:navigate={(e) => handleNavigation(e.detail)} />

<main class="careers-main">
  <div class="container">
    <div class="careers-hero">
      <h1 class="title">Join the GY6AI Team</h1>
      <p class="subtitle">
        Help us revolutionize how businesses leverage AI technology. Be part of
        a team that's shaping the future of intelligent automation and customer
        engagement.
      </p>
    </div>

    <div class="assessment-cta">
      <Card className="assessment-card" variant="outlined" padding="large" hover={true}>
        <div class="assessment-content">
          <div class="cta-badge">🔥 Assessment Available Now</div>
          <h2>🎯 Ready to Join Our Team?</h2>
          <p>
            Start your journey with our comprehensive assessment system. 
            This 48-hour evaluation will demonstrate your technical skills, problem-solving 
            abilities, and expertise across multiple disciplines.
          </p>
          <div class="assessment-features">
            <div class="feature">✅ Technical Problem Solving</div>
            <div class="feature">✅ AI Prompt Engineering</div>
            <div class="feature">✅ Client Solution Design</div>
            <div class="feature">✅ Code Implementation</div>
          </div>
          <div class="assessment-action">
            <Button variant="primary" size="large" on:click={startAssessment}>
              🚀 Start Assessment Now
            </Button>
            <p class="assessment-info">
              <strong>48-hour time limit</strong> • No prior experience required • 
              Comprehensive evaluation of your skills
            </p>
          </div>
        </div>
      </Card>
    </div>

    <div class="company-values">
      <h2>Why Work at GY6AI?</h2>
      <div class="values-grid">
        <Card class="value-item">
          <h3>🚀 Innovation First</h3>
          <p>
            Work with cutting-edge AI technology and shape the future of
            business automation.
          </p>
        </Card>

        <Card class="value-item">
          <h3>🤝 Collaborative Culture</h3>
          <p>
            Join a team that values diverse perspectives and collaborative
            problem-solving.
          </p>
        </Card>

        <Card class="value-item">
          <h3>📈 Growth Opportunities</h3>
          <p>
            Advance your career with continuous learning and professional
            development programs.
          </p>
        </Card>

        <Card class="value-item">
          <h3>🌟 Impact at Scale</h3>
          <p>
            Your work directly impacts thousands of businesses and millions of
            customer interactions.
          </p>
        </Card>
      </div>
    </div>

    <div class="open-positions">
      <h2>Current Openings</h2>
      <div class="positions-grid">
        <Card class="position-card featured">
          <div class="position-header">
            <h3>Client Solutions Specialist</h3>
            <div class="badge-group">
              <span class="position-badge featured-badge">Featured</span>
              <span class="assessment-badge">🎯 Assessment Ready</span>
            </div>
          </div>
          <div class="position-details">
            <div class="detail-item">
              <strong>Department:</strong> Customer Success
            </div>
            <div class="detail-item">
              <strong>Location:</strong> Remote / Hybrid
            </div>
            <div class="detail-item">
              <strong>Type:</strong> Full-time
            </div>
          </div>
          <p class="position-description">
            We're looking for a Client Solutions Specialist to help our clients
            maximize their success with GY6AI's platform. This role combines
            technical expertise with client relationship management, requiring
            skills in system configuration, problem-solving, and AI prompt
            engineering.
          </p>
          <div class="position-requirements">
            <h4>Key Requirements:</h4>
            <ul>
              <li>Experience in client-facing technical roles</li>
              <li>Strong problem-solving and troubleshooting skills</li>
              <li>
                Knowledge of cloud infrastructure and modern web technologies
              </li>
              <li>Interest in AI/ML technologies and prompt engineering</li>
              <li>Excellent communication and presentation skills</li>
            </ul>
          </div>
          <div class="position-actions">
            <Button variant="primary" size="large" on:click={startAssessment}>
              Take Assessment
            </Button>
            <p class="assessment-note">
              Complete our comprehensive pre-trial assessment to demonstrate
              your skills
            </p>
          </div>
        </Card>

        <Card class="position-card">
          <div class="position-header">
            <h3>AI Automation Developer</h3>
            <div class="badge-group">
              <span class="position-badge new-badge">New</span>
              <span class="assessment-badge">🎯 Assessment Ready</span>
            </div>
          </div>
          <div class="position-details">
            <div class="detail-item">
              <strong>Department:</strong> Engineering
            </div>
            <div class="detail-item">
              <strong>Location:</strong> Remote / Hybrid
            </div>
            <div class="detail-item">
              <strong>Type:</strong> Full-time
            </div>
          </div>
          <p class="position-description">
            Build and optimize AI-driven automation workflows that help businesses 
            streamline their operations. You'll work with cutting-edge AI models, 
            integration APIs, and workflow automation tools to create intelligent 
            solutions that save time and increase efficiency.
          </p>
          <div class="position-requirements">
            <h4>Key Requirements:</h4>
            <ul>
              <li>3+ years experience with Python, JavaScript, or similar languages</li>
              <li>Experience with API integrations and workflow automation</li>
              <li>Knowledge of AI/ML frameworks and prompt engineering</li>
              <li>Familiarity with cloud platforms (AWS, GCP, Azure)</li>
            </ul>
          </div>
          <div class="position-actions">
            <Button variant="primary" on:click={startAssessment}>
              Take Assessment
            </Button>
            <p class="assessment-note">
              Complete our technical assessment to showcase your automation skills
            </p>
          </div>
        </Card>

        <Card class="position-card">
          <div class="position-header">
            <h3>Sales Director</h3>
            <div class="badge-group">
              <span class="position-badge leadership-badge">Leadership</span>
              <span class="assessment-badge">🎯 Assessment Ready</span>
            </div>
          </div>
          <div class="position-details">
            <div class="detail-item">
              <strong>Department:</strong> Sales
            </div>
            <div class="detail-item">
              <strong>Location:</strong> Remote / Hybrid
            </div>
            <div class="detail-item">
              <strong>Type:</strong> Full-time
            </div>
          </div>
          <p class="position-description">
            Lead our sales organization to drive revenue growth and market expansion. 
            You'll build and manage a high-performing sales team, develop strategic 
            partnerships, and work directly with enterprise clients to showcase the 
            transformative power of our AI solutions.
          </p>
          <div class="position-requirements">
            <h4>Key Requirements:</h4>
            <ul>
              <li>7+ years of B2B sales leadership experience</li>
              <li>Proven track record of building and scaling sales teams</li>
              <li>Experience selling SaaS or technology solutions to enterprises</li>
              <li>Strong understanding of AI/automation market trends</li>
              <li>Excellent communication and strategic thinking skills</li>
            </ul>
          </div>
          <div class="position-actions">
            <Button variant="primary" on:click={startAssessment}>
              Take Assessment
            </Button>
            <p class="assessment-note">
              Demonstrate your sales leadership and strategic thinking abilities
            </p>
          </div>
        </Card>

        <Card class="position-card">
          <div class="position-header">
            <h3>DevOps Engineer</h3>
            <div class="badge-group">
              <span class="position-badge urgent-badge">Urgent</span>
              <span class="assessment-badge">🎯 Assessment Ready</span>
            </div>
          </div>
          <div class="position-details">
            <div class="detail-item">
              <strong>Department:</strong> Engineering
            </div>
            <div class="detail-item">
              <strong>Location:</strong> Hybrid
            </div>
            <div class="detail-item">
              <strong>Type:</strong> Full-time
            </div>
          </div>
          <p class="position-description">
            Scale our infrastructure to support millions of AI conversations
            while maintaining high availability and performance standards. You'll 
            work with containerization, CI/CD pipelines, and cloud infrastructure 
            to ensure our AI platform runs smoothly at scale.
          </p>
          <div class="position-requirements">
            <h4>Key Requirements:</h4>
            <ul>
              <li>5+ years experience with cloud platforms (AWS, GCP, Azure)</li>
              <li>Expertise in containerization (Docker, Kubernetes)</li>
              <li>Experience with CI/CD pipelines and Infrastructure as Code</li>
              <li>Knowledge of monitoring and observability tools</li>
              <li>Strong scripting skills (Python, Bash, or similar)</li>
            </ul>
          </div>
          <div class="position-actions">
            <Button variant="primary" on:click={startAssessment}>
              Take Assessment
            </Button>
            <p class="assessment-note">
              Show your infrastructure and automation expertise
            </p>
          </div>
        </Card>
      </div>
    </div>

    <div class="application-process">
      <h2>Our Hiring Process</h2>
      <div class="process-steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Application & Assessment</h4>
            <p>
              Submit your application and complete our role-specific assessment
              to demonstrate your skills.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>Initial Interview</h4>
            <p>
              Meet with our team to discuss your experience and learn more about
              the role and company.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>Technical/Practical Round</h4>
            <p>
              Demonstrate your technical skills or complete a practical exercise
              relevant to the position.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>Final Interview</h4>
            <p>
              Meet with senior team members and discuss cultural fit, career
              goals, and next steps.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>Welcome to GY6AI!</h4>
            <p>
              Join our team and begin your journey helping businesses transform
              with AI technology.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <Card class="cta-card">
        <h2>Ready to Shape the Future of AI?</h2>
        <p>
          Don't see a position that fits? We're always looking for exceptional
          talent. Send us your resume and let us know how you'd like to
          contribute to our mission.
        </p>
        <div class="cta-actions">
          <Button variant="primary" size="large" on:click={goHome}>
            Learn More About GY6AI
          </Button>
          <Button variant="outline" size="large">
            Send General Application
          </Button>
        </div>
      </Card>
    </div>
  </div>
</main>

<Footer />

<style lang="scss">
  .gradient-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      #667eea,
      #764ba2,
      #f093fb,
      #f5576c,
      #4facfe,
      #00f2fe
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    opacity: 0.03;
    z-index: -2;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .careers-main {
    min-height: 100vh;
    padding-top: 8rem;
    padding-bottom: 4rem;
  }

  .careers-hero {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem auto;

    .title {
      font-size: 3.5rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 1.25rem;
      line-height: 1.6;
      color: #b0b0b0;
    }
  }

  .assessment-cta {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;

    .assessment-card {
      max-width: 700px;
      background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(245, 87, 108, 0.05));
      border: 2px solid rgba(79, 172, 254, 0.3);
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #4facfe, #f5576c, #f093fb);
      }
    }

    .assessment-content {
      text-align: center;
      padding: 0.5rem;

      .cta-badge {
        display: inline-block;
        background: linear-gradient(135deg, #f5576c, #f093fb);
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        animation: pulse 2s infinite;
      }

      h2 {
        color: #ffffff;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      p {
        color: #b0b0b0;
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }
    }

    .assessment-features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;

      .feature {
        color: #22c55e;
        font-weight: 600;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
    }

    .assessment-action {
      .assessment-info {
        color: #888;
        font-size: 0.9rem;
        margin-top: 1rem;
        line-height: 1.5;

        strong {
          color: #4facfe;
        }
      }
    }
  }

  .company-values {
    margin-bottom: 4rem;

    h2 {
      color: #ffffff;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .value-item {
      text-align: center;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-4px);
      }

      h3 {
        color: #4facfe;
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }

      p {
        color: #b0b0b0;
        line-height: 1.6;
      }
    }
  }

  .open-positions {
    margin-bottom: 4rem;

    h2 {
      color: #ffffff;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
    }

    .positions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .position-card {
      position: relative;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-4px);
      }

      &.featured {
        border: 2px solid #4facfe;
        background: linear-gradient(
          135deg,
          rgba(79, 172, 254, 0.1),
          rgba(0, 242, 254, 0.05)
        );
      }

      .position-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;

        h3 {
          color: #ffffff;
          font-size: 1.25rem;
          margin: 0;
          flex: 1;
        }

        .badge-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .position-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;

          &.featured-badge {
            background: #4facfe;
            color: white;
          }

          &.new-badge {
            background: #22c55e;
            color: white;
          }

          &.leadership-badge {
            background: #f59e0b;
            color: white;
          }

          &.urgent-badge {
            background: #ef4444;
            color: white;
          }
        }

        .assessment-badge {
          background: linear-gradient(135deg, #f5576c, #f093fb);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          animation: pulse 2s infinite;
        }
      }

      .position-details {
        margin-bottom: 1.5rem;

        .detail-item {
          margin-bottom: 0.5rem;
          color: #b0b0b0;
          font-size: 0.9rem;

          strong {
            color: #e0e0e0;
            margin-right: 0.5rem;
          }
        }
      }

      .position-description {
        color: #b0b0b0;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }

      .position-requirements {
        margin-bottom: 2rem;

        h4 {
          color: #4facfe;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        ul {
          color: #b0b0b0;
          padding-left: 1.5rem;

          li {
            margin-bottom: 0.5rem;
            line-height: 1.5;
          }
        }
      }

      .position-actions {
        text-align: center;
        padding: 1.5rem;
        background: rgba(79, 172, 254, 0.05);
        border-radius: 0.75rem;
        border-top: 2px solid rgba(79, 172, 254, 0.2);
        margin-top: 1.5rem;

        .assessment-note {
          color: #4facfe;
          font-size: 0.95rem;
          margin-top: 0.75rem;
          font-weight: 500;
          line-height: 1.4;
        }

        .coming-soon {
          color: #888;
          font-size: 0.9rem;
          margin-top: 0.75rem;
        }
      }
    }
  }

  .application-process {
    margin-bottom: 4rem;

    h2 {
      color: #ffffff;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3rem;
    }

    .process-steps {
      max-width: 800px;
      margin: 0 auto;
    }

    .step {
      display: flex;
      align-items: flex-start;
      gap: 2rem;
      margin-bottom: 2rem;
      position: relative;

      &:not(:last-child)::after {
        content: "";
        position: absolute;
        left: 20px;
        top: 50px;
        width: 2px;
        height: calc(100% + 1rem);
        background: linear-gradient(180deg, #4facfe, rgba(79, 172, 254, 0.3));
      }

      .step-number {
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #4facfe, #00f2fe);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 900;
        font-size: 1.1rem;
        flex-shrink: 0;
      }

      .step-content {
        h4 {
          color: #ffffff;
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        p {
          color: #b0b0b0;
          line-height: 1.6;
        }
      }
    }
  }

  .cta-section {
    text-align: center;

    .cta-card {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;

      h2 {
        color: #ffffff;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      p {
        color: #b0b0b0;
        line-height: 1.6;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }

      .cta-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }

  @media (max-width: 768px) {
    .careers-main {
      padding-top: 6rem;
    }

    .careers-hero {
      margin-bottom: 2rem;

      .title {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1.1rem;
      }
    }

    .assessment-cta {
      margin-bottom: 3rem;

      .assessment-card {
        margin: 0 1rem;
      }

      .assessment-content {
        h2 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
        }
      }

      .assessment-features {
        grid-template-columns: 1fr;
        gap: 0.75rem;

        .feature {
          font-size: 0.9rem;
        }
      }
    }

    .company-values,
    .open-positions,
    .application-process {
      margin-bottom: 3rem;
    }

    .company-values h2,
    .open-positions h2,
    .application-process h2 {
      font-size: 2rem;
    }

    .positions-grid {
      grid-template-columns: 1fr;
    }

    .step {
      gap: 1rem;

      &:not(:last-child)::after {
        left: 15px;
      }

      .step-number {
        width: 30px;
        height: 30px;
        font-size: 1rem;
      }
    }

    .cta-card .cta-actions {
      flex-direction: column;
    }

    .position-header {
      flex-direction: column;
      align-items: flex-start !important;
      gap: 1rem;

      .badge-group {
        flex-direction: row !important;
        align-items: flex-start !important;
        flex-wrap: wrap;
      }
    }
  }
</style>
