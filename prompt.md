Create a comprehensive pre-trial assessment for candidates applying for a Client Solutions Specialist role at GY6AI. The assessment should cover client acquisition, technical evaluation, problem-solving, and advanced prompt engineering skills. Candidates should be allowed to use their preferred tools and resources to complete the tasks, demonstrating their resourcefulness and practical application of knowledge. Add a link to the home page and a link to the careers page of GY6AI. at the end of the document.

# GY6AI. Client Solutions Specialist Pre-Trial Assessment

Comprehensive Pre-Trial Assessment
This assessment is designed to evaluate candidates for roles requiring strong client interaction, technical proficiency in IT systems, problem-solving abilities, and advanced prompt engineering skills. Candidates will be given the freedom to use their preferred tools and resources to complete the tasks, demonstrating their resourcefulness and practical application of knowledge.

I. Overview and Guidelines:
Purpose: To assess a candidate's practical skills in a simulated real-world scenario, covering client engagement, technical system configuration, complex problem-solving, and advanced AI prompt engineering.

Tools: Candidates are encouraged to use tools of their choice (e.g., preferred IDEs, programming languages, documentation, online resources, communication platforms, etc.) to complete the assessment. The focus is on the solution and approach, not on strict adherence to a specific toolset, unless otherwise specified for a particular task (e.g., FastAPI/React).

Timeline: Candidates will have [Specify Time, e.g., 48 hours / 3 business days] to complete all components of this assessment from the time it is shared.

Deliverables: Each section specifies the required deliverables. Submissions should be well-documented and clearly present the solution and thought process.

II. Combined Client Acquisition, Technical Evaluation, and Problem-Solving Scenario:
Scenario:
You are a newly onboarded Client Solutions Specialist at GY6AI., a company specializing in providing tailored IT infrastructure and software solutions. Your first critical task is to engage with a potential new client, "Global Connect Corp." (a mock client), which is experiencing significant issues with its legacy data processing system and requires a modern, scalable, and secure solution.

Tasks:

Client Pitch & Needs Analysis (Client Acquisition/Problem-Solving):

Objective: Prepare and present a concise (max 10-minute) "mock pitch" outlining how GY6AI. can address Global Connect Corp.'s data processing challenges.

Deliverable:

A brief written summary (max 500 words) of your proposed solution for Global Connect Corp., highlighting key benefits, and how it addresses their legacy system issues.

A short video recording (or detailed script) of your mock pitch, demonstrating your communication style, ability to articulate value, and personable approach. Assume you are pitching to a non-technical executive.

Identify and articulate at least three critical pain points Global Connect Corp. is likely facing with their legacy system and how your solution specifically alleviates them.

Technical Solution Blueprint & Troubleshooting (Technical Evaluation/Problem-Solving):

Objective: Based on the scenario, Global Connect Corp. currently uses an outdated on-premise SQL database and a monolithic backend application. They are looking to migrate to a cloud-based solution.

Deliverable:

A high-level technical blueprint (diagram + brief explanation) proposing a modern, scalable cloud architecture for Global Connect Corp.'s data processing, including suggested technologies (e.g., cloud provider, database service, computing services). Justify your choices.

Problem-Solving Scenario: Global Connect Corp. reports that their legacy system occasionally crashes under peak load, leading to data corruption. Describe your step-by-step approach to troubleshooting this intermittent data corruption issue in a production environment, assuming you have limited access initially. What questions would you ask? What logs would you check? How would you isolate the problem?

III. Prompt Engineering and Custom Prompt Configuration Assessment:
Scenario:
A new client, "MediBot Health," is developing an AI-powered symptom checker. They need help ensuring their AI assistant provides accurate, consistent, and non-hallucinatory responses to user queries about health symptoms. They also want to fine-tune the AI's "personality" for empathy and clarity.

Tasks:

Core Prompt Development:

Objective: Design a core system prompt for the MediBot Health AI assistant that aims to minimize hallucinations and provide consistent, medically relevant, and clear information regarding common cold symptoms (e.g., "runny nose," "sore throat," "cough").

Deliverable:

The complete core system prompt.

A brief explanation (max 200 words) of your prompt engineering strategy, highlighting how it addresses hallucination reduction and consistency.

Prompt Configuration for Nuance:

Objective: MediBot Health wants to experiment with the AI's output. Provide examples of how you would adjust the following prompt parameters to achieve specific outcomes, explaining the impact of each adjustment:

Temperature: How would you set the temperature for a response requiring high factual accuracy vs. a more empathetic, conversational tone?

Top P (Nucleus Sampling): Explain how top_p influences response diversity and how you would configure it for strict medical advice vs. general health tips.

Frequency Penalty: How would you use frequency penalty to discourage repetitive phrasing or common medical jargon, making the output sound more natural?

Presence Penalty: How would you use presence penalty to encourage the AI to introduce new concepts or perspectives relevant to the health query, even if not explicitly mentioned in the initial prompt?

Deliverable:

For each parameter (Temperature, Top P, Frequency Penalty, Presence Penalty):

A suggested value range or specific values for different desired outputs.

A clear explanation of why that value is chosen and its expected effect on the AI's response for the MediBot Health scenario.

IV. Technical Implementation: FastAPI & React Open API Web Call:
Scenario:
To integrate with MediBot Health's AI symptom checker, you need to set up a secure API endpoint and a simple web interface.

Tasks:

FastAPI Backend:

Objective: Create a simple FastAPI endpoint that accepts a user's symptom description (e.g., "I have a cough and fever") and internally calls a hypothetical AI service (simulate this call, you don't need a real AI service). The FastAPI endpoint should then return a structured JSON response.

Simulated AI Call: The simulated AI call should demonstrate how the prompt engineering configurations (temperature, top_p, etc.) would be passed to an external AI model, even if the AI's actual response is hardcoded for this assessment.

Deliverable:

A Python script (main.py or similar) with the FastAPI application, including:

An endpoint (e.g., /diagnose) that accepts a POST request with symptom data.

A simulated internal call to an AI service, demonstrating how temperature, top_p, frequency_penalty, and presence_penalty would be used as parameters in that call.

A sample structured JSON response (e.g., {"symptoms": "cough, fever", "possible_conditions": ["common cold"], "disclaimer": "consult a doctor"}).

Clear comments throughout the code explaining the logic and parameter usage.

React Frontend:

Objective: Create a basic React application that allows a user to input their symptoms and display the response from the FastAPI backend.

Deliverable:

A single React component (App.js or similar) that:

Has a text input field for symptoms.

A button to "Get Diagnosis".

Displays the JSON response from the FastAPI backend in a readable format.

Demonstrates how the React app would make an axios or fetch call to your FastAPI endpoint.

Includes basic styling (Tailwind CSS preferred) to make it presentable and mobile-responsive.
