<!-- src/components/assessment/AssessmentProgress.svelte -->
<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { goto } from "$app/navigation";
  import Button from "$components/ui/Button.svelte";

  export let currentSection = "";
  export let timeRemaining = "48:00:00";
  export let overallProgress = 0;
  export let sectionProgress = {
    clientAcquisition: { completed: false, progress: 0 },
    technicalSolution: { completed: false, progress: 0 },
    promptEngineering: { completed: false, progress: 0 },
    implementation: { completed: false, progress: 0 },
  };

  const dispatch = createEventDispatcher();

  const sections = [
    {
      key: "clientAcquisition",
      title: "Client Acquisition",
      route: "/assessment/client-acquisition",
      number: "I",
    },
    {
      key: "technicalSolution",
      title: "Technical Solution",
      route: "/assessment/technical-solution",
      number: "II",
    },
    {
      key: "promptEngineering",
      title: "Prompt Engineering",
      route: "/assessment/prompt-engineering",
      number: "III",
    },
    {
      key: "implementation",
      title: "Implementation",
      route: "/assessment/implementation",
      number: "IV",
    },
  ];

  function getSectionStatus(sectionKey) {
    const section = sectionProgress[sectionKey];
    if (section?.completed) {
      return "completed";
    } else if (section?.progress > 0) {
      return "in-progress";
    } else {
      return "not-started";
    }
  }

  function getSectionIcon(sectionKey) {
    const status = getSectionStatus(sectionKey);
    switch (status) {
      case "completed":
        return "✅";
      case "in-progress":
        return "🔄";
      default:
        return "⚪";
    }
  }

  function navigateToSection(route) {
    goto(route);
  }

  function goToOverview() {
    goto("/assessment/overview");
  }

  function goToSubmission() {
    goto("/assessment/submission");
  }

  onMount(() => {
    dispatch("mounted");
  });
</script>

<div class="assessment-progress">
  <div class="progress-header">
    <h3>Assessment Progress</h3>
    <div class="timer">
      <span class="timer-label">Time Remaining:</span>
      <span class="timer-value">{timeRemaining}</span>
    </div>
  </div>

  <div class="overall-progress">
    <div class="progress-bar">
      <div class="progress-fill" style="width: {overallProgress}%" />
    </div>
    <span class="progress-text">{overallProgress}% Complete</span>
  </div>

  <div class="sections-list">
    {#each sections as section}
      {@const status = getSectionStatus(section.key)}
      {@const progress = sectionProgress[section.key]}
      <div
        class="section-item"
        class:current={currentSection === section.key}
        class:completed={status === "completed"}
        class:in-progress={status === "in-progress"}
      >
        <button
          class="section-button"
          on:click={() => navigateToSection(section.route)}
        >
          <div class="section-number">{section.number}</div>
          <div class="section-content">
            <div class="section-title">{section.title}</div>
            <div class="section-status">
              <span class="status-icon">{getSectionIcon(section.key)}</span>
              <span class="status-text">
                {#if status === "completed"}
                  Completed
                {:else if status === "in-progress"}
                  {progress?.progress || 0}% Complete
                {:else}
                  Not Started
                {/if}
              </span>
            </div>
          </div>
        </button>
      </div>
    {/each}
  </div>

  <div class="progress-actions">
    <Button variant="outline" size="small" on:click={goToOverview}>
      📋 Overview
    </Button>
    <Button variant="outline" size="small" on:click={goToSubmission}>
      📤 Submit
    </Button>
  </div>
</div>

<style lang="scss">
  .assessment-progress {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    padding: 1.5rem;
    position: sticky;
    top: 2rem;
  }

  .progress-header {
    margin-bottom: 1.5rem;

    h3 {
      color: #4facfe;
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    .timer {
      background: rgba(79, 172, 254, 0.1);
      border: 1px solid rgba(79, 172, 254, 0.3);
      border-radius: 0.5rem;
      padding: 0.75rem;
      text-align: center;

      .timer-label {
        color: #4facfe;
        font-size: 0.8rem;
        display: block;
        margin-bottom: 0.25rem;
      }

      .timer-value {
        color: #ffffff;
        font-size: 1rem;
        font-weight: 900;
        font-family: "Courier New", monospace;
      }
    }
  }

  .overall-progress {
    margin-bottom: 2rem;

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
      text-align: center;
      display: block;
    }
  }

  .sections-list {
    margin-bottom: 1.5rem;

    .section-item {
      margin-bottom: 0.75rem;
      border-radius: 0.5rem;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        border-color: rgba(79, 172, 254, 0.4);
      }

      &.current {
        border-color: #4facfe;
        background: rgba(79, 172, 254, 0.1);
      }

      &.completed {
        border-color: rgba(34, 197, 94, 0.4);
        background: rgba(34, 197, 94, 0.05);
      }

      &.in-progress {
        border-color: rgba(245, 158, 11, 0.4);
        background: rgba(245, 158, 11, 0.05);
      }

      .section-button {
        width: 100%;
        padding: 0.75rem;
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-align: left;
        transition: background-color 0.2s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.05);
        }
      }

      .section-number {
        width: 24px;
        height: 24px;
        background: linear-gradient(135deg, #4facfe, #00f2fe);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 900;
        font-size: 0.8rem;
        flex-shrink: 0;
      }

      .section-content {
        flex: 1;

        .section-title {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .section-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          .status-icon {
            font-size: 0.8rem;
          }

          .status-text {
            color: #b0b0b0;
            font-size: 0.8rem;
          }
        }
      }

      &.completed .section-content .section-status .status-text {
        color: #22c55e;
      }

      &.in-progress .section-content .section-status .status-text {
        color: #f59e0b;
      }
    }
  }

  .progress-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;

    :global(button) {
      flex: 1;
      font-size: 0.8rem !important;
      padding: 0.5rem 0.75rem !important;
    }
  }

  @media (max-width: 768px) {
    .assessment-progress {
      position: static;
      padding: 1rem;
    }

    .progress-header h3 {
      font-size: 1rem;
    }

    .timer {
      padding: 0.5rem !important;
    }

    .sections-list .section-item .section-button {
      padding: 0.5rem !important;
      gap: 0.5rem !important;
    }

    .progress-actions {
      flex-direction: column;
    }
  }
</style>
