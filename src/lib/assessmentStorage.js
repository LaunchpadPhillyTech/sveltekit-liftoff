// src/lib/assessmentStorage.js
// IndexedDB service for storing assessment progress

const DB_NAME = 'GY6AI_Assessment';
const DB_VERSION = 1;
const STORE_NAME = 'assessment_progress';

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
          const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
          store.createIndex('section', 'section', { unique: false });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
    });
  }

  async saveProgress(sectionId, data) {
    if (!this.db) await this.init();

    const progressData = {
      id: `assessment_${sectionId}`,
      section: sectionId,
      data: data,
      timestamp: new Date().toISOString(),
      completionStatus: data.completionStatus || 'in_progress'
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(progressData);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(progressData);
    });
  }

  async getProgress(sectionId) {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(`assessment_${sectionId}`);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  }

  async getAllProgress() {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || []);
    });
  }

  async deleteProgress(sectionId) {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(`assessment_${sectionId}`);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(true);
    });
  }

  async clearAllProgress() {
    if (!this.db) await this.init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(true);
    });
  }

  async getAssessmentOverview() {
    const allProgress = await this.getAllProgress();
    
    const sections = [
      'client-acquisition',
      'technical-solution', 
      'prompt-engineering',
      'implementation'
    ];

    const overview = {
      startTime: null,
      totalProgress: 0,
      sections: {},
      isComplete: false
    };

    // Find earliest start time
    allProgress.forEach(progress => {
      if (!overview.startTime || new Date(progress.timestamp) < new Date(overview.startTime)) {
        overview.startTime = progress.timestamp;
      }
    });

    // Calculate section progress
    sections.forEach(sectionId => {
      const sectionProgress = allProgress.find(p => p.section === sectionId);
      overview.sections[sectionId] = {
        completed: sectionProgress?.completionStatus === 'completed' || false,
        hasProgress: !!sectionProgress,
        lastSaved: sectionProgress?.timestamp || null,
        data: sectionProgress?.data || null
      };
    });

    // Calculate total progress
    const completedSections = Object.values(overview.sections).filter(s => s.completed).length;
    overview.totalProgress = (completedSections / sections.length) * 100;
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

export const assessmentStorage = new AssessmentStorage();