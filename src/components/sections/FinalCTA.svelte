<!-- src/components/sections/FinalCTA.svelte -->
<script>
  import LeadForm from '$components/forms/LeadForm.svelte';
  import { showSocialProof, uiActions } from '$stores/ui.js';
  
  export let id = "final-cta";
  
  let showForm = false;
  
  function handleCTAClick() {
    showForm = true;
    
    // Hide distracting elements
    showSocialProof.set(false);
    
    // Update scarcity
    uiActions.updateScarcityCount();
    
    // Track conversion
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'final_cta_clicked',
        data: { 
          location: 'final-cta',
          action: 'get_started'
        }
      })
    }).catch(console.error);
    
    // Show success notification
    uiActions.addNotification({
      type: 'success',
      message: 'Almost there! Complete the form to secure your Revenue Robot.',
      duration: 4000
    });
  }
  
  function handleFormSuccess(event) {
    showForm = false;
    
    // Track successful conversion
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'lead_created',
        data: { source: 'final-cta' }
      })
    });
  }
</script>

<section {id} class="final-cta section">
  <div class="container">
    <h2>Ready to Transform Your Business?</h2>
    <p>Join thousands of businesses already using GY6AI</p>
    
    {#if !showForm}
      <button class="cta-button" on:click={handleCTAClick}>
        Get Started Now - FREE
      </button>
    {:else}
      <LeadForm 
        source="final-cta" 
        on:success={handleFormSuccess}
      />
    {/if}
  </div>
</section>

<style>
  .final-cta {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    color: white;
    text-align: center;
  }
  
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
  
  .cta-button {
    background: white;
    color: #4facfe;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .cta-button:hover {
    transform: translateY(-3px);
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    h2 { 
      font-size: 2rem; 
    }
    p { 
      font-size: 1.1rem; 
    }
    .cta-button { 
      padding: 0.8rem 1.5rem;
      font-size: 1.1rem;
    }
  }
</style>
