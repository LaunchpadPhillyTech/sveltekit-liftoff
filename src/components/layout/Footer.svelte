<!-- src/components/layout/Footer.svelte -->
<script>
  import SocialLinks from '$components/ui/SocialLinks.svelte';
  
  // You can customize this LinkedIn URL
  const linkedinUrl = ''; // Replace with actual LinkedIn URL
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="social-section">
        <SocialLinks {linkedinUrl} size="medium" variant="minimal" />
      </div>
      
      <div class="legal-section">
        <div class="legal-links">
          <a href="/terms">Terms of Service</a>
          <span class="separator">|</span>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <p class="copyright">&copy; 2024 GY6AI. All rights reserved.</p>
      </div>
      
      <div class="spacer"></div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: #1a1a1a;
    padding: 2rem 0;
    color: #666;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    gap: 2rem;
  }
  
  .social-section {
    justify-self: start;
  }
  
  .legal-section {
    justify-self: center;
    text-align: center;
  }
  
  .spacer {
    /* Empty div for grid balance */
  }
  
  .legal-links {
    margin-bottom: 0.5rem;
  }
  
  .legal-links a {
    color: #888;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }
  
  .legal-links a:hover {
    color: #fff;
  }
  
  .separator {
    margin: 0 1rem;
    color: #444;
  }
  
  .copyright {
    font-size: 0.85rem;
    margin: 0;
    color: #666;
  }
  
  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      text-align: center;
    }
    
    .social-section {
      justify-self: center;
      order: 2;
    }
    
    .legal-section {
      order: 1;
    }
    
    .spacer {
      display: none;
    }
    
    .legal-links {
      margin-bottom: 1rem;
    }
    
    .separator {
      margin: 0 0.5rem;
    }
  }
</style>
