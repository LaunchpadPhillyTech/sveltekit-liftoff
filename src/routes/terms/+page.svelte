<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.title = 'Terms of Service - GY6AI';
  });
</script>

<div class="legal-page">
  <div class="container">
    <h1>Terms of Service</h1>
    <p class="last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

    <section>
      <h2>1. Introduction</h2>
      <p>Welcome to GY6AI. These Terms of Service ("Terms") govern your access to and use of our website and services provided by GY6AI ("we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms.</p>
    </section>

    <section>
      <h2>2. Services Provided</h2>
      <p>GY6AI provides AI consulting services, technology solutions, and related professional services. Our services include but are not limited to:</p>
      <ul>
        <li>AI strategy consulting</li>
        <li>Custom AI solution development</li>
        <li>AI implementation and integration</li>
        <li>Training and educational services</li>
        <li>Technical support and maintenance</li>
      </ul>
    </section>

    <section>
      <h2>3. Changes to Terms</h2>
      <p>We reserve the right to modify these Terms at any time. We will notify users of any changes by posting the new Terms on this site. Your continued use of our services after such changes constitutes your acceptance of the new Terms.</p>
    </section>

    <section>
      <h2>4. Account Registration and Use</h2>
      <p>When creating an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for maintaining the confidentiality of your account.</p>
    </section>

    <section>
      <h2>5. Privacy Policy</h2>
      <p>Your privacy is important to us. Please review our <a href="/privacy">Privacy Policy</a>, which describes how we collect, use, and protect your information when you use our services.</p>
    </section>

    <section>
      <h2>6. User Conduct</h2>
      <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services. You may not use our services:</p>
      <ul>
        <li>For any unlawful purpose or to solicit others to unlawful acts</li>
        <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
        <li>To transmit or procure the sending of any advertising or promotional material, including spam</li>
        <li>To transmit any material that is defamatory, offensive, or otherwise objectionable</li>
      </ul>
    </section>

    <section>
      <h2>7. Intellectual Property</h2>
      <p>All intellectual property rights in our services and content are the exclusive property of GY6AI or its licensors. You may not reproduce, distribute, modify, create derivative works from, publicly display, or publicly perform any content from our services without our prior written consent.</p>
    </section>

    <section>
      <h2>8. Third-Party Services</h2>
      <p>Our services may contain links to third-party websites or services that are not owned or controlled by GY6AI. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>
    </section>

    <section>
      <h2>9. Termination</h2>
      <p>We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
    </section>

    <section>
      <h2>10. Governing Law</h2>
      <p>These Terms shall be interpreted and governed by the laws of the jurisdiction in which GY6AI operates, without regard to its conflict of law provisions.</p>
    </section>

    <section>
      <h2>11. Changes to Service</h2>
      <p>We reserve the right to withdraw or amend our services, and any service or material we provide via our website, in our sole discretion without notice. We will not be liable if for any reason all or any part of our services is unavailable at any time or for any period.</p>
    </section>

    <section>
      <h2>12. Disclaimer and Limitation of Liability</h2>
      <p>The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, GY6AI excludes all representations, warranties, conditions, and liability for damages arising from the use of our services.</p>
    </section>

    <section>
      <h2>13. Contact Information</h2>
      <p>If you have any questions about these Terms of Service, please contact us through our website or via email.</p>
    </section>
  </div>
</div>

<style>
  .legal-page {
    padding: 4rem 0;
    background: #f8f9fa;
    min-height: 100vh;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 3rem;
  }

  h1 {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .last-updated {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
    font-style: italic;
  }

  section {
    margin-bottom: 2.5rem;
  }

  h2 {
    color: #34495e;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #3498db;
  }

  p {
    line-height: 1.6;
    color: #444;
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: #444;
  }

  a {
    color: #3498db;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>