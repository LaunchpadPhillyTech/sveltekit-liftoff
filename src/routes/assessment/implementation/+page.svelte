<!-- src/routes/assessment/implementation/+page.svelte -->
<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Header from "$components/layout/Header.svelte";
  import Footer from "$components/layout/Footer.svelte";
  import Button from "$components/ui/Button.svelte";
  import Card from "$components/ui/Card.svelte";
  import Input from "$components/ui/Input.svelte";

  let progress = 0;
  let timeRemaining = "48:00:00";

  let formData = {
    fastApiCode: "",
    fastApiExplanation: "",
    reactCode: "",
    reactExplanation: "",
    integrationNotes: "",
    codeFiles: null,
    githubRepoUrl: "",
    liveDemo: "",
    testingApproach: "",
    deploymentNotes: "",
  };

  let codeFilesUploaded = false;

  onMount(() => {
    loadProgress();
    startTimer();
    loadSavedData();
  });

  function loadProgress() {
    const savedProgress = localStorage.getItem("assessment_progress");
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      progress = progressData.sections?.implementation?.progress || 0;
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
    const saved = localStorage.getItem("assessment_implementation");
    if (saved) {
      formData = { ...formData, ...JSON.parse(saved) };
      updateProgress();
    }
  }

  function saveData() {
    localStorage.setItem("assessment_implementation", JSON.stringify(formData));
    updateProgress();
  }

  function updateProgress() {
    let completed = 0;
    const total = 7; // Total required fields

    if (formData.fastApiCode.trim()) completed++;
    if (formData.fastApiExplanation.trim()) completed++;
    if (formData.reactCode.trim()) completed++;
    if (formData.reactExplanation.trim()) completed++;
    if (formData.integrationNotes.trim()) completed++;
    if (formData.testingApproach.trim()) completed++;
    if (formData.deploymentNotes.trim()) completed++;

    progress = Math.round((completed / total) * 100);

    // Update global progress
    const savedProgress = localStorage.getItem("assessment_progress");
    if (savedProgress) {
      const progressData = JSON.parse(savedProgress);
      progressData.sections.implementation.progress = progress;
      progressData.sections.implementation.completed = progress === 100;
      localStorage.setItem("assessment_progress", JSON.stringify(progressData));
    }
  }

  /**
   * @param {string} field
   */
  function handleInput(field) {
    return (/** @type {Event} */ event) => {
      const target = /** @type {HTMLInputElement | HTMLTextAreaElement} */ (event.target);
      formData[field] = target.value;
      saveData();
    };
  }

  /**
   * @param {Event} event
   */
  function handleFileUpload(event) {
    const target = /** @type {HTMLInputElement} */ (event.target);
    const files = target.files;
    if (files && files.length > 0) {
      formData.codeFiles = Array.from(files);
      codeFilesUploaded = true;
      saveData();
    }
  }

  function nextSection() {
    goto("/assessment/submission");
  }

  function previousSection() {
    goto("/assessment/prompt-engineering");
  }

  // Template code examples for reference
  const fastApiTemplate = `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI(title="MediBot Health API")

class SymptomRequest(BaseModel):
    symptoms: str
    temperature: float = 0.1
    top_p: float = 0.3
    frequency_penalty: float = 0.2
    presence_penalty: float = 0.1

class DiagnosisResponse(BaseModel):
    symptoms: str
    possible_conditions: List[str]
    confidence: str
    disclaimer: str
    recommendations: List[str]

@app.post("/diagnose", response_model=DiagnosisResponse)
async def diagnose_symptoms(request: SymptomRequest):
    # Simulated AI call with prompt engineering parameters
    ai_response = simulate_ai_call(
        prompt="Analyze symptoms and provide medical guidance",
        user_input=request.symptoms,
        temperature=request.temperature,
        top_p=request.top_p,
        frequency_penalty=request.frequency_penalty,
        presence_penalty=request.presence_penalty
    )
    
    return DiagnosisResponse(
        symptoms=request.symptoms,
        possible_conditions=["common cold", "seasonal allergies"],
        confidence="moderate",
        disclaimer="This is not a substitute for professional medical advice",
        recommendations=["Rest", "Stay hydrated", "Consult a doctor if symptoms persist"]
    )

def simulate_ai_call(prompt: str, user_input: str, **params):
    # Simulate AI service call with parameters
    pass

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)`;

  const reactTemplate = `import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post('http://localhost:8000/diagnose', {
        symptoms: symptoms,
        temperature: 0.1,
        top_p: 0.3,
        frequency_penalty: 0.2,
        presence_penalty: 0.1
      });
      
      setDiagnosis(response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          MediBot Health Symptom Checker
        </h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe your symptoms:
            </label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              placeholder="e.g., I have a cough and fever"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Get Diagnosis'}
          </button>
        </form>

        {diagnosis && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
            {/* Display diagnosis results */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;`;
