import { Z as current_component, D as push, P as fallback, Q as attr_class, _ as store_get, M as push_element, O as pop_element, N as escape_html, $ as unsubscribe_stores, S as bind_props, G as pop, I as FILENAME } from "./index.js";
import { i as derived, w as writable } from "./exports.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const DB_NAME = "GY6AI_Assessment";
const DB_VERSION = 1;
const STORE_NAME = "assessment_progress";
class AssessmentStorage {
  constructor() {
    this.db = null;
  }
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
          store.createIndex("section", "section", { unique: false });
          store.createIndex("timestamp", "timestamp", { unique: false });
        }
      };
    });
  }
  async saveProgress(sectionId, data) {
    if (!this.db) await this.init();
    const progressData = {
      id: `assessment_${sectionId}`,
      section: sectionId,
      data,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      completionStatus: data.completionStatus || "in_progress"
    };
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(progressData);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(progressData);
    });
  }
  async getProgress(sectionId) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(`assessment_${sectionId}`);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }
  async getAllProgress() {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  }
  async deleteProgress(sectionId) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(`assessment_${sectionId}`);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(true);
    });
  }
  async clearAllProgress() {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(true);
    });
  }
  async getAssessmentOverview() {
    const allProgress = await this.getAllProgress();
    const sections = [
      "client-acquisition",
      "technical-solution",
      "prompt-engineering",
      "implementation"
    ];
    const overview = {
      startTime: null,
      totalProgress: 0,
      sections: {},
      isComplete: false
    };
    allProgress.forEach((progress) => {
      if (!overview.startTime || new Date(progress.timestamp) < new Date(overview.startTime)) {
        overview.startTime = progress.timestamp;
      }
    });
    sections.forEach((sectionId) => {
      const sectionProgress = allProgress.find((p) => p.section === sectionId);
      overview.sections[sectionId] = {
        completed: sectionProgress?.completionStatus === "completed" || false,
        hasProgress: !!sectionProgress,
        lastSaved: sectionProgress?.timestamp || null,
        data: sectionProgress?.data || null
      };
    });
    const completedSections = Object.values(overview.sections).filter((s) => s.completed).length;
    overview.totalProgress = completedSections / sections.length * 100;
    overview.isComplete = completedSections === sections.length;
    return overview;
  }
  // Time tracking utilities
  async saveTimeSpent(sectionId, timeSpent) {
    const existing = await this.getProgress(sectionId);
    const data = existing?.data || {};
    data.timeSpent = (data.timeSpent || 0) + timeSpent;
    return this.saveProgress(sectionId, data);
  }
  async getTotalTimeSpent() {
    const allProgress = await this.getAllProgress();
    return allProgress.reduce((total, progress) => {
      return total + (progress.data?.timeSpent || 0);
    }, 0);
  }
}
const assessmentStorage = new AssessmentStorage();
const assessmentProgress = writable({
  startTime: null,
  totalProgress: 0,
  sections: {
    "client-acquisition": { completed: false, hasProgress: false, lastSaved: null },
    "technical-solution": { completed: false, hasProgress: false, lastSaved: null },
    "prompt-engineering": { completed: false, hasProgress: false, lastSaved: null },
    "implementation": { completed: false, hasProgress: false, lastSaved: null }
  },
  isComplete: false,
  timeRemaining: null
});
const autoSaveStatus = writable({
  isEnabled: true,
  lastSaved: null,
  isSaving: false,
  hasUnsavedChanges: false
});
derived(assessmentProgress, ($progress) => {
  if (!$progress.startTime) return null;
  const startTime = new Date($progress.startTime);
  const now = /* @__PURE__ */ new Date();
  const elapsed = now - startTime;
  const remaining = Math.max(0, 48 * 60 * 60 * 1e3 - elapsed);
  return {
    elapsed,
    remaining,
    formattedRemaining: formatTime(remaining),
    isExpired: remaining <= 0,
    hoursRemaining: Math.floor(remaining / (60 * 60 * 1e3))
  };
});
function formatTime(milliseconds) {
  if (milliseconds <= 0) return "Expired";
  const hours = Math.floor(milliseconds / (60 * 60 * 1e3));
  const minutes = Math.floor(milliseconds % (60 * 60 * 1e3) / (60 * 1e3));
  if (hours > 0) {
    return `${hours}h ${minutes}m remaining`;
  } else {
    return `${minutes}m remaining`;
  }
}
const assessmentActions = {
  // Load progress from IndexedDB
  async loadProgress() {
    try {
      const overview = await assessmentStorage.getAssessmentOverview();
      assessmentProgress.set(overview);
      return overview;
    } catch (error) {
      console.error("Failed to load assessment progress:", error);
      return null;
    }
  },
  // Save progress for a section
  async saveProgress(sectionId, data, completionStatus = "in_progress") {
    try {
      autoSaveStatus.update((status) => ({ ...status, isSaving: true }));
      await assessmentStorage.saveProgress(sectionId, {
        ...data,
        completionStatus
      });
      assessmentProgress.update((progress) => ({
        ...progress,
        sections: {
          ...progress.sections,
          [sectionId]: {
            completed: completionStatus === "completed",
            hasProgress: true,
            lastSaved: (/* @__PURE__ */ new Date()).toISOString()
          }
        }
      }));
      await this.loadProgress();
      autoSaveStatus.update((status) => ({
        ...status,
        isSaving: false,
        lastSaved: (/* @__PURE__ */ new Date()).toISOString(),
        hasUnsavedChanges: false
      }));
      return true;
    } catch (error) {
      console.error("Failed to save assessment progress:", error);
      autoSaveStatus.update((status) => ({ ...status, isSaving: false }));
      return false;
    }
  },
  // Start assessment (set start time if not already set)
  async startAssessment() {
    try {
      const existing = await assessmentStorage.getAssessmentOverview();
      if (!existing.startTime) {
        await assessmentStorage.saveProgress("overview", {
          startTime: (/* @__PURE__ */ new Date()).toISOString()
        });
      }
      await this.loadProgress();
    } catch (error) {
      console.error("Failed to start assessment:", error);
    }
  },
  // Complete a section
  async completeSection(sectionId, data) {
    return this.saveProgress(sectionId, data, "completed");
  },
  // Get section data
  async getSectionData(sectionId) {
    try {
      const progress = await assessmentStorage.getProgress(sectionId);
      return progress?.data || null;
    } catch (error) {
      console.error("Failed to get section data:", error);
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
          "client-acquisition": { completed: false, hasProgress: false, lastSaved: null },
          "technical-solution": { completed: false, hasProgress: false, lastSaved: null },
          "prompt-engineering": { completed: false, hasProgress: false, lastSaved: null },
          "implementation": { completed: false, hasProgress: false, lastSaved: null }
        },
        isComplete: false,
        timeRemaining: null
      });
      return true;
    } catch (error) {
      console.error("Failed to clear progress:", error);
      return false;
    }
  },
  // Mark unsaved changes
  markUnsavedChanges() {
    autoSaveStatus.update((status) => ({ ...status, hasUnsavedChanges: true }));
  }
};
AutoSave[FILENAME] = "src/components/ui/AutoSave.svelte";
function formatSaveTime(timestamp) {
  const now = /* @__PURE__ */ new Date();
  const saved = new Date(timestamp);
  const diff = now - saved;
  if (diff < 6e4) return "just now";
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  return saved.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function AutoSave($$payload, $$props) {
  push(AutoSave);
  var $$store_subs;
  let sectionId = fallback($$props["sectionId"], "");
  let data = fallback($$props["data"], () => ({}), true);
  let interval = fallback(
    $$props["interval"],
    3e4
    // Auto-save every 30 seconds
  );
  let showStatus = fallback($$props["showStatus"], true);
  let lastDataString = "";
  onDestroy(() => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  });
  async function saveProgress() {
    if (!sectionId || store_get($$store_subs ??= {}, "$autoSaveStatus", autoSaveStatus).isSaving) return;
    const success = await assessmentActions.saveProgress(sectionId, data);
    return success;
  }
  function handleBeforeUnload(event) {
    if (store_get($$store_subs ??= {}, "$autoSaveStatus", autoSaveStatus).hasUnsavedChanges) {
      event.preventDefault();
      event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      return event.returnValue;
    }
  }
  {
    const currentDataString = JSON.stringify(data);
    if (currentDataString !== lastDataString && lastDataString !== "") {
      assessmentActions.markUnsavedChanges();
    }
    lastDataString = currentDataString;
  }
  if (
    // Set up auto-save interval
    // Save on page unload
    // Manual save function (exposed to parent)
    showStatus
  ) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<div${attr_class("auto-save-status svelte-ln59yi", void 0, {
      "saving": store_get($$store_subs ??= {}, "$autoSaveStatus", autoSaveStatus).isSaving,
      "unsaved": store_get($$store_subs ??= {}, "$autoSaveStatus", autoSaveStatus).hasUnsavedChanges
    })}>`);
    push_element($$payload, "div", 69, 2);
    if (store_get($$store_subs ??= {}, "$autoSaveStatus", autoSaveStatus).isSaving) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="status-indicator svelte-ln59yi">`);
      push_element($$payload, "div", 71, 6);
      $$payload.out.push(`<div class="spinner svelte-ln59yi">`);
      push_element($$payload, "div", 72, 8);
      $$payload.out.push(`</div>`);
      pop_element();
      $$payload.out.push(` <span class="svelte-ln59yi">`);
      push_element($$payload, "span", 73, 8);
      $$payload.out.push(`Saving...</span>`);
      pop_element();
      $$payload.out.push(`</div>`);
      pop_element();
    } else {
      $$payload.out.push("<!--[!-->");
      if (store_get($$store_subs ??= {}, "$autoSaveStatus", autoSaveStatus).hasUnsavedChanges) {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<div class="status-indicator unsaved svelte-ln59yi">`);
        push_element($$payload, "div", 76, 6);
        $$payload.out.push(`<div class="dot svelte-ln59yi">`);
        push_element($$payload, "div", 77, 8);
        $$payload.out.push(`</div>`);
        pop_element();
        $$payload.out.push(` <span class="svelte-ln59yi">`);
        push_element($$payload, "span", 78, 8);
        $$payload.out.push(`Unsaved changes</span>`);
        pop_element();
        $$payload.out.push(`</div>`);
        pop_element();
      } else {
        $$payload.out.push("<!--[!-->");
        if (store_get($$store_subs ??= {}, "$autoSaveStatus", autoSaveStatus).lastSaved) {
          $$payload.out.push("<!--[-->");
          $$payload.out.push(`<div class="status-indicator saved svelte-ln59yi">`);
          push_element($$payload, "div", 81, 6);
          $$payload.out.push(`<div class="check svelte-ln59yi">`);
          push_element($$payload, "div", 82, 8);
          $$payload.out.push(`</div>`);
          pop_element();
          $$payload.out.push(` <span class="svelte-ln59yi">`);
          push_element($$payload, "span", 83, 8);
          $$payload.out.push(`Saved ${escape_html(formatSaveTime(store_get($$store_subs ??= {}, "$autoSaveStatus", autoSaveStatus).lastSaved))}</span>`);
          pop_element();
          $$payload.out.push(`</div>`);
          pop_element();
        } else {
          $$payload.out.push("<!--[!-->");
        }
        $$payload.out.push(`<!--]-->`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]--></div>`);
    pop_element();
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { sectionId, data, interval, showStatus, save: saveProgress });
  pop();
}
AutoSave.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  AutoSave as A
};
