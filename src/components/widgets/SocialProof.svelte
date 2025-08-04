<!-- src/components/widgets/SocialProof.svelte -->
<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { showSocialProof, currentSocialMessage } from '$stores/ui.js';
  
  let visible = false;
  let currentMessage = '';
  let socialProofs = [];
  let currentIndex = 0;
  
  onMount(async () => {
    // Fetch social proof messages from database
    try {
      const response = await fetch('/api/social-proof');
      const data = await response.json();
      socialProofs = data.socialProofs || [];
    } catch (error) {
      console.error('Failed to load social proof:', error);
      // Fallback to default messages
      socialProofs = [
        {
          message: "🎉 Sarah from Denver just got her Revenue Robot setup!",
          location: "Denver, CO",
          type: "SIGNUP"
        },
        {
          message: "💰 Mike's Restaurant increased bookings by 47% this week!",
          location: "Miami, FL", 
          type: "SUCCESS"
        },
        {
          message: "⚡ Jessica's Revenue Robot generated 23 leads yesterday!",
          location: "Austin, TX",
          type: "LEADS"
        }
      ];
    }
    
    // Subscribe to social proof store
    const unsubscribe = showSocialProof.subscribe(show => {
      visible = show;
    });
    
    const unsubscribeMessage = currentSocialMessage.subscribe(message => {
      currentMessage = message;
    });
    
    // Start social proof cycle
    startSocialProofCycle();
    
    return () => {
      unsubscribe();
      unsubscribeMessage();
    };
  });
  
  function startSocialProofCycle() {
    if (!browser || socialProofs.length === 0) return;
    
    const showRandomProof = () => {
      const randomProof = socialProofs[Math.floor(Math.random() * socialProofs.length)];
      currentSocialMessage.set(randomProof.message);
      showSocialProof.set(true);
      
      // Track social proof view
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'social_proof_shown',
          data: { 
            message: randomProof.message,
            type: randomProof.type,
            location: randomProof.location
          }
        })
      }).catch(console.error);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        showSocialProof.set(false);
      }, 5000);
    };
    
    // Show first proof after 5 seconds
    setTimeout(() => {
      showRandomProof();
      
      // Then show every 15-25 seconds
      const scheduleNext = () => {
        const delay = Math.random() * 10000 + 15000; // 15-25 seconds
        setTimeout(() => {
          showRandomProof();
          scheduleNext();
        }, delay);
      };
      
      scheduleNext();
    }, 5000);
  }
  
  function handleClose() {
    showSocialProof.set(false);
    
    // Track close event
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'social_proof_closed',
        data: { message: currentMessage }
      })
    }).catch(console.error);
  }
  
  function handleClick() {
    // Track click event
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'social_proof_clicked',
        data: { message: currentMessage }
      })
    }).catch(console.error);
    
    // Scroll to CTA section
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    showSocialProof.set(false);
  }
</script>

{#if visible && currentMessage}
  <div class="social-proof-popup" class:visible>
    <div class="social-proof-content" on:click={handleClick} on:keydown role="button" tabindex="0">
      <button class="close-btn" on:click|stopPropagation={handleClose} aria-label="Close notification">
        ×
      </button>
      <div class="message">
        {currentMessage}
      </div>
      <div class="cta-hint">
        Click to get your Revenue Robot →
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .social-proof-popup {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;
    max-width: 350px;
    transform: translateX(-400px);
    transition: transform 0.5s ease, opacity 0.3s ease;
    opacity: 0;
    
    &.visible {
      transform: translateX(0);
      opacity: 1;
    }
    
    @media (max-width: 768px) {
      left: 10px;
      right: 10px;
      max-width: none;
      bottom: 10px;
    }
  }
  
  .social-proof-content {
    background: rgba(15, 15, 15, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(79, 172, 254, 0.3);
    border-radius: 15px;
    padding: 1rem;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    
    &:hover {
      border-color: #4facfe;
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(79, 172, 254, 0.2);
    }
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      border-radius: 15px 15px 0 0;
    }
  }
  
  .close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.75rem;
    background: none;
    border: none;
    color: #888;
    font-size: 1.25rem;
    cursor: pointer;
    transition: color 0.3s ease;
    line-height: 1;
    
    &:hover {
      color: #ff6b6b;
    }
  }
  
  .message {
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 0.5rem;
    padding-right: 1.5rem;
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .cta-hint {
    color: #4facfe;
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.8;
  }
  
  // Animation keyframes
  @keyframes slideInLeft {
    from {
      transform: translateX(-400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutLeft {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-400px);
      opacity: 0;
    }
  }
  
  // Pulse animation for attention
  .social-proof-popup.visible .social-proof-content {
    animation: slideInLeft 0.5s ease, pulse 2s ease-in-out infinite 2s;
  }
  
  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
    50% {
      box-shadow: 0 12px 35px rgba(79, 172, 254, 0.4);
    }
  }
</style>