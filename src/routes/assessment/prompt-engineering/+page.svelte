<!-- src/routes/assessment/prompt-engineering/+page.svelte -->
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
    presencePenaltyExplanation: "",
  };

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
      progress = progressData.sections?.promptEngineering?.progress || 0;
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
    const saved = localStorage.getItem("assessment_prompt_engineering");
    if (saved) {
      formData = { ...formData, ...JSON.parse(saved) };
      updateProgress();
    }
  }

  function saveData() {
    localStorage.setItem(
      "assessment_prompt_engineering",
      JSON.stringify(formData)
    );
    updateProgress();
  }

  function updateProgress() {
    let completed = 0;
    const total = 11; // Total required fields

    if (formData.coreSystemPrompt.trim()) completed++;
    if (formData.promptStrategy.trim()) completed++;
    if (formData.temperatureHigh.trim()) completed++;
    if (formData.temperatureLow.trim()) completed++;
    if (formData.temperatureExplanation.trim()) completed++;
    if (formData.topPStrict.trim()) completed++;
    if (formData.topPGeneral.trim()) completed++;
    if (formData.topPExplanation.trim()) completed++;
    if (formData.frequencyPenaltyValue.trim()) completed++;
    if (formData.frequencyPenaltyExplanation.trim()) completed++;
    if (formData.presencePenaltyValue.trim()) completed++;

    progress = Math.round((completed / total) * 100);

    // Update global progress
    const savedProgress = localStorage.getItem("assessment_progress");
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      progressData.sections.promptEngineering.progress = progress;
      progressData.sections.promptEngineering.completed = progress === 100;
      localStorage.setItem("assessment_progress", JSON.stringify(progressData));
    }
  }

  function handleInput(field) {
    return (event) => {
      formData[field] = event.target.value;
      saveData();
    };
  }

  function nextSection() {
    goto("/assessment/implementation");
  }

  function previousSection() {
    goto("/assessment/technical-solution");
  }
</script>

