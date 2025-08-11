// src/stores/assessment.js
// Svelte store for assessment progress management

import { writable, derived } from 'svelte/store';
import { assessmentStorage } from '$lib/assessmentStorage.js';

// Assessment progress store
export const assessmentProgress = writable({
  startTime: null,
  totalProgress: 0,
  sections: {
    'client-acquisition': { completed: false, hasProgress: false, lastSaved: null },
    'technical-solution': { completed: false, hasProgress: false, lastSaved: null },
    'prompt-engineering': { completed: false, hasProgress: false, lastSaved: null },
    'implementation': { completed: false, hasProgress: false, lastSaved: null }
  },
  isComplete: false,
  timeRemaining: null
});

// Current section being worked on
export const currentSection = writable(null);

// Auto-save status
export const autoSaveStatus = writable({
  isEnabled: true,
  lastSaved: null,
  isSaving: false,
  hasUnsavedChanges: false
});

// Derived store for time calculations
export const timeStats = derived(assessmentProgress, ($progress) => {
  if (!$progress.startTime) return null;

  const startTime = new Date($progress.startTime);
  const now = new Date();
  const elapsed = now - startTime;
  const remaining = Math.max(0, (48 * 60 * 60 * 1000) - elapsed); // 48 hours in ms

  return {
    elapsed,
    remaining,
    formattedRemaining: formatTime(remaining),
    isExpired: remaining <= 0,
    hoursRemaining: Math.floor(remaining / (60 * 60 * 1000))
  };
});

// Helper function to format time
function formatTime(milliseconds) {
  if (milliseconds <= 0) return 'Expired';
  
  const hours = Math.floor(milliseconds / (60 * 60 * 1000));
  const minutes = Math.floor((milliseconds % (60 * 60 * 1000)) / (60 * 1000));
  
  if (hours > 0) {
    return `${hours}h ${minutes}m remaining`;
  } else {
    return `${minutes}m remaining`;
  }
}

// Assessment actions
export const assessmentActions = {
  // Load progress from IndexedDB
  async loadProgress() {
    try {
      const overview = await assessmentStorage.getAssessmentOverview();
      assessmentProgress.set(overview);
      return overview;
    } catch (error) {
      console.error('Failed to load assessment progress:', error);
      return null;
    }
  },

  // Save progress for a section
  async saveProgress(sectionId, data, completionStatus = 'in_progress') {
    try {
      autoSaveStatus.update(status => ({ ...status, isSaving: true }));
      
      await assessmentStorage.saveProgress(sectionId, {
        ...data,
        completionStatus
      });

      // Update the store
      assessmentProgress.update(progress => ({
        ...progress,
        sections: {
          ...progress.sections,
          [sectionId]: {
            completed: completionStatus === 'completed',
            hasProgress: true,
            lastSaved: new Date().toISOString()
          }
        }
      }));

      // Recalculate total progress
      await this.loadProgress();

      autoSaveStatus.update(status => ({
        ...status,
        isSaving: false,
        lastSaved: new Date().toISOString(),
        hasUnsavedChanges: false
      }));

      return true;
    } catch (error) {
      console.error('Failed to save assessment progress:', error);
      autoSaveStatus.update(status => ({ ...status, isSaving: false }));
      return false;
    }
  },

  // Start assessment (set start time if not already set)
  async startAssessment() {
    try {
      const existing = await assessmentStorage.getAssessmentOverview();
      if (!existing.startTime) {
        await assessmentStorage.saveProgress('overview', {
          startTime: new Date().toISOString()
        });
      }
      await this.loadProgress();
    } catch (error) {
      console.error('Failed to start assessment:', error);
    }
  },

  // Complete a section
  async completeSection(sectionId, data) {
    return this.saveProgress(sectionId, data, 'completed');
  },

  // Get section data
  async getSectionData(sectionId) {
    try {
      const progress = await assessmentStorage.getProgress(sectionId);
      return progress?.data || null;
    } catch (error) {
      console.error('Failed to get section data:', error);
      return null;
    }
  },

  // Clear all progress (for testing)
  async clearProgress() {
    try {
      await assessmentStorage.clearAllProgress();
      assessmentProgress.set({
        startTime: null,
        totalProgress: 0,
        sections: {
          'client-acquisition': { completed: false, hasProgress: false, lastSaved: null },
          'technical-solution': { completed: false, hasProgress: false, lastSaved: null },
          'prompt-engineering': { completed: false, hasProgress: false, lastSaved: null },
          'implementation': { completed: false, hasProgress: false, lastSaved: null }
        },
        isComplete: false,
        timeRemaining: null
      });
      return true;
    } catch (error) {
      console.error('Failed to clear progress:', error);
      return false;
    }
  },

  // Mark unsaved changes
  markUnsavedChanges() {
    autoSaveStatus.update(status => ({ ...status, hasUnsavedChanges: true }));
  }
};