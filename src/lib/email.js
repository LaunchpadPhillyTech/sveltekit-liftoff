// src/lib/email.js
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY, SENDGRID_FROM_EMAIL } from '$env/static/private';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function sendWelcomeEmail(email, businessName) {
    const msg = {
        to: email,
        from: SENDGRID_FROM_EMAIL,
        subject: '🚀 Your Revenue Robot Setup Begins Now!',
        html: `
      <h1>Welcome ${businessName}!</h1>
      <p>Your Revenue Robot is being prepared...</p>
      <p>Next steps:</p>
      <ul>
        <li>Our specialist will call you within 24 hours</li>
        <li>Your chatbot will be live in 24 hours</li>
        <li>Start seeing results immediately</li>
      </ul>
    `
    };

    await sgMail.send(msg);
}