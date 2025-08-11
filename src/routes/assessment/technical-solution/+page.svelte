<!-- src/routes/assessment/technical-solution/+page.svelte -->
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Header from "$components/layout/Header.svelte";
  import Footer from "$components/layout/Footer.svelte";
  import Button from "$components/ui/Button.svelte";
  import Card from "$components/ui/Card.svelte";
  import Input from "$components/ui/Input.svelte";

  let mounted = false;
  let progress = 0;
  let timeRemaining = "48:00:00";

  let formData = {
    architectureDiagram: null,
    architectureDescription: "",
    cloudProvider: "",
    databaseService: "",
    computingServices: "",
    justification: "",
    troubleshootingSteps: "",
    questionsToAsk: "",
    logsToCheck: "",
    isolationApproach: "",
    diagramUrl: "",
  };

  let diagramUploaded = false;

  onMount(() => {
    mounted = true;
    loadProgress();
    startTimer();
    loadSavedData();
  });

  function loadProgress() {
    const savedProgress = localStorage.getItem("assessment_progress");
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      progress = progressData.sections?.technicalSolution?.progress || 0;
    }
  }

  function startTimer() {
    const startTime = localStorage.getItem("assessment_start_time");
    if (!startTime) {
      goto("/assessment/overview");
      return;
    }

    const startDate = new Date(startTime);
    const endTime = new Date(startDate.getTime() + 48 * 60 * 60 * 1000);

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

  function loadSavedData() {
    const saved = localStorage.getItem("assessment_technical_solution");
    if (saved) {
      formData = { ...formData, ...JSON.parse(saved) };
      updateProgress();
    }
  }

  function saveData() {
    localStorage.setItem(
      "assessment_technical_solution",
      JSON.stringify(formData)
    );
    updateProgress();
  }

  function updateProgress() {
    let completed = 0;
    const total = 9; // Total required fields

    if (formData.architectureDescription.trim()) completed++;
    if (formData.cloudProvider.trim()) completed++;
    if (formData.databaseService.trim()) completed++;
    if (formData.computingServices.trim()) completed++;
    if (formData.justification.trim()) completed++;
    if (formData.troubleshootingSteps.trim()) completed++;
    if (formData.questionsToAsk.trim()) completed++;
    if (formData.logsToCheck.trim()) completed++;
    if (formData.isolationApproach.trim()) completed++;

    progress = Math.round((completed / total) * 100);

    // Update global progress
    const savedProgress = localStorage.getItem("assessment_progress");
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      progressData.sections.technicalSolution.progress = progress;
      progressData.sections.technicalSolution.completed = progress === 100;
      localStorage.setItem("assessment_progress", JSON.stringify(progressData));
    }
  }

  function handleInput(field) {
    return (event) => {
      formData[field] = event.target.value;
      saveData();
    };
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      formData.architectureDiagram = file;
      diagramUploaded = true;
      saveData();
    }
  }

  function nextSection() {
    goto("/assessment/prompt-engineering");
  }

  function previousSection() {
    goto("/assessment/client-acquisition");
  }
</script>

<svelte:head>
  <title>Technical Solution Blueprint - Assessment - GY6AI</title>
  <meta
    name="description"
    content="Technical solution blueprint and troubleshooting assessment section."
  />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Background Elements -->
<div class="gradient-bg" />

<!-- Layout -->
<Header />

