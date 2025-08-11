<script>
  export let linkedinUrl = '';
  export let size = 'medium'; // small, medium, large
  export let variant = 'default'; // default, minimal
</script>

<div class="social-links {size} {variant}">
  {#if linkedinUrl}
    <a 
      href={linkedinUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      class="social-link linkedin"
      aria-label="LinkedIn Profile"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      <span class="sr-only">LinkedIn</span>
    </a>
  {/if}
</div>

<style>
  .social-links {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    text-decoration: none;
    border-radius: 50%;
    background: transparent;
  }

  .social-link:hover {
    transform: translateY(-2px);
  }

  /* Size variants */
  .small .social-link {
    width: 32px;
    height: 32px;
  }

  .medium .social-link {
    width: 40px;
    height: 40px;
  }

  .large .social-link {
    width: 48px;
    height: 48px;
  }

  .social-link svg {
    width: 60%;
    height: 60%;
    transition: color 0.3s ease;
  }

  /* Default variant */
  .default .linkedin {
    color: #666;
    background: rgba(0, 119, 181, 0.1);
  }

  .default .linkedin:hover {
    color: #0077b5;
    background: rgba(0, 119, 181, 0.2);
  }

  /* Minimal variant */
  .minimal .linkedin {
    color: #666;
  }

  .minimal .linkedin:hover {
    color: #0077b5;
  }

  /* Screen reader only */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>