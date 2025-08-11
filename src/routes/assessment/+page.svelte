<!-- src/routes/assessment/+page.svelte -->
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

  function startAssessment() {
    goto("/assessment/overview");
  }

  function goHome() {
    goto("/");
  }

  function goCareers() {
    goto("/careers");
  }
</script>

<svelte:head>
  <title>Client Solutions Specialist Assessment - GY6AI</title>
  <meta
    name="description"
    content="Comprehensive pre-trial assessment for Client Solutions Specialist candidates at GY6AI."
  />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Background Elements -->
<div class="gradient-bg" />

<!-- Layout -->
<Header />

<main class="assessment-main">
  <div class="container">
    <div class="assessment-hero">
      <h1 class="title">Client Solutions Specialist</h1>
      <h2 class="subtitle">Pre-Trial Assessment</h2>

      <Card class="welcome-card">
        <div class="card-content">
          <h3>Welcome to the GY6AI Assessment Platform</h3>
          <p class="description">
            This comprehensive assessment is designed to evaluate candidates for
            the Client Solutions Specialist role. You will demonstrate your
            skills in client acquisition, technical evaluation, problem-solving,
            and advanced prompt engineering.
          </p>

          <div class="assessment-details">
            <div class="detail-item">
              <strong>Duration:</strong> 48 hours from start time
            </div>
            <div class="detail-item">
              <strong>Sections:</strong> 4 comprehensive assessment areas
            </div>
            <div class="detail-item">
              <strong>Tools:</strong> Use your preferred tools and resources
            </div>
            <div class="detail-item">
              <strong>Format:</strong> Mix of written responses, videos, and code
              submissions
            </div>
          </div>

          <div class="action-buttons">
            <Button variant="primary" size="large" on:click={startAssessment}>
              Start Assessment
            </Button>

            <div class="secondary-actions">
              <Button variant="outline" on:click={goHome}>Back to Home</Button>
              <Button variant="outline" on:click={goCareers}>
                View All Careers
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div class="assessment-overview">
        <h3>Assessment Overview</h3>
        <div class="overview-grid">
          <Card class="overview-item">
            <h4>1. Client Acquisition & Problem-Solving</h4>
            <p>
              Prepare a mock pitch for a potential client and identify critical
              pain points with proposed solutions.
            </p>
          </Card>

          <Card class="overview-item">
            <h4>2. Technical Solution Blueprint</h4>
            <p>
              Design a modern cloud architecture and troubleshoot complex system
              issues in production environments.
            </p>
          </Card>

          <Card class="overview-item">
            <h4>3. Prompt Engineering</h4>
            <p>
              Develop advanced AI prompts with parameter configuration for
              medical AI applications.
            </p>
          </Card>

          <Card class="overview-item">
            <h4>4. Technical Implementation</h4>
            <p>
              Build a FastAPI backend with React frontend demonstrating
              full-stack development skills.
            </p>
          </Card>
        </div>
      </div>
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

  .assessment-main {
    min-height: 100vh;
    padding-top: 8rem;
    padding-bottom: 4rem;
  }

  .assessment-hero {
    text-align: center;
    max-width: 1000px;
    margin: 0 auto;
  }

  .title {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: #a0a0a0;
    margin-bottom: 3rem;
  }

  .welcome-card {
    margin-bottom: 4rem;
    text-align: left;
  }

  .card-content {
    padding: 2rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #ffffff;
    }

    .description {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #b0b0b0;
      margin-bottom: 2rem;
    }
  }

  .assessment-details {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin-bottom: 2rem;

    .detail-item {
      margin-bottom: 0.75rem;
      color: #e0e0e0;

      &:last-child {
        margin-bottom: 0;
      }

      strong {
        color: #4facfe;
        margin-right: 0.5rem;
      }
    }
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    .secondary-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .assessment-overview {
    h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #ffffff;
    }
  }

  .overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .overview-item {
    text-align: left;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }

    h4 {
      color: #4facfe;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    p {
      color: #b0b0b0;
      line-height: 1.6;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    .assessment-main {
      padding-top: 6rem;
    }

    .title {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.25rem;
    }

    .card-content {
      padding: 1.5rem;
    }

    .secondary-actions {
      flex-direction: column;
      width: 100%;
    }

    .overview-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
