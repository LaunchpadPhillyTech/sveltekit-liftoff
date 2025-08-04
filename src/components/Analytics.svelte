<!-- src/components/Analytics.svelte -->
<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  
  let startTime = Date.now();
  let scrollDepth = 0;
  let maxScrollDepth = 0;
  let interactionCount = 0;
  
  onMount(() => {
    if (!browser) return;
    
    // Track initial page load
    trackEvent('page_load', {
      path: $page.url.pathname,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
    
    // Scroll tracking
    let ticking = false;
    function updateScrollDepth() {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollDepth = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
      }
      
      ticking = false;
    }
    
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateScrollDepth);
        ticking = true;
      }
    }
    
    // Click tracking
    function onInteraction(event) {
      interactionCount++;
      
      const target = event.target;
      const tagName = target.tagName.toLowerCase();
      const className = target.className;
      const id = target.id;
      const text = target.textContent?.slice(0, 50);
      
      // Track significant interactions
      if (tagName === 'button' || tagName === 'a' || target.closest('button, a')) {
        trackEvent('interaction', {
          type: 'click',
          element: tagName,
          className,
          id,
          text,
          scrollDepth: maxScrollDepth,
          timeOnPage: Date.now() - startTime
        });
      }
    }
    
    // Time milestones
    const timeMilestones = [10, 30, 60, 120, 300]; // seconds
    let milestoneIndex = 0;
    
    const timeInterval = setInterval(() => {
      const timeOnPage = Math.floor((Date.now() - startTime) / 1000);
      
      if (milestoneIndex < timeMilestones.length && timeOnPage >= timeMilestones[milestoneIndex]) {
        trackEvent('time_milestone', {
          milestone: timeMilestones[milestoneIndex],
          scrollDepth: maxScrollDepth,
          interactions: interactionCount
        });
        milestoneIndex++;
      }
    }, 1000);
    
    // Visibility change (tab switching)
    function onVisibilityChange() {
      if (document.hidden) {
        trackEvent('tab_hidden', {
          timeOnPage: Date.now() - startTime,
          scrollDepth: maxScrollDepth
        });
      } else {
        trackEvent('tab_visible', {
          timeOnPage: Date.now() - startTime
        });
      }
    }
    
    // Exit intent (desktop only)
    function onMouseLeave(event) {
      if (event.clientY <= 0 && window.innerWidth > 768) {
        trackEvent('exit_intent', {
          timeOnPage: Date.now() - startTime,
          scrollDepth: maxScrollDepth,
          interactions: interactionCount
        });
      }
    }
    
    // Mobile exit intent (page blur)
    function onPageBlur() {
      if (window.innerWidth <= 768) {
        trackEvent('mobile_exit_intent', {
          timeOnPage: Date.now() - startTime,
          scrollDepth: maxScrollDepth
        });
      }
    }
    
    // Add event listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onInteraction, true);
    document.addEventListener('visibilitychange', onVisibilityChange);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('blur', onPageBlur);
    
    // Cleanup
    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onInteraction);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('blur', onPageBlur);
      
      // Final tracking on component destroy
      trackEvent('session_end', {
        totalTime: Date.now() - startTime,
        maxScrollDepth,
        totalInteractions: interactionCount
      });
    };
  });
  
  // Reactive tracking for route changes
  $: if (browser && $page.url.pathname) {
    trackEvent('route_change', {
      from: document.referrer,
      to: $page.url.pathname,
      timeOnPreviousPage: Date.now() - startTime
    });
    
    // Reset for new page
    startTime = Date.now();
    maxScrollDepth = 0;
    interactionCount = 0;
  }
  
  async function trackEvent(eventName, data = {}) {
    if (!browser) return;
    
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          data: {
            ...data,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            sessionId: getSessionId()
          }
        })
      });
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  }
  
  function getSessionId() {
    let sessionId = sessionStorage.getItem('analytics_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('analytics_session_id', sessionId);
    }
    return sessionId;
  }
  
  // Expose trackEvent globally for components to use
  if (browser) {
    window.trackEvent = trackEvent;
  }
</script>

<!-- This component has no visual output - it's purely for analytics -->

<style>
  /* No styles needed for this component */
</style>