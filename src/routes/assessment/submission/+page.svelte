<!-- src/routes/assessment/submission/+page.svelte -->
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Header from "$components/layout/Header.svelte";
  import Footer from "$components/layout/Footer.svelte";
  import Button from "$components/ui/Button.svelte";
  import Card from "$components/ui/Card.svelte";
  import Input from "$components/ui/Input.svelte";

  let mounted = false;
  let timeRemaining = "48:00:00";
  let overallProgress = 0;
  let sectionProgress = {
    clientAcquisition: { completed: false, progress: 0 },
    technicalSolution: { completed: false, progress: 0 },
    promptEngineering: { completed: false, progress: 0 },
    implementation: { completed: false, progress: 0 },
  };

  let candidateInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    additionalNotes: "",
    consent: false,
  };

  let submissionComplete = false;
  let submissionId = "";

  onMount(() => {
    mounted = true;
    loadProgress();
    startTimer();
    loadCandidateInfo();
  });

  function loadProgress() {
    const savedProgress = localStorage.getItem("assessment_progress");
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      sectionProgress = progressData.sections || sectionProgress;

      const completedSections = Object.values(sectionProgress).filter(
        (s) => s.completed
      ).length;
      overallProgress = Math.round((completedSections / 4) * 100);
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

  function loadCandidateInfo() {
    const saved = localStorage.getItem("assessment_candidate_info");
    if (saved) {
      candidateInfo = { ...candidateInfo, ...JSON.parse(saved) };
    }
  }

  function saveCandidateInfo() {
    localStorage.setItem(
      "assessment_candidate_info",
      JSON.stringify(candidateInfo)
    );
  }

  function handleInput(field) {
    return (event) => {
      candidateInfo[field] = event.target.value;
      saveCandidateInfo();
    };
  }

  function handleCheckbox(field) {
    return (event) => {
      candidateInfo[field] = event.target.checked;
      saveCandidateInfo();
    };
  }

  function goToSection(section) {
    goto(`/assessment/${section}`);
  }

  function goHome() {
    window.open("/", "_blank");
  }

  function goCareers() {
    // Create careers page if it doesn't exist
    window.open("/careers", "_blank");
  }

  async function submitAssessment() {
    if (!candidateInfo.consent) {
      alert("Please confirm your consent to proceed with the submission.");
      return;
    }

    if (
      !candidateInfo.firstName ||
      !candidateInfo.lastName ||
      !candidateInfo.email
    ) {
      alert("Please fill in all required fields (Name and Email).");
      return;
    }

    // Collect all assessment data
    const submissionData = {
      candidate: candidateInfo,
      sections: {
        clientAcquisition: JSON.parse(
          localStorage.getItem("assessment_client_acquisition") || "{}"
        ),
        technicalSolution: JSON.parse(
          localStorage.getItem("assessment_technical_solution") || "{}"
        ),
        promptEngineering: JSON.parse(
          localStorage.getItem("assessment_prompt_engineering") || "{}"
        ),
        implementation: JSON.parse(
          localStorage.getItem("assessment_implementation") || "{}"
        ),
      },
      progress: sectionProgress,
      startTime: localStorage.getItem("assessment_start_time"),
      submissionTime: new Date().toISOString(),
      timeRemaining: timeRemaining,
    };

    try {
      // In a real implementation, this would be an API call
      // const response = await fetch('/api/assessment/submit', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submissionData)
      // });

      // For now, simulate successful submission
      submissionId = "ASM-" + Date.now().toString(36).toUpperCase();
      submissionComplete = true;

      // Store submission confirmation
      localStorage.setItem(
        "assessment_submission",
        JSON.stringify({
          submissionId,
          submissionTime: submissionData.submissionTime,
          candidate: candidateInfo,
        })
      );

      console.log("Assessment submitted successfully:", submissionData);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your assessment. Please try again.");
    }
  }

  function previousSection() {
    goto("/assessment/implementation");
  }

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
</script>

<svelte:head>
  <title>Final Submission - Assessment - GY6AI</title>
  <meta
    name="description"
    content="Final submission and review for the Client Solutions Specialist assessment."
  />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Background Elements -->
<div class="gradient-bg" />

<!-- Layout -->
<Header />

<main class="assessment-main">
  <div class="container">
    {#if !submissionComplete}
      <div class="assessment-header">
        <div class="section-info">
          <h1 class="section-title">Final Submission & Review</h1>
          <div class="progress-bar">
            <div class="progress-fill" style="width: {overallProgress}%" />
          </div>
          <span class="progress-text">Overall Progress: {overallProgress}%</span
          >
        </div>

        <div class="timer-display">
          <span class="timer-label">Time Remaining:</span>
          <span class="timer-value">{timeRemaining}</span>
        </div>
      </div>

      <div class="content-grid">
        <div class="review-column">
          <Card class="review-card">
            <h2>Assessment Review</h2>
            <p class="review-description">
              Review your progress across all assessment sections before final
              submission.
            </p>

            <div class="sections-review">
              <div
                class="section-item"
                class:completed={sectionProgress.clientAcquisition.completed}
              >
                <div
                  class="section-header"
                  on:click={() => goToSection("client-acquisition")}
                >
                  <span class="section-icon"
                    >{getSectionStatusIcon(
                      sectionProgress.clientAcquisition
                    )}</span
                  >
                  <div class="section-info">
                    <h4>Section I: Client Acquisition</h4>
                    <span class="section-status"
                      >{getSectionStatusText(
                        sectionProgress.clientAcquisition
                      )}</span
                    >
                  </div>
                  <Button variant="outline" size="small">Review</Button>
                </div>
              </div>

              <div
                class="section-item"
                class:completed={sectionProgress.technicalSolution.completed}
              >
                <div
                  class="section-header"
                  on:click={() => goToSection("technical-solution")}
                >
                  <span class="section-icon"
                    >{getSectionStatusIcon(
                      sectionProgress.technicalSolution
                    )}</span
                  >
                  <div class="section-info">
                    <h4>Section II: Technical Solution</h4>
                    <span class="section-status"
                      >{getSectionStatusText(
                        sectionProgress.technicalSolution
                      )}</span
                    >
                  </div>
                  <Button variant="outline" size="small">Review</Button>
                </div>
              </div>

              <div
                class="section-item"
                class:completed={sectionProgress.promptEngineering.completed}
              >
                <div
                  class="section-header"
                  on:click={() => goToSection("prompt-engineering")}
                >
                  <span class="section-icon"
                    >{getSectionStatusIcon(
                      sectionProgress.promptEngineering
                    )}</span
                  >
                  <div class="section-info">
                    <h4>Section III: Prompt Engineering</h4>
                    <span class="section-status"
                      >{getSectionStatusText(
                        sectionProgress.promptEngineering
                      )}</span
                    >
                  </div>
                  <Button variant="outline" size="small">Review</Button>
                </div>
              </div>

              <div
                class="section-item"
                class:completed={sectionProgress.implementation.completed}
              >
                <div
                  class="section-header"
                  on:click={() => goToSection("implementation")}
                >
                  <span class="section-icon"
                    >{getSectionStatusIcon(
                      sectionProgress.implementation
                    )}</span
                  >
                  <div class="section-info">
                    <h4>Section IV: Implementation</h4>
                    <span class="section-status"
                      >{getSectionStatusText(
                        sectionProgress.implementation
                      )}</span
                    >
                  </div>
                  <Button variant="outline" size="small">Review</Button>
                </div>
              </div>
            </div>

            <div class="completion-status">
              <h3>Completion Status</h3>
              <div class="status-grid">
                <div class="status-item">
                  <span class="status-label">Sections Completed:</span>
                  <span class="status-value">
                    {Object.values(sectionProgress).filter((s) => s.completed)
                      .length} / 4
                  </span>
                </div>
                <div class="status-item">
                  <span class="status-label">Overall Progress:</span>
                  <span class="status-value">{overallProgress}%</span>
                </div>
                <div class="status-item">
                  <span class="status-label">Time Used:</span>
                  <span class="status-value">
                    {Math.floor(
                      (48 * 60 * 60 * 1000 -
                        (new Date(
                          new Date().getTime() +
                            timeRemaining
                              .split(":")
                              .reduce((acc, time) => 60 * acc + +time) *
                              1000
                        ) -
                          new Date())) /
                        (1000 * 60 * 60)
                    )}h
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div class="form-column">
          <Card class="candidate-card">
            <h2>Candidate Information</h2>
            <p class="card-description">
              Please provide your contact information for our records and
              follow-up communication.
            </p>

            <div class="candidate-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <Input
                    id="firstName"
                    bind:value={candidateInfo.firstName}
                    on:input={handleInput("firstName")}
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <Input
                    id="lastName"
                    bind:value={candidateInfo.lastName}
                    on:input={handleInput("lastName")}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address *</label>
                <Input
                  id="email"
                  type="email"
                  bind:value={candidateInfo.email}
                  on:input={handleInput("email")}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <Input
                  id="phone"
                  type="tel"
                  bind:value={candidateInfo.phone}
                  on:input={handleInput("phone")}
                  placeholder="Enter your phone number"
                />
              </div>

              <div class="form-group">
                <label for="linkedin">LinkedIn Profile</label>
                <Input
                  id="linkedin"
                  type="url"
                  bind:value={candidateInfo.linkedin}
                  on:input={handleInput("linkedin")}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div class="form-group">
                <label for="portfolio">Portfolio/Website</label>
                <Input
                  id="portfolio"
                  type="url"
                  bind:value={candidateInfo.portfolio}
                  on:input={handleInput("portfolio")}
                  placeholder="https://yourportfolio.com"
                />
              </div>

              <div class="form-group">
                <label for="notes">Additional Notes</label>
                <textarea
                  id="notes"
                  bind:value={candidateInfo.additionalNotes}
                  on:input={handleInput("additionalNotes")}
                  placeholder="Any additional information you'd like to share..."
                  rows="4"
                />
              </div>

              <div class="consent-section">
                <label class="consent-checkbox">
                  <input
                    type="checkbox"
                    bind:checked={candidateInfo.consent}
                    on:change={handleCheckbox("consent")}
                  />
                  <span class="checkmark" />
                  <span class="consent-text">
                    I confirm that all information provided is accurate and that
                    I completed this assessment independently using my own
                    knowledge and skills. I consent to the processing of my
                    personal data for evaluation purposes.
                  </span>
                </label>
              </div>
            </div>
          </Card>

          <div class="submission-actions">
            <div class="action-buttons">
              <Button variant="outline" on:click={previousSection}>
                ← Previous: Implementation
              </Button>
              <Button
                variant="primary"
                size="large"
                on:click={submitAssessment}
                disabled={!candidateInfo.consent}
              >
                Submit Assessment
              </Button>
            </div>

            <div class="submission-note">
              <p>
                <strong>Important:</strong> Once submitted, you will not be able
                to make changes to your assessment. Please ensure all sections are
                complete and information is accurate.
              </p>
            </div>
          </div>
        </div>
      </div>
    {:else}
      <!-- Submission Confirmation -->
      <div class="submission-success">
        <Card class="success-card">
          <div class="success-content">
            <div class="success-icon">🎉</div>
            <h1>Assessment Submitted Successfully!</h1>
            <p class="success-message">
              Thank you for completing the Client Solutions Specialist
              assessment. Your submission has been received and will be reviewed
              by our team.
            </p>

            <div class="submission-details">
              <div class="detail-item">
                <strong>Submission ID:</strong>
                {submissionId}
              </div>
              <div class="detail-item">
                <strong>Submitted:</strong>
                {new Date().toLocaleString()}
              </div>
              <div class="detail-item">
                <strong>Candidate:</strong>
                {candidateInfo.firstName}
                {candidateInfo.lastName}
              </div>
            </div>

            <div class="next-steps">
              <h3>What Happens Next?</h3>
              <ul>
                <li>
                  Our team will review your assessment within 5-7 business days
                </li>
                <li>We'll contact you via email with the next steps</li>
                <li>
                  Keep an eye on your inbox for updates on your application
                </li>
              </ul>
            </div>

            <div class="action-links">
              <Button variant="primary" on:click={goHome}>
                Visit GY6AI Home
              </Button>
              <Button variant="outline" on:click={goCareers}>
                View Other Careers
              </Button>
            </div>
          </div>
        </Card>
      </div>
    {/if}
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
    grid-template-columns: 400px 1fr;
    gap: 2rem;
  }

  .review-card {
    position: sticky;
    top: 2rem;
    height: fit-content;

    h2 {
      color: #4facfe;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .review-description {
      color: #b0b0b0;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
  }

  .sections-review {
    margin-bottom: 2rem;

    .section-item {
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.75rem;
      margin-bottom: 1rem;
      transition: border-color 0.3s ease;

      &:hover {
        border-color: rgba(79, 172, 254, 0.5);
      }

      &.completed {
        border-color: rgba(34, 197, 94, 0.5);
        background: rgba(34, 197, 94, 0.05);
      }

      .section-header {
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        .section-icon {
          font-size: 1.5rem;
        }

        .section-info {
          flex: 1;

          h4 {
            color: #ffffff;
            margin-bottom: 0.25rem;
            font-size: 1rem;
          }

          .section-status {
            color: #b0b0b0;
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  .completion-status {
    background: rgba(79, 172, 254, 0.1);
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-left: 4px solid #4facfe;

    h3 {
      color: #4facfe;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .status-grid {
      display: grid;
      gap: 0.75rem;

      .status-item {
        display: flex;
        justify-content: space-between;

        .status-label {
          color: #b0b0b0;
        }

        .status-value {
          color: #ffffff;
          font-weight: 600;
        }
      }
    }
  }

  .candidate-card {
    h2 {
      color: #ffffff;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .card-description {
      color: #b0b0b0;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
  }

  .candidate-form {
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        color: #e0e0e0;
        font-weight: 500;
        margin-bottom: 0.5rem;
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

  .consent-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    .consent-checkbox {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      cursor: pointer;

      input[type="checkbox"] {
        display: none;
      }

      .checkmark {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 4px;
        position: relative;
        transition: all 0.3s ease;
        flex-shrink: 0;
        margin-top: 2px;

        &::after {
          content: "";
          position: absolute;
          left: 6px;
          top: 2px;
          width: 6px;
          height: 10px;
          border: solid #ffffff;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
      }

      input[type="checkbox"]:checked + .checkmark {
        background: #4facfe;
        border-color: #4facfe;

        &::after {
          opacity: 1;
        }
      }

      .consent-text {
        color: #b0b0b0;
        line-height: 1.6;
        font-size: 0.95rem;
      }
    }
  }

  .submission-actions {
    margin-top: 2rem;

    .action-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .submission-note {
      background: rgba(245, 158, 11, 0.1);
      border: 1px solid rgba(245, 158, 11, 0.3);
      border-radius: 0.75rem;
      padding: 1rem;

      p {
        color: #fbbf24;
        font-size: 0.9rem;
        line-height: 1.6;
        margin: 0;

        strong {
          color: #f59e0b;
        }
      }
    }
  }

  .submission-success {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;

    .success-card {
      max-width: 600px;
      text-align: center;
    }

    .success-content {
      padding: 2rem;

      .success-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
      }

      h1 {
        color: #22c55e;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .success-message {
        color: #b0b0b0;
        line-height: 1.6;
        margin-bottom: 2rem;
        font-size: 1.1rem;
      }
    }

    .submission-details {
      background: rgba(34, 197, 94, 0.1);
      border: 1px solid rgba(34, 197, 94, 0.3);
      border-radius: 0.75rem;
      padding: 1.5rem;
      margin-bottom: 2rem;
      text-align: left;

      .detail-item {
        margin-bottom: 0.75rem;
        color: #e0e0e0;

        &:last-child {
          margin-bottom: 0;
        }

        strong {
          color: #22c55e;
          margin-right: 0.5rem;
        }
      }
    }

    .next-steps {
      text-align: left;
      margin-bottom: 2rem;

      h3 {
        color: #ffffff;
        margin-bottom: 1rem;
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

    .action-links {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
  }

  @media (max-width: 1024px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .review-card {
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

    .candidate-form .form-row {
      grid-template-columns: 1fr;
    }

    .action-buttons {
      flex-direction: column;
    }

    .success-card .action-links {
      flex-direction: column;
    }

    .section-item .section-header {
      flex-wrap: wrap;
      gap: 0.75rem;
    }
  }
</style>
