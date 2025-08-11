<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.title = 'Privacy Policy - GY6AI';
  });
</script>

<div class="legal-page">
  <div class="container">
    <h1>Privacy Policy</h1>
    <p class="last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

    <section>
      <h2>1. Introduction</h2>
      <p>At GY6AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
    </section>

    <section>
      <h2>2. Information We Collect</h2>
      <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
      
      <h3>Personal Data</h3>
      <p>Personally identifiable information, such as your name, email address, phone number, and other contact information that you voluntarily give to us when you register with our services or when you contact us.</p>
      
      <h3>Usage Data</h3>
      <p>Information our servers automatically collect when you access our website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our website.</p>
      
      <h3>Cookies and Tracking Technologies</h3>
      <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies to collect information about your browsing activities and to improve our services.</p>
    </section>

    <section>
      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect about you for various purposes, including:</p>
      <ul>
        <li>To provide, operate, and maintain our services</li>
        <li>To improve, personalize, and expand our services</li>
        <li>To understand and analyze how you use our services</li>
        <li>To develop new products, services, features, and functionality</li>
        <li>To communicate with you about our services and updates</li>
        <li>To process your transactions and manage your orders</li>
        <li>To send you promotional information and marketing materials</li>
        <li>To comply with legal obligations</li>
      </ul>
    </section>

    <section>
      <h2>4. How We Share Your Information</h2>
      <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
      
      <h3>By Law or to Protect Rights</h3>
      <p>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</p>
      
      <h3>Business Transfers</h3>
      <p>We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
      
      <h3>Third-Party Service Providers</h3>
      <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
    </section>

    <section>
      <h2>5. Data Security</h2>
      <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
    </section>

    <section>
      <h2>6. Data Retention</h2>
      <p>We will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
    </section>

    <section>
      <h2>7. Your Privacy Rights</h2>
      <p>Depending on your location, you may have the following rights regarding your personal information:</p>
      <ul>
        <li>The right to access your personal data</li>
        <li>The right to correct inaccurate personal data</li>
        <li>The right to request deletion of your personal data</li>
        <li>The right to object to processing of your personal data</li>
        <li>The right to data portability</li>
        <li>The right to withdraw consent</li>
      </ul>
      <p>To exercise these rights, please contact us using the information provided below.</p>
    </section>

    <section>
      <h2>8. International Data Transfers</h2>
      <p>Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.</p>
    </section>

    <section>
      <h2>9. Third-Party Websites</h2>
      <p>Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.</p>
    </section>

    <section>
      <h2>10. Children's Privacy</h2>
      <p>Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete such information from our files.</p>
    </section>

    <section>
      <h2>11. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>
    </section>

    <section>
      <h2>12. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or our data practices, please contact us through our website or via email.</p>
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

  h3 {
    color: #34495e;
    font-size: 1.2rem;
    margin: 1.5rem 0 0.5rem 0;
    font-weight: 600;
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