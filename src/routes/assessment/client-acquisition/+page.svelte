<!-- src/routes/assessment/client-acquisition/+page.svelte -->
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Header from "$components/layout/Header.svelte";
  import Footer from "$components/layout/Footer.svelte";
  import Button from "$components/ui/Button.svelte";
  import Card from "$components/ui/Card.svelte";
  import Input from "$components/ui/Input.svelte";
  import AutoSave from "$components/ui/AutoSave.svelte";
  import { assessmentProgress, assessmentActions } from '$stores/assessment.js';

  let mounted = false;
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
    videoUrl: "",
  };

  let wordCount = 0;
  let videoUploaded = false;

  onMount(async () => {
    mounted = true;
    await loadProgress();
    startTimer();
  });

  async function loadProgress() {
    const progressData = await assessmentActions.loadProgress();
    if (progressData) {
      progress = progressData.sections?.['client-acquisition']?.completed ? 100 : 
                 progressData.sections?.['client-acquisition']?.hasProgress ? 50 : 0;
    }
    
    // Load saved form data
    const savedData = await assessmentActions.getSectionData('client-acquisition');
    if (savedData) {
      formData = { ...formData, ...savedData };
      updateWordCount();
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


  async function saveData() {
    // Save to IndexedDB using the new assessment storage
    await assessmentActions.saveProgress('client-acquisition', formData);
    updateProgress();
  }

  function updateWordCount() {
    wordCount = formData.solutionSummary
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  }

  function updateProgress() {
    let completed = 0;
    const total = 8; // Total required fields

    if (formData.solutionSummary.trim()) completed++;
    if (formData.pitchScript.trim()) completed++;
    if (formData.painPoint1.trim()) completed++;
    if (formData.painPoint1Solution.trim()) completed++;
    if (formData.painPoint2.trim()) completed++;
    if (formData.painPoint2Solution.trim()) completed++;
    if (formData.painPoint3.trim()) completed++;
    if (formData.painPoint3Solution.trim()) completed++;

    progress = Math.round((completed / total) * 100);
    
    // The progress is automatically updated when saveData is called with IndexedDB
  }

  function handleInput(field) {
    return (event) => {
      formData[field] = event.target.value;
      if (field === "solutionSummary") {
        updateWordCount();
      }
      saveData();
    };
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      formData.videoFile = file;
      videoUploaded = true;
      saveData();
    }
  }

  async function nextSection() {
    await saveData();
    goto("/assessment/technical-solution");
  }

  function previousSection() {
    goto("/assessment/overview");
  }

  async function completeSection() {
    if (progress === 100) {
      await assessmentActions.completeSection('client-acquisition', formData);
      goto("/assessment/technical-solution");
    }
  }

  async function saveAndContinue() {
    await saveData();
    // Optional: show a success message
  }
</script>

<svelte:head>
  <title>Client Acquisition & Problem-Solving - Assessment - GY6AI</title>
  <meta
    name="description"
    content="Client acquisition and problem-solving assessment section."
  />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Background Elements -->
<div class="gradient-bg" />

<!-- Layout -->
<Header />

<main class="assessment-main">
  <!-- Auto-save functionality -->
  <AutoSave sectionId="client-acquisition" data={formData} interval={30000} showStatus={true} />
  
  <div class="container">
    <div class="assessment-header">
      <div class="section-info">
        <h1 class="section-title">
          Section I: Client Acquisition & Problem-Solving
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
            You are a newly onboarded Client Solutions Specialist at GY6AI, a
            company specializing in providing tailored IT infrastructure and
            software solutions. Your first critical task is to engage with a
            potential new client, <strong>"Global Connect Corp."</strong> (a mock
            client), which is experiencing significant issues with its legacy data
            processing system and requires a modern, scalable, and secure solution.
          </p>

          <div class="requirements-box">
            <h3>Required Deliverables:</h3>
            <ul>
              <li>
                Brief written summary (max 500 words) of your proposed solution
              </li>
              <li>
                Short video recording or detailed script of your mock pitch
              </li>
              <li>
                Identify and articulate at least three critical pain points
              </li>
              <li>
                Explain how your solution specifically alleviates each pain
                point
              </li>
            </ul>
          </div>
        </Card>
      </div>

      <div class="form-column">
        <Card class="deliverable-card">
          <h2>1. Solution Summary</h2>
          <p class="instruction">
            Prepare a concise written summary (max 500 words) outlining how
            GY6AI can address Global Connect Corp.'s data processing challenges.
          </p>

          <div class="textarea-container">
            <textarea
              bind:value={formData.solutionSummary}
              on:input={handleInput("solutionSummary")}
              placeholder="Describe your proposed solution for Global Connect Corp., highlighting key benefits and how it addresses their legacy system issues..."
              rows="8"
            />
            <div class="word-counter">
              <span
                class="word-count"
                class:warning={wordCount > 450}
                class:error={wordCount > 500}
              >
                {wordCount}/500 words
              </span>
            </div>
          </div>
        </Card>

        <Card class="deliverable-card">
          <h2>2. Mock Pitch</h2>
          <p class="instruction">
            Create either a video recording (max 10 minutes) or a detailed
            script demonstrating your communication style and ability to
            articulate value to a non-technical executive.
          </p>

          <div class="pitch-options">
            <div class="option-group">
              <h4>Option A: Video Upload</h4>
              <div class="file-upload">
                <input
                  type="file"
                  accept="video/*"
                  on:change={handleFileUpload}
                  id="video-upload"
                  hidden
                />
                <label for="video-upload" class="upload-button">
                  {videoUploaded ? "Video Uploaded ✓" : "Upload Video"}
                </label>
                {#if videoUploaded}
                  <span class="file-info">File: {formData.videoFile?.name}</span
                  >
                {/if}
              </div>
            </div>

            <div class="option-separator">OR</div>

            <div class="option-group">
              <h4>Option B: Detailed Script</h4>
              <textarea
                bind:value={formData.pitchScript}
                on:input={handleInput("pitchScript")}
                placeholder="Write your detailed pitch script here. Include your opening, key points, value proposition, and closing..."
                rows="6"
              />
            </div>

            <div class="option-group">
              <h4>Option C: Video URL</h4>
              <Input
                type="url"
                bind:value={formData.videoUrl}
                on:input={handleInput("videoUrl")}
                placeholder="https://youtu.be/example or https://vimeo.com/example"
              />
            </div>
          </div>
        </Card>

        <Card class="deliverable-card">
          <h2>3. Critical Pain Points Analysis</h2>
          <p class="instruction">
            Identify and articulate at least three critical pain points Global
            Connect Corp. is likely facing with their legacy system and explain
            how your solution alleviates each.
          </p>

          <div class="pain-points">
            <div class="pain-point">
              <h4>Pain Point #1</h4>
              <Input
                bind:value={formData.painPoint1}
                on:input={handleInput("painPoint1")}
                placeholder="Describe the first critical pain point..."
              />
              <h5>How Your Solution Addresses This:</h5>
              <textarea
                bind:value={formData.painPoint1Solution}
                on:input={handleInput("painPoint1Solution")}
                placeholder="Explain how your proposed solution specifically alleviates this pain point..."
                rows="3"
              />
            </div>

            <div class="pain-point">
              <h4>Pain Point #2</h4>
              <Input
                bind:value={formData.painPoint2}
                on:input={handleInput("painPoint2")}
                placeholder="Describe the second critical pain point..."
              />
              <h5>How Your Solution Addresses This:</h5>
              <textarea
                bind:value={formData.painPoint2Solution}
                on:input={handleInput("painPoint2Solution")}
                placeholder="Explain how your proposed solution specifically alleviates this pain point..."
                rows="3"
              />
            </div>

            <div class="pain-point">
              <h4>Pain Point #3</h4>
              <Input
                bind:value={formData.painPoint3}
                on:input={handleInput("painPoint3")}
                placeholder="Describe the third critical pain point..."
              />
              <h5>How Your Solution Addresses This:</h5>
              <textarea
                bind:value={formData.painPoint3Solution}
                on:input={handleInput("painPoint3Solution")}
                placeholder="Explain how your proposed solution specifically alleviates this pain point..."
                rows="3"
              />
            </div>
          </div>
        </Card>

        <div class="action-buttons">
          <div class="save-section">
            <Button variant="ghost" on:click={saveAndContinue}>
              💾 Save Progress
            </Button>
            <p class="auto-save-note">Auto-saves every 30 seconds</p>
          </div>
          
          <div class="navigation-buttons">
            <Button variant="outline" on:click={previousSection}>
              ← Previous: Overview
            </Button>
            {#if progress === 100}
              <Button variant="primary" on:click={completeSection}>
                ✓ Complete Section & Continue →
              </Button>
            {:else}
              <Button variant="secondary" on:click={nextSection}>
                Next: Technical Solution →
              </Button>
            {/if}
          </div>
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

  .requirements-box {
    background: rgba(79, 172, 254, 0.1);
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-left: 4px solid #4facfe;

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
  }

  .textarea-container {
    position: relative;

    textarea {
      width: 100%;
      min-height: 200px;
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

    .word-counter {
      position: absolute;
      bottom: 10px;
      right: 15px;
      background: rgba(0, 0, 0, 0.7);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.8rem;

      .word-count {
        color: #4facfe;

        &.warning {
          color: #f5a623;
        }

        &.error {
          color: #f56565;
        }
      }
    }
  }

  .pitch-options {
    .option-group {
      margin-bottom: 2rem;

      h4 {
        color: #ffffff;
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }

      textarea {
        width: 100%;
        min-height: 150px;
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

  .pain-points {
    .pain-point {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.03);
      border-radius: 0.75rem;
      border: 1px solid rgba(255, 255, 255, 0.1);

      h4 {
        color: #4facfe;
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }

      h5 {
        color: #ffffff;
        margin-top: 1rem;
        margin-bottom: 0.75rem;
        font-size: 1rem;
      }

      textarea {
        width: 100%;
        padding: 0.75rem;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.5rem;
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

  .action-buttons {
    margin-top: 3rem;
    
    .save-section {
      text-align: center;
      margin-bottom: 2rem;
      
      .auto-save-note {
        color: #888;
        font-size: 0.85rem;
        margin-top: 0.5rem;
        margin-bottom: 0;
      }
    }
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
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

    .pain-points .pain-point {
      padding: 1rem;
    }
  }
</style>