</script>

<svelte:head>
  <title>Technical Implementation - Assessment - GY6AI</title>
  <meta
    name="description"
    content="FastAPI and React technical implementation assessment section."
  />
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- Background Elements -->
<div class="gradient-bg"></div>

<!-- Layout -->
<Header />

<main class="assessment-main">
  <div class="container">
    <div class="assessment-header">
      <div class="section-info">
        <h1 class="section-title">Section IV: Technical Implementation</h1>
        <div class="progress-bar">
          <div class="progress-fill" style="width: {progress}%"></div>
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
            To integrate with <strong>MediBot Health's</strong> AI symptom checker,
            you need to set up a secure API endpoint and a simple web interface that
            demonstrates the prompt engineering configurations you designed in the
            previous section.
          </p>

          <div class="requirements-box">
            <h3>Required Deliverables:</h3>
            <ul>
              <li>FastAPI backend with /diagnose endpoint</li>
              <li>React frontend with symptom input form</li>
              <li>Demonstration of prompt parameter usage</li>
              <li>API integration with proper error handling</li>
              <li>Mobile-responsive design with Tailwind CSS</li>
            </ul>
          </div>

          <div class="technical-specs">
            <h3>Technical Specifications:</h3>
            <ul>
              <li>POST endpoint accepting symptom data</li>
              <li>Structured JSON response format</li>
              <li>Simulated AI service call</li>
              <li>Clear code comments and documentation</li>
              <li>Basic styling and user experience</li>
            </ul>
          </div>
        </Card>
      </div>

      <div class="form-column">
        <Card class="deliverable-card">
          <h2>1. FastAPI Backend Implementation</h2>
          <p class="instruction">
            Create a FastAPI application with a secure endpoint that accepts
            symptom descriptions and demonstrates how prompt engineering
            parameters would be used.
          </p>

          <div class="code-section">
            <div class="template-toggle">
              <Button
                variant="outline"
                size="small"
                on:click={() => (formData.fastApiCode = fastApiTemplate)}
              >
                Load Template Code
              </Button>
              <span class="template-note">Optional: Use as starting point</span>
            </div>

            <h4>FastAPI Code (main.py or similar)</h4>
            <textarea
              bind:value={formData.fastApiCode}
              on:input={handleInput("fastApiCode")}
              placeholder="Write your complete FastAPI application here. Include the /diagnose endpoint, request/response models, simulated AI call, and parameter usage..."
              rows="20"
              class="code-textarea"
            ></textarea>
          </div>

          <div class="explanation-section">
            <h4>Implementation Explanation</h4>
            <textarea
              bind:value={formData.fastApiExplanation}
              on:input={handleInput("fastApiExplanation")}
              placeholder="Explain your FastAPI implementation. Include how you handle the simulated AI call, parameter passing, error handling, and any security considerations..."
              rows="5"
            ></textarea>
          </div>
        </Card>

        <Card class="deliverable-card">
          <h2>2. React Frontend Implementation</h2>
          <p class="instruction">
            Create a React application with a user-friendly interface that
            allows symptom input and displays the API response with proper
            styling.
          </p>

          <div class="code-section">
            <div class="template-toggle">
              <Button
                variant="outline"
                size="small"
                on:click={() => (formData.reactCode = reactTemplate)}
              >
                Load Template Code
              </Button>
              <span class="template-note">Optional: Use as starting point</span>
            </div>

            <h4>React Code (App.js or similar)</h4>
            <textarea
              bind:value={formData.reactCode}
              on:input={handleInput("reactCode")}
              placeholder="Write your complete React component here. Include the symptom input form, API call logic, response display, and Tailwind CSS styling..."
              rows="18"
              class="code-textarea"
            ></textarea>
          </div>

          <div class="explanation-section">
            <h4>Frontend Explanation</h4>
            <textarea
              bind:value={formData.reactExplanation}
              on:input={handleInput("reactExplanation")}
              placeholder="Explain your React implementation. Include component structure, state management, API integration approach, styling decisions, and mobile responsiveness..."
              rows="5"
            ></textarea>
          </div>
        </Card>

        <Card class="deliverable-card">
          <h2>3. Integration & Additional Details</h2>
          <p class="instruction">
            Provide additional implementation details, testing approach, and
            deployment considerations.
          </p>

          <div class="integration-sections">
            <div class="integration-item">
              <h4>API Integration Notes</h4>
              <textarea
                bind:value={formData.integrationNotes}
                on:input={handleInput("integrationNotes")}
                placeholder="Describe how the React frontend integrates with the FastAPI backend. Include CORS handling, error management, loading states, and data flow..."
                rows="4"
              ></textarea>
            </div>

            <div class="integration-item">
              <h4>Testing Approach</h4>
              <textarea
                bind:value={formData.testingApproach}
                on:input={handleInput("testingApproach")}
                placeholder="Explain how you would test this application. Include unit tests, integration tests, API testing, and user experience testing strategies..."
                rows="4"
              ></textarea>
            </div>

            <div class="integration-item">
              <h4>Deployment & Production Notes</h4>
              <textarea
                bind:value={formData.deploymentNotes}
                on:input={handleInput("deploymentNotes")}
                placeholder="Describe deployment considerations, environment variables, security measures, scaling considerations, and production readiness..."
                rows="4"
              ></textarea>
            </div>
          </div>
        </Card>

        <Card class="deliverable-card">
          <h2>4. Code Submission Options</h2>
          <p class="instruction">
            Submit your code using one of the following methods for evaluation.
          </p>

          <div class="submission-options">
            <div class="option-group">
              <h4>Option A: File Upload</h4>
              <div class="file-upload">
                <input
                  type="file"
                  multiple
                  accept=".py,.js,.jsx,.html,.css,.json,.txt,.zip"
                  on:change={handleFileUpload}
                  id="code-upload"
                  hidden
                />
                <label for="code-upload" class="upload-button">
                  {codeFilesUploaded
                    ? "Code Files Uploaded ✓"
                    : "Upload Code Files"}
                </label>
                {#if codeFilesUploaded}
                  <span class="file-info">
                    {formData.codeFiles?.length} file(s) selected
                  </span>
                {/if}
              </div>
              <p class="option-note">
                Upload individual files or a ZIP archive
              </p>
            </div>

            <div class="option-separator">OR</div>

            <div class="option-group">
              <h4>Option B: GitHub Repository</h4>
              <Input
                type="url"
                bind:value={formData.githubRepoUrl}
                on:input={handleInput("githubRepoUrl")}
                placeholder="https://github.com/username/repository"
              />
              <p class="option-note">
                Public repository with complete implementation
              </p>
            </div>

            <div class="option-separator">OR</div>

            <div class="option-group">
              <h4>Option C: Live Demo</h4>
              <Input
                type="url"
                bind:value={formData.liveDemo}
                on:input={handleInput("liveDemo")}
                placeholder="https://your-app.vercel.app or https://your-app.herokuapp.com"
              />
              <p class="option-note">
                Deployed application with working functionality
              </p>
            </div>
          </div>
        </Card>

        <div class="navigation-buttons">
          <Button variant="outline" on:click={previousSection}>
            ← Previous: Prompt Engineering
          </Button>
          <Button variant="primary" on:click={nextSection}>
            Final Submission →
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


  .requirements-box,
  .technical-specs {
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


  .code-section {
    .template-toggle {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      .template-note {
        color: #888;
        font-size: 0.9rem;
      }
    }

    .code-textarea {
      width: 100%;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 0.75rem;
      color: #ffffff;
      font-family: "Courier New", monospace;
      font-size: 0.85rem;
      resize: vertical;
      transition: border-color 0.3s ease;
      line-height: 1.4;

      &:focus {
        outline: none;
        border-color: #4facfe;
      }

      &::placeholder {
        color: #888;
      }
    }
  }

  .explanation-section {
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

  .integration-sections {
    .integration-item {
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

  .submission-options {
    .option-group {
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

      .option-note {
        color: #888;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        font-style: italic;
      }
    }

    .option-separator {
      text-align: center;
      color: #666;
      font-weight: 600;
      margin: 2rem 0;
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

    .template-toggle {
      flex-direction: column;
      align-items: flex-start !important;
      gap: 0.5rem !important;
    }

    .code-textarea {
      font-size: 0.8rem !important;
    }
  }
</style>