<main class="assessment-main">
  <div class="container">
    <div class="assessment-header">
      <div class="section-info">
        <h1 class="section-title">
          Section II: Technical Solution Blueprint & Troubleshooting
        </h1>
        <div class="progress-bar">
          <div class="progress-fill" style="width: {progress}%" />
        </div>
        <span class="progress-text">{progress}% Complete</span>
      </div>

      <div class="timer-display">
        <span class="timer-label">Time Remaining:</span>
        <span class="timer-value">{timeRemaining}</span>
      </div>
    </div>

    <div class="content-grid">
      <div class="scenario-column">
        <Card class="scenario-card">
          <h2>Scenario</h2>
          <p class="scenario-text">
            Based on the previous scenario, <strong>Global Connect Corp.</strong
            > currently uses an outdated on-premise SQL database and a monolithic
            backend application. They are looking to migrate to a cloud-based solution.
          </p>

          <div class="requirements-box">
            <h3>Required Deliverables:</h3>
            <ul>
              <li>
                High-level technical blueprint (diagram + brief explanation)
              </li>
              <li>Modern, scalable cloud architecture proposal</li>
              <li>Suggested technologies with justification</li>
              <li>
                Step-by-step troubleshooting approach for data corruption issues
              </li>
            </ul>
          </div>

          <div class="problem-context">
            <h3>Problem Context:</h3>
            <p>
              Global Connect Corp. reports that their legacy system occasionally
              crashes under peak load, leading to data corruption. You need to
              address this intermittent issue in a production environment with
              limited initial access.
            </p>
          </div>
        </Card>
      </div>

      <div class="form-column">
        <Card class="deliverable-card">
          <h2>1. Technical Architecture Blueprint</h2>
          <p class="instruction">
            Create a high-level technical blueprint proposing a modern, scalable
            cloud architecture for Global Connect Corp.'s data processing needs.
          </p>

          <div class="diagram-section">
            <h4>Architecture Diagram</h4>
            <div class="diagram-options">
              <div class="option-group">
                <h5>Option A: Upload Diagram</h5>
                <div class="file-upload">
                  <input
                    type="file"
                    accept="image/*,.pdf,.drawio,.vsd,.vsdx"
                    on:change={handleFileUpload}
                    id="diagram-upload"
                    hidden
                  />
                  <label for="diagram-upload" class="upload-button">
                    {diagramUploaded ? "Diagram Uploaded ✓" : "Upload Diagram"}
                  </label>
                  {#if diagramUploaded}
                    <span class="file-info"
                      >File: {formData.architectureDiagram?.name}</span
                    >
                  {/if}
                </div>
              </div>

              <div class="option-separator">OR</div>

              <div class="option-group">
                <h5>Option B: Link to Online Diagram</h5>
                <Input
                  type="url"
                  bind:value={formData.diagramUrl}
                  on:input={handleInput("diagramUrl")}
                  placeholder="https://lucid.app/example or https://draw.io/example"
                />
              </div>
            </div>
          </div>

          <div class="description-section">
            <h4>Architecture Description</h4>
            <textarea
              bind:value={formData.architectureDescription}
              on:input={handleInput("architectureDescription")}
              placeholder="Provide a detailed explanation of your proposed architecture, including data flow, security considerations, scalability features, and integration points..."
              rows="6"
            />
          </div>
        </Card>

        <Card class="deliverable-card">
          <h2>2. Technology Stack Proposal</h2>
          <p class="instruction">
            Suggest specific technologies and services for each component of
            your solution with clear justification.
          </p>

          <div class="tech-stack-grid">
            <div class="tech-item">
              <h4>Cloud Provider</h4>
              <Input
                bind:value={formData.cloudProvider}
                on:input={handleInput("cloudProvider")}
                placeholder="e.g., AWS, Azure, Google Cloud"
              />
            </div>

            <div class="tech-item">
              <h4>Database Service</h4>
              <Input
                bind:value={formData.databaseService}
                on:input={handleInput("databaseService")}
                placeholder="e.g., Amazon RDS, Azure SQL, Cloud SQL"
              />
            </div>

            <div class="tech-item">
              <h4>Computing Services</h4>
              <Input
                bind:value={formData.computingServices}
                on:input={handleInput("computingServices")}
                placeholder="e.g., EC2, App Service, Compute Engine"
              />
            </div>
          </div>

          <div class="justification-section">
            <h4>Technology Justification</h4>
            <textarea
              bind:value={formData.justification}
              on:input={handleInput("justification")}
              placeholder="Explain why you chose these specific technologies. Consider factors like cost, scalability, reliability, security, integration capabilities, and Global Connect Corp.'s specific needs..."
              rows="5"
            />
          </div>
        </Card>

        <Card class="deliverable-card">
          <h2>3. Production Troubleshooting Approach</h2>
          <p class="instruction">
            Describe your step-by-step approach to troubleshooting the
            intermittent data corruption issue in Global Connect Corp.'s
            production environment, assuming limited initial access.
          </p>

          <div class="troubleshooting-section">
            <div class="troubleshoot-item">
              <h4>Step-by-Step Troubleshooting Process</h4>
              <textarea
                bind:value={formData.troubleshootingSteps}
                on:input={handleInput("troubleshootingSteps")}
                placeholder="Outline your systematic approach to identifying and resolving the data corruption issue. Include initial assessment, escalation procedures, and resolution steps..."
                rows="6"
              />
            </div>

            <div class="troubleshoot-item">
              <h4>Key Questions to Ask</h4>
              <textarea
                bind:value={formData.questionsToAsk}
                on:input={handleInput("questionsToAsk")}
                placeholder="List the critical questions you would ask stakeholders, system administrators, and users to understand the scope and nature of the problem..."
                rows="4"
              />
            </div>

            <div class="troubleshoot-item">
              <h4>Logs and Data to Examine</h4>
              <textarea
                bind:value={formData.logsToCheck}
                on:input={handleInput("logsToCheck")}
                placeholder="Specify which logs, metrics, and data sources you would examine first. Include system logs, application logs, database logs, performance metrics, etc..."
                rows="4"
              />
            </div>

            <div class="troubleshoot-item">
              <h4>Problem Isolation Strategy</h4>
              <textarea
                bind:value={formData.isolationApproach}
                on:input={handleInput("isolationApproach")}
                placeholder="Explain how you would isolate the problem to identify the root cause. Include testing procedures, environment isolation, and impact assessment..."
                rows="4"
              />
            </div>
          </div>
        </Card>

        <div class="navigation-buttons">
          <Button variant="outline" on:click={previousSection}>
            ← Previous: Client Acquisition
          </Button>
          <Button variant="primary" on:click={nextSection}>
            Next: Prompt Engineering →
          </Button>
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

  .assessment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    gap: 2rem;
  }

  .section-info {
    flex: 1;
  }

  .section-title {
    color: #ffffff;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4facfe, #00f2fe);
    transition: width 0.3s ease;
  }

  .progress-text {
    color: #4facfe;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .timer-display {
    background: rgba(79, 172, 254, 0.1);
    border: 2px solid #4facfe;
    border-radius: 0.75rem;
    padding: 1rem 1.5rem;
    text-align: center;
    white-space: nowrap;

    .timer-label {
      color: #4facfe;
      font-weight: 600;
      display: block;
      font-size: 0.9rem;
    }

    .timer-value {
      color: #ffffff;
      font-size: 1.25rem;
      font-weight: 900;
      font-family: "Courier New", monospace;
    }
  }

  .content-grid {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 2rem;
  }

  .scenario-card {
    position: sticky;
    top: 2rem;
    height: fit-content;

    h2 {
      color: #4facfe;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .scenario-text {
      color: #b0b0b0;
      line-height: 1.6;
      margin-bottom: 1.5rem;

      strong {
        color: #ffffff;
      }
    }
  }

  .requirements-box,
  .problem-context {
    background: rgba(79, 172, 254, 0.1);
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-left: 4px solid #4facfe;
    margin-bottom: 1.5rem;

    h3 {
      color: #4facfe;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    ul {
      color: #e0e0e0;
      padding-left: 1.5rem;

      li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
      }
    }

    p {
      color: #e0e0e0;
      line-height: 1.6;
      margin: 0;
    }
  }

  .deliverable-card {
    margin-bottom: 2rem;

    h2 {
      color: #ffffff;
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }

    .instruction {
      color: #b0b0b0;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    h4 {
      color: #ffffff;
      font-size: 1.1rem;
      margin-bottom: 1rem;
      margin-top: 1.5rem;

      &:first-of-type {
        margin-top: 0;
      }
    }

    h5 {
      color: #4facfe;
      font-size: 1rem;
      margin-bottom: 0.75rem;
      margin-top: 1rem;
    }
  }

  .diagram-options {
    .option-group {
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .option-separator {
      text-align: center;
      color: #666;
      font-weight: 600;
      margin: 1.5rem 0;
      position: relative;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 45%;
        height: 1px;
        background: rgba(255, 255, 255, 0.1);
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
      }
    }
  }

  .file-upload {
    .upload-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      color: white;
      border-radius: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .file-info {
      display: block;
      margin-top: 0.5rem;
      color: #4facfe;
      font-size: 0.9rem;
    }
  }

  .description-section,
  .justification-section {
    margin-top: 1.5rem;

    textarea {
      width: 100%;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.75rem;
      color: #ffffff;
      font-family: inherit;
      resize: vertical;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: #4facfe;
      }

      &::placeholder {
        color: #888;
      }
    }
  }

  .tech-stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;

    .tech-item {
      h4 {
        color: #4facfe;
        font-size: 1rem;
        margin-bottom: 0.75rem;
        margin-top: 0;
      }
    }
  }

  .troubleshooting-section {
    .troubleshoot-item {
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }

      h4 {
        color: #4facfe;
        font-size: 1.1rem;
        margin-bottom: 1rem;
        margin-top: 0;
      }

      textarea {
        width: 100%;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.75rem;
        color: #ffffff;
        font-family: inherit;
        resize: vertical;
        transition: border-color 0.3s ease;

        &:focus {
          outline: none;
          border-color: #4facfe;
        }

        &::placeholder {
          color: #888;
        }
      }
    }
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    gap: 1rem;
  }

  @media (max-width: 1024px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .scenario-card {
      position: static;
    }
  }

  @media (max-width: 768px) {
    .assessment-main {
      padding-top: 6rem;
    }

    .assessment-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .timer-display {
      align-self: stretch;
      text-align: center;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .navigation-buttons {
      flex-direction: column;
    }

    .tech-stack-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
