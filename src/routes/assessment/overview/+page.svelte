<!-- src/routes/assessment/overview/+page.svelte -->
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Header from "$components/layout/Header.svelte";
  import Footer from "$components/layout/Footer.svelte";
  import Button from "$components/ui/Button.svelte";
  import Card from "$components/ui/Card.svelte";
  import AutoSave from "$components/ui/AutoSave.svelte";
  import { assessmentProgress, timeStats, assessmentActions } from '$stores/assessment.js';

  let mounted = false;
  let timeRemaining = "48:00:00";
  let assessmentStarted = false;

  onMount(async () => {
    mounted = true;
    
    // Load existing progress from IndexedDB
    const progress = await assessmentActions.loadProgress();
    
    if (progress && progress.startTime) {
      assessmentStarted = true;
      startTimer(new Date(progress.startTime));
    }
  });

  function startTimer(startTime) {
    const endTime = new Date(startTime.getTime() + 48 * 60 * 60 * 1000);

    const updateTimer = () => {
      const now = new Date();
      const remaining = endTime - now;

      if (remaining <= 0) {
        timeRemaining = "00:00:00";
        return;
      }

      const hours = Math.floor(remaining / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      timeRemaining = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  async function startAssessment() {
    const startTime = new Date();
    assessmentStarted = true;
    startTimer(startTime);

    // Initialize assessment progress using IndexedDB
    await assessmentActions.startAssessment();
  }

  function continueToFirstSection() {
    goto("/assessment/client-acquisition");
  }

  function getSectionDisplayName(sectionKey) {
    const names = {
      'client-acquisition': 'Client Acquisition',
      'technical-solution': 'Technical Solution', 
      'prompt-engineering': 'Prompt Engineering',
      'implementation': 'Implementation'
    };
    return names[sectionKey] || sectionKey;
  }

  function formatSaveTime(timestamp) {
    const now = new Date();
    const saved = new Date(timestamp);
    const diff = now - saved;
    
    if (diff < 60000) return 'just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return saved.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
</script>

<svelte:head>
  <title>Assessment Overview - Client Solutions Specialist - GY6AI</title>
  <meta
    name="description"
    content="Assessment guidelines and instructions for the Client Solutions Specialist role at GY6AI."
  />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Background Elements -->
<div class="gradient-bg" />

<!-- Layout -->
<Header />

<main class="assessment-main">
  <div class="container">
    <div class="assessment-content">
      <div class="header-section">
        <h1 class="title">Assessment Guidelines</h1>
        {#if assessmentStarted}
          <div class="timer-display">
            <span class="timer-label">Time Remaining:</span>
            <span class="timer-value">{timeRemaining}</span>
          </div>
        {/if}
      </div>

      <Card class="guidelines-card">
        <div class="card-content">
          <h2>Overview and Guidelines</h2>

          <div class="purpose-section">
            <h3>Purpose</h3>
            <p>
              To assess a candidate's practical skills in a simulated real-world
              scenario, covering client engagement, technical system
              configuration, complex problem-solving, and advanced AI prompt
              engineering.
            </p>
          </div>

          <div class="tools-section">
            <h3>Tools & Resources</h3>
            <p>
              Candidates are encouraged to use tools of their choice (e.g.,
              preferred IDEs, programming languages, documentation, online
              resources, communication platforms, etc.) to complete the
              assessment. The focus is on the solution and approach, not on
              strict adherence to a specific toolset, unless otherwise specified
              for a particular task.
            </p>
          </div>

          <div class="timeline-section">
            <h3>Timeline</h3>
            <p>
              Candidates will have <strong>48 hours</strong> to complete all components
              of this assessment from the time it is started. The timer begins when
              you click "Start Assessment" below.
            </p>
          </div>

          <div class="deliverables-section">
            <h3>Deliverables</h3>
            <p>
              Each section specifies the required deliverables. Submissions
              should be well-documented and clearly present the solution and
              thought process. All submissions will be saved automatically as
              you progress.
            </p>
          </div>
        </div>
      </Card>

      <div class="sections-overview">
        <h2>Assessment Sections</h2>
        
        {#if assessmentStarted && $assessmentProgress}
          <div class="progress-summary">
            <Card className="progress-card" variant="outlined" padding="default">
              <div class="progress-header">
                <h3>Your Progress</h3>
                <div class="overall-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: {$assessmentProgress.totalProgress}%"></div>
                  </div>
                  <span class="progress-text">{Math.round($assessmentProgress.totalProgress)}% Complete</span>
                </div>
              </div>
              
              <div class="section-progress">
                {#each Object.entries($assessmentProgress.sections) as [sectionKey, section]}
                  <div class="section-status" class:completed={section.completed} class:has-progress={section.hasProgress}>
                    <div class="status-icon">
                      {#if section.completed}
                        ✅
                      {:else if section.hasProgress}
                        🔄
                      {:else}
                        ⏳
                      {/if}
                    </div>
                    <span class="section-name">{getSectionDisplayName(sectionKey)}</span>
                    {#if section.lastSaved}
                      <span class="last-saved">Saved {formatSaveTime(section.lastSaved)}</span>
                    {/if}
                  </div>
                {/each}
              </div>
            </Card>
          </div>
        {/if}
        
        <div class="sections-grid">
          <Card class="section-card">
            <div class="section-number">I</div>
            <h3>Client Acquisition & Problem-Solving</h3>
            <ul>
              <li>Mock pitch preparation (max 10 minutes)</li>
              <li>Written solution summary (max 500 words)</li>
              <li>Video recording or detailed script</li>
              <li>Identify 3 critical pain points</li>
            </ul>
            <p class="scenario">
              <strong>Scenario:</strong> Engage with "Global Connect Corp." experiencing
              legacy data processing issues.
            </p>
          </Card>

          <Card class="section-card">
            <div class="section-number">II</div>
            <h3>Technical Solution Blueprint</h3>
            <ul>
              <li>High-level technical architecture diagram</li>
              <li>Cloud migration proposal with justification</li>
              <li>Step-by-step troubleshooting approach</li>
              <li>Production environment problem isolation</li>
            </ul>
            <p class="scenario">
              <strong>Scenario:</strong> Migrate from outdated on-premise SQL to
              modern cloud-based solution.
            </p>
          </Card>

          <Card class="section-card">
            <div class="section-number">III</div>
            <h3>Prompt Engineering</h3>
            <ul>
              <li>Core system prompt development</li>
              <li>Hallucination reduction strategies</li>
              <li>Parameter configuration (Temperature, Top P, etc.)</li>
              <li>Medical AI response optimization</li>
            </ul>
            <p class="scenario">
              <strong>Scenario:</strong> Design AI prompts for "MediBot Health" symptom
              checker application.
            </p>
          </Card>

          <Card class="section-card">
            <div class="section-number">IV</div>
            <h3>Technical Implementation</h3>
            <ul>
              <li>FastAPI backend with secure endpoints</li>
              <li>React frontend with user interface</li>
              <li>API integration demonstration</li>
              <li>Mobile-responsive design with Tailwind CSS</li>
            </ul>
            <p class="scenario">
              <strong>Scenario:</strong> Build integrated web application for MediBot
              Health AI service.
            </p>
          </Card>
        </div>
      </div>

      <div class="action-section">
        {#if !assessmentStarted}
          <Card class="start-card">
            <div class="start-content">
              <h3>Ready to Begin?</h3>
              <p>
                Once you start the assessment, the 48-hour timer will begin.
                Make sure you have adequate time to dedicate to this
                comprehensive evaluation.
              </p>
              <Button variant="primary" size="large" on:click={startAssessment}>
                Start Assessment
              </Button>
            </div>
          </Card>
        {:else}
          <Card class="continue-card">
            <div class="continue-content">
              <h3>Assessment in Progress</h3>
              <p>
                Your assessment has begun. You can navigate between sections and
                save your progress at any time. Remember to submit all
                deliverables before the timer expires.
              </p>
              <Button
                variant="primary"
                size="large"
                on:click={continueToFirstSection}
              >
                Continue to Section I
              </Button>
            </div>
          </Card>
        {/if}
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

  .assessment-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header-section {
    text-align: center;
    margin-bottom: 3rem;

    .title {
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .timer-display {
      background: rgba(79, 172, 254, 0.1);
      border: 2px solid #4facfe;
      border-radius: 0.75rem;
      padding: 1rem 2rem;
      display: inline-block;

      .timer-label {
        color: #4facfe;
        font-weight: 600;
        margin-right: 0.75rem;
      }

      .timer-value {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: 900;
        font-family: "Courier New", monospace;
      }
    }
  }

  .guidelines-card {
    margin-bottom: 3rem;

    .card-content {
      padding: 2rem;

      h2 {
        color: #ffffff;
        font-size: 1.75rem;
        margin-bottom: 2rem;
        text-align: center;
      }

      h3 {
        color: #4facfe;
        font-size: 1.25rem;
        margin-bottom: 1rem;
        margin-top: 2rem;

        &:first-of-type {
          margin-top: 0;
        }
      }

      p {
        color: #b0b0b0;
        line-height: 1.6;
        margin-bottom: 1rem;
      }
    }
  }

  .sections-overview {
    margin-bottom: 3rem;

    h2 {
      color: #ffffff;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  .progress-summary {
    margin-bottom: 2rem;

    .progress-card {
      max-width: 800px;
      margin: 0 auto;
    }

    .progress-header {
      text-align: center;
      margin-bottom: 2rem;

      h3 {
        color: #ffffff;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .overall-progress {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;

        .progress-bar {
          flex: 1;
          max-width: 300px;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;

          .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #4facfe, #00f2fe);
            border-radius: 4px;
            transition: width 0.3s ease;
          }
        }

        .progress-text {
          color: #4facfe;
          font-weight: 600;
          font-size: 1.1rem;
          min-width: 120px;
          text-align: center;
        }
      }
    }

    .section-progress {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;

      .section-status {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;

        &.completed {
          background: rgba(34, 197, 94, 0.1);
          border-color: rgba(34, 197, 94, 0.3);
        }

        &.has-progress {
          background: rgba(79, 172, 254, 0.1);
          border-color: rgba(79, 172, 254, 0.3);
        }

        .status-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .section-name {
          color: #ffffff;
          font-weight: 600;
          flex: 1;
        }

        .last-saved {
          color: #888;
          font-size: 0.8rem;
          font-weight: 400;
        }
      }
    }
  }

  .sections-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .section-card {
    position: relative;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }

    .section-number {
      position: absolute;
      top: -10px;
      left: 20px;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.25rem;
    }

    h3 {
      color: #ffffff;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    ul {
      color: #b0b0b0;
      margin-bottom: 1rem;
      padding-left: 1.5rem;

      li {
        margin-bottom: 0.5rem;
        line-height: 1.4;
      }
    }

    .scenario {
      background: rgba(79, 172, 254, 0.1);
      padding: 1rem;
      border-radius: 0.5rem;
      color: #e0e0e0;
      font-size: 0.9rem;
      margin: 0;

      strong {
        color: #4facfe;
      }
    }
  }

  .action-section {
    text-align: center;
  }

  .start-card,
  .continue-card {
    max-width: 600px;
    margin: 0 auto;
  }

  .start-content,
  .continue-content {
    padding: 2rem;
    text-align: center;

    h3 {
      color: #ffffff;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      color: #b0b0b0;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 768px) {
    .assessment-main {
      padding-top: 6rem;
    }

    .header-section .title {
      font-size: 2.25rem;
    }

    .guidelines-card .card-content {
      padding: 1.5rem;
    }

    .sections-grid {
      grid-template-columns: 1fr;
    }

    .timer-display {
      padding: 0.75rem 1.5rem !important;

      .timer-value {
        font-size: 1.25rem !important;
      }
    }
  }
</style>
