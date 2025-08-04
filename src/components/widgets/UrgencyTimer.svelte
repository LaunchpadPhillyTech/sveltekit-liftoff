<!-- src/components/widgets/UrgencyTimer.svelte -->
<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { urgencyTimerText, currentScarcityCount } from '$stores/ui.js';
  
  let visible = false;
  let timerText = '';
  let scarcityCount = 23;
  let endTime;
  let interval;
  
  onMount(() => {
    // Subscribe to stores
    const unsubscribeTimer = urgencyTimerText.subscribe(text => {
      timerText = text;
    });
    
    const unsubscribeScarcity = currentScarcityCount.subscribe(count => {
      scarcityCount = count;
    });
    
    // Initialize timer
    startUrgencyTimer();
    
    // Show timer after 3 seconds
    setTimeout(() => {
      visible = true;
      
      // Track timer view
      if (browser) {
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'urgency_timer_shown',
            data: { 
              timerText,
              scarcityCount,
              timeRemaining: endTime ? endTime - Date.now() : 0
            }
          })
        }).catch(console.error);
      }
    }, 3000);
    
    return () => {
      unsubscribeTimer();
      unsubscribeScarcity();
      if (interval) clearInterval(interval);
    };
  });
  
  function startUrgencyTimer() {
    if (!browser) return;
    
    // Set end time to 4 days from now (or get from localStorage for persistence)
    const savedEndTime = localStorage.getItem('urgency_timer_end');
    if (savedEndTime) {
      endTime = new Date(savedEndTime);
    } else {
      endTime = new Date(Date.now() + (4 * 24 * 60 * 60 * 1000)); // 4 days
      localStorage.setItem('urgency_timer_end', endTime.toISOString());
    }
    
    function updateTimer() {
      const now = new Date();
      const timeLeft = endTime - now;
      
      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        const newTimerText = `⏰ Price increases in ${days}d ${hours}h ${minutes}m`;
        urgencyTimerText.set(newTimerText);
      } else {
        urgencyTimerText.set('🔥 Offer Expired - Contact Support');
        
        // Track timer expiration
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'urgency_timer_expired',
            data: { scarcityCount }
          })
        }).catch(console.error);
      }
    }
    
    // Update immediately
    updateTimer();
    
    // Update every minute
    interval = setInterval(updateTimer, 60000);
  }
  
  function updateScarcityCount() {
    const min = 18;
    const max = 28;
    const newCount = Math.floor(Math.random() * (max - min + 1)) + min;
    currentScarcityCount.set(newCount);
    
    // Track scarcity update
    if (browser) {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'scarcity_updated',
          data: { 
            oldCount: scarcityCount,
            newCount,
            timerText
          }
        })
      }).catch(console.error);
    }
  }
  
  function handleClick() {
    // Track timer click
    if (browser) {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'urgency_timer_clicked',
          data: { 
            timerText,
            scarcityCount,
            action: 'scroll_to_cta'
          }
        })
      }).catch(console.error);
    }
    
    // Scroll to final CTA
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  function handleClose() {
    visible = false;
    
    // Track timer close
    if (browser) {
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'urgency_timer_closed',
          data: { timerText, scarcityCount }
        })
      }).catch(console.error);
    }
  }
  
  // Update scarcity count every 30 seconds
  onMount(() => {
    const scarcityInterval = setInterval(updateScarcityCount, 30000);
    return () => clearInterval(scarcityInterval);
  });
</script>

{#if visible && timerText}
  <div class="urgency-timer" class:visible>
    <div class="timer-content" on:click={handleClick} on:keydown role="button" tabindex="0">
      <button class="close-btn" on:click|stopPropagation={handleClose} aria-label="Close timer">
        ×
      </button>
      
      <div class="timer-text">
        {timerText}
      </div>
      
      <div class="scarcity-text">
        Only {scarcityCount} spots left!
      </div>
      
      <div class="action-hint">
        👆 Click to secure your spot
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .urgency-timer {
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 999;
    transform: translateX(400px);
    transition: transform 0.5s ease;
    opacity: 0;
    
    &.visible {
      transform: translateX(0);
      opacity: 1;
    }
    
    @media (max-width: 768px) {
      top: auto;
      bottom: 80px;
      right: 10px;
      left: 10px;
      transform: translateY(200px);
      
      &.visible {
        transform: translateY(0);
      }
    }
  }
  
  .timer-content {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    padding: 1rem;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    min-width: 250px;
    text-align: center;
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    transition: all 0.3s ease;
    animation: pulse 2s infinite;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(255, 107, 107, 0.6);
      animation: none;
    }
    
    @media (max-width: 768px) {
      min-width: unset;
      width: 100%;
    }
  }
  
  .close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.75rem;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.25rem;
    cursor: pointer;
    transition: color 0.3s ease;
    line-height: 1;
    
    &:hover {
      color: white;
    }
  }
  
  .timer-text {
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    padding-right: 1.5rem;
  }
  
  .scarcity-text {
    font-weight: 600;
    font-size: 0.85rem;
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }
  
  .action-hint {
    font-size: 0.8rem;
    opacity: 0.8;
    font-weight: 500;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    }
    50% {
      transform: scale(1.02);
      box-shadow: 0 12px 35px rgba(255, 107, 107, 0.6);
    }
  }
  
  // Special animation for mobile
  @media (max-width: 768px) {
    .timer-content {
      animation: mobilePulse 3s infinite;
    }
    
    @keyframes mobilePulse {
      0%, 90%, 100% {
        transform: scale(1);
      }
      95% {
        transform: scale(1.05);
      }
    }
  }
  
  // Breathing glow effect
  .timer-content::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #ff6b6b, #ee5a24, #ff6b6b);
    border-radius: 17px;
    z-index: -1;
    opacity: 0.7;
    animation: breathe 2s ease-in-out infinite;
  }
  
  @keyframes breathe {
    0%, 100% {
      opacity: 0.7;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.02);
    }
  }
</style>