<svelte:head>
  <title>Prompt Engineering - Assessment - GY6AI</title>
  <meta
    name="description"
    content="Prompt engineering and AI configuration assessment section."
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
          Section III: Prompt Engineering & Custom Configuration
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
            A new client, <strong>"MediBot Health,"</strong> is developing an AI-powered
            symptom checker. They need help ensuring their AI assistant provides
            accurate, consistent, and non-hallucinatory responses to user queries
            about health symptoms. They also want to fine-tune the AI's "personality"
            for empathy and clarity.
          </p>

          <div class="requirements-box">
            <h3>Required Deliverables:</h3>
            <ul>
              <li>Complete core system prompt for medical AI assistant</li>
              <li>Prompt engineering strategy explanation (max 200 words)</li>
              <li>Parameter configuration examples for different scenarios</li>
              <li>Justification for each parameter setting</li>
            </ul>
          </div>

          <div class="focus-areas">
            <h3>Focus Areas:</h3>
            <ul>
              <li>Hallucination reduction</li>
              <li>Response consistency</li>
              <li>Medical accuracy</li>
              <li>Empathetic communication</li>
              <li>Clear, accessible language</li>
            </ul>
          </div>
        </Card>
      </div>

      <div class="form-column">
        <Card class="deliverable-card">
          <h2>1. Core System Prompt Development</h2>
          <p class="instruction">
            Design a core system prompt for the MediBot Health AI assistant that
            minimizes hallucinations and provides consistent, medically
            relevant, and clear information regarding common cold symptoms.
          </p>

          <div class="prompt-section">
            <h4>Core System Prompt</h4>
            <textarea
              bind:value={formData.coreSystemPrompt}
              on:input={handleInput("coreSystemPrompt")}
              placeholder="Write your complete system prompt here. Consider including: role definition, behavior guidelines, accuracy requirements, response format, safety constraints, and empathy instructions..."
              rows="12"
              class="large-textarea"
            />
          </div>

          <div class="strategy-section">
            <h4>Prompt Engineering Strategy (Max 200 words)</h4>
            <textarea
              bind:value={formData.promptStrategy}
              on:input={handleInput("promptStrategy")}
              placeholder="Explain your prompt engineering strategy, highlighting how it addresses hallucination reduction and consistency. Include specific techniques, constraints, and design decisions..."
              rows="5"
            />
            <div class="word-limit">Max 200 words</div>
          </div>
        </Card>

        <Card class="deliverable-card">
          <h2>2. Parameter Configuration for Different Scenarios</h2>
          <p class="instruction">
            Provide examples of how you would adjust prompt parameters to
            achieve specific outcomes, explaining the impact of each adjustment.
          </p>

          <div class="parameters-grid">
            <div class="parameter-section">
              <h3>Temperature Configuration</h3>
              <p class="parameter-question">
                How would you set the temperature for different response
                requirements?
              </p>

              <div class="parameter-inputs">
                <div class="input-group">
                  <label>High Factual Accuracy Value:</label>
                  <Input
                    bind:value={formData.temperatureHigh}
                    on:input={handleInput("temperatureHigh")}
                    placeholder="e.g., 0.1"
                  />
                </div>

                <div class="input-group">
                  <label>Empathetic/Conversational Value:</label>
                  <Input
                    bind:value={formData.temperatureLow}
                    on:input={handleInput("temperatureLow")}
                    placeholder="e.g., 0.7"
                  />
                </div>
              </div>

              <div class="explanation-section">
                <h5>Temperature Explanation & Impact</h5>
                <textarea
                  bind:value={formData.temperatureExplanation}
                  on:input={handleInput("temperatureExplanation")}
                  placeholder="Explain why you chose these values and their expected effect on the AI's response for the MediBot Health scenario..."
                  rows="4"
                />
              </div>
            </div>

            <div class="parameter-section">
              <h3>Top P (Nucleus Sampling)</h3>
              <p class="parameter-question">
                How does top_p influence response diversity and how would you
                configure it?
              </p>

              <div class="parameter-inputs">
                <div class="input-group">
                  <label>Strict Medical Advice Value:</label>
                  <Input
                    bind:value={formData.topPStrict}
                    on:input={handleInput("topPStrict")}
                    placeholder="e.g., 0.3"
                  />
                </div>

                <div class="input-group">
                  <label>General Health Tips Value:</label>
                  <Input
                    bind:value={formData.topPGeneral}
                    on:input={handleInput("topPGeneral")}
                    placeholder="e.g., 0.8"
                  />
                </div>
              </div>

              <div class="explanation-section">
                <h5>Top P Explanation & Impact</h5>
                <textarea
                  bind:value={formData.topPExplanation}
                  on:input={handleInput("topPExplanation")}
                  placeholder="Explain how top_p influences response diversity and why these values are appropriate for different medical contexts..."
                  rows="4"
                />
              </div>
            </div>

            <div class="parameter-section">
              <h3>Frequency Penalty</h3>
              <p class="parameter-question">
                How would you use frequency penalty to discourage repetitive
                phrasing or common medical jargon?
              </p>

              <div class="parameter-inputs">
                <div class="input-group">
                  <label>Recommended Value:</label>
                  <Input
                    bind:value={formData.frequencyPenaltyValue}
                    on:input={handleInput("frequencyPenaltyValue")}
                    placeholder="e.g., 0.2"
                  />
                </div>
              </div>

              <div class="explanation-section">
                <h5>Frequency Penalty Explanation & Impact</h5>
                <textarea
                  bind:value={formData.frequencyPenaltyExplanation}
                  on:input={handleInput("frequencyPenaltyExplanation")}
                  placeholder="Explain how frequency penalty would help make the AI's medical responses sound more natural and less repetitive..."
                  rows="4"
                />
              </div>
            </div>

            <div class="parameter-section">
              <h3>Presence Penalty</h3>
              <p class="parameter-question">
                How would you use presence penalty to encourage new concepts or
                perspectives?
              </p>

              <div class="parameter-inputs">
                <div class="input-group">
                  <label>Recommended Value:</label>
                  <Input
                    bind:value={formData.presencePenaltyValue}
                    on:input={handleInput("presencePenaltyValue")}
                    placeholder="e.g., 0.1"
                  />
                </div>
              </div>

              <div class="explanation-section">
                <h5>Presence Penalty Explanation & Impact</h5>
                <textarea
                  bind:value={formData.presencePenaltyExplanation}
                  on:input={handleInput("presencePenaltyExplanation")}
                  placeholder="Explain how presence penalty would encourage the AI to introduce new concepts or perspectives relevant to health queries..."
                  rows="4"
                />
              </div>
            </div>
          </div>
        </Card>

        <div class="navigation-buttons">
          <Button variant="outline" on:click={previousSection}>
            ← Previous: Technical Solution
          </Button>
          <Button variant="primary" on:click={nextSection}>
            Next: Implementation →
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
  .focus-areas {
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
  }

  .prompt-section,
  .strategy-section {
    margin-bottom: 2rem;

    textarea {
      width: 100%;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.75rem;
      color: #ffffff;
      font-family: "Courier New", monospace;
      font-size: 0.9rem;
      resize: vertical;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: #4facfe;
      }

      &::placeholder {
        color: #888;
      }

      &.large-textarea {
        min-height: 300px;
      }
    }

    .word-limit {
      margin-top: 0.5rem;
      color: #888;
      font-size: 0.8rem;
      text-align: right;
    }
  }

  .parameters-grid {
    display: grid;
    gap: 2rem;
  }

  .parameter-section {
    background: rgba(255, 255, 255, 0.03);
    padding: 2rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.1);

    h3 {
      color: #4facfe;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .parameter-question {
      color: #e0e0e0;
      font-style: italic;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    h5 {
      color: #ffffff;
      font-size: 1rem;
      margin-bottom: 0.75rem;
      margin-top: 1.5rem;
    }
  }

  .parameter-inputs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;

    .input-group {
      label {
        display: block;
        color: #b0b0b0;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
    }
  }

  .explanation-section {
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

    .parameter-section {
      padding: 1.5rem;
    }

    .parameter-inputs {
      grid-template-columns: 1fr;
    }
  }
</style>
