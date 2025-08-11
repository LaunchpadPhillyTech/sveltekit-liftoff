<!-- src/components/ui/AutoSave.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';
  import { autoSaveStatus, assessmentActions } from '$stores/assessment.js';

  export let sectionId = '';
  export let data = {};
  export let interval = 30000; // Auto-save every 30 seconds
  export let showStatus = true;

  let autoSaveInterval;
  let hasChanged = false;
  let lastDataString = '';

  $: {
    // Watch for data changes
    const currentDataString = JSON.stringify(data);
    if (currentDataString !== lastDataString && lastDataString !== '') {
      hasChanged = true;
      assessmentActions.markUnsavedChanges();
    }
    lastDataString = currentDataString;
  }

  onMount(() => {
    // Set up auto-save interval
    if (interval > 0 && sectionId) {
      autoSaveInterval = setInterval(async () => {
        if (hasChanged && !$autoSaveStatus.isSaving) {
          await saveProgress();
        }
      }, interval);
    }

    // Save on page unload
    window.addEventListener('beforeunload', handleBeforeUnload);
  });

  onDestroy(() => {
    if (autoSaveInterval) {
      clearInterval(autoSaveInterval);
    }
    window.removeEventListener('beforeunload', handleBeforeUnload);
  });

  async function saveProgress() {
    if (!sectionId || $autoSaveStatus.isSaving) return;

    const success = await assessmentActions.saveProgress(sectionId, data);
    if (success) {
      hasChanged = false;
    }
    return success;
  }

  function handleBeforeUnload(event) {
    if ($autoSaveStatus.hasUnsavedChanges) {
      event.preventDefault();
      event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      return event.returnValue;
    }
  }

  // Manual save function (exposed to parent)
  export { saveProgress as save };
</script>

{#if showStatus}
  <div class="auto-save-status" class:saving={$autoSaveStatus.isSaving} class:unsaved={$autoSaveStatus.hasUnsavedChanges}>
    {#if $autoSaveStatus.isSaving}
      <div class="status-indicator">
        <div class="spinner"></div>
        <span>Saving...</span>
      </div>
    {:else if $autoSaveStatus.hasUnsavedChanges}
      <div class="status-indicator unsaved">
        <div class="dot"></div>
        <span>Unsaved changes</span>
      </div>
    {:else if $autoSaveStatus.lastSaved}
      <div class="status-indicator saved">
        <div class="check"></div>
        <span>Saved {formatSaveTime($autoSaveStatus.lastSaved)}</span>
      </div>
    {/if}
  </div>
{/if}

<style lang="scss">
  .auto-save-status {
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 8px 12px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    font-size: 0.85rem;
    min-width: 140px;

    &.saving {
      border-color: rgba(79, 172, 254, 0.5);
      background: rgba(79, 172, 254, 0.1);
    }

    &.unsaved {
      border-color: rgba(245, 87, 108, 0.5);
      background: rgba(245, 87, 108, 0.1);
    }
  }

  .status-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e0e0e0;

    &.unsaved {
      color: #f5576c;
    }

    &.saved {
      color: #22c55e;
    }
  }

  .spinner {
    width: 12px;
    height: 12px;
    border: 2px solid transparent;
    border-top: 2px solid #4facfe;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .dot {
    width: 8px;
    height: 8px;
    background: #f5576c;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }

  .check {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #22c55e;
    position: relative;

    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 8px;
      color: white;
      font-weight: bold;
    }
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @media (max-width: 768px) {
    .auto-save-status {
      top: 80px;
      right: 10px;
      min-width: 120px;
      font-size: 0.8rem;
    }
  }
</style>

<script context="module">
  function formatSaveTime(timestamp) {
    const now = new Date();
    const saved = new Date(timestamp);
    const diff = now - saved;
    
    if (diff < 60000) return 'just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return saved.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
</script>