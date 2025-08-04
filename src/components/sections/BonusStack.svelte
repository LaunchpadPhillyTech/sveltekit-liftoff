<!-- src/components/sections/BonusStack.svelte -->
<script>
  import Badge from '../ui/Badge.svelte';
</script>

<section class="bonus-stack section">
  <div class="container">
    <div class="bonus-header">
      <h2>🎁 Exclusive Bonus Stack</h2>
      <div class="value-tag">
        <span class="strike-through">$5,485 Value</span>
        <span class="free-tag">FREE Today!</span>
      </div>
    </div>
    
    <div class="bonus-grid">
      <div class="bonus-item">
        <div class="bonus-icon">📊</div>
        <h3>Advanced Analytics Dashboard</h3>
        <p class="bonus-value">$497 Value</p>
        <p>Track every conversation, conversion, and customer interaction with detailed insights.</p>
      </div>
      
      <div class="bonus-item">
        <div class="bonus-icon">🎯</div>
        <h3>Lead Scoring & Qualification</h3>
        <p class="bonus-value">$297 Value</p>
        <p>Automatically qualify leads and prioritize your hottest prospects.</p>
      </div>
      
      <div class="bonus-item">
        <div class="bonus-icon">📱</div>
        <h3>Multi-Platform Integration</h3>
        <p class="bonus-value">$397 Value</p>
        <p>Connect to Facebook, Instagram, WhatsApp, and your website simultaneously.</p>
      </div>
      
      <div class="bonus-item">
        <div class="bonus-icon">🤖</div>
        <h3>AI Training Optimization</h3>
        <p class="bonus-value">$797 Value</p>
        <p>Custom AI training for your specific business and industry terminology.</p>
      </div>
      
      <div class="bonus-item">
        <div class="bonus-icon">📈</div>
        <h3>Conversion Rate Optimizer</h3>
        <p class="bonus-value">$697 Value</p>
        <p>AI-powered optimization that increases your conversion rates automatically.</p>
      </div>
      
      <div class="bonus-item">
        <div class="bonus-icon">🎧</div>
        <h3>Priority Support & Training</h3>
        <p class="bonus-value">$2,800 Value</p>
        <p>1-on-1 setup call, training session, and priority support for 90 days.</p>
      </div>
    </div>
    
    <div class="bonus-cta">
      <p class="urgency-text">⚡ This bonus stack disappears in:</p>
      <div class="timer">23:47:12</div>
      <button class="claim-bonus-btn">Claim All Bonuses FREE</button>
    </div>
  </div>
</section>

<style lang="scss">
  .bonus-stack {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.1), transparent 70%);
      pointer-events: none;
    }
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .bonus-header {
    margin-bottom: 3rem;
    
    h2 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .value-tag {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 700;
    animation: pulse 2s infinite;
  }

  .strike-through {
    text-decoration: line-through;
    opacity: 0.8;
    font-size: 1.1rem;
  }

  .free-tag {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  .bonus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .bonus-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(79, 172, 254, 0.2);
    border-radius: 15px;
    padding: 2rem;
    text-align: left;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #4facfe, #00f2fe);
    }

    &:hover {
      transform: translateY(-5px);
      border-color: rgba(79, 172, 254, 0.5);
      box-shadow: 0 10px 30px rgba(79, 172, 254, 0.2);
    }
  }

  .bonus-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .bonus-item h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #4facfe;
  }

  .bonus-value {
    color: #ff6b6b;
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .bonus-item p:last-child {
    color: #ccc;
    line-height: 1.6;
    margin: 0;
  }

  .bonus-cta {
    background: rgba(255, 107, 107, 0.1);
    border: 2px solid #ff6b6b;
    border-radius: 20px;
    padding: 2rem;
    margin-top: 3rem;
  }

  .urgency-text {
    color: #ff6b6b;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .timer {
    font-size: 2.5rem;
    font-weight: 900;
    color: #4facfe;
    margin-bottom: 1.5rem;
    font-family: monospace;
  }

  .claim-bonus-btn {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    color: white;
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(79, 172, 254, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(79, 172, 254, 0.5);
    }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  @media (max-width: 768px) {
    .bonus-grid {
      grid-template-columns: 1fr;
    }
    
    .bonus-item {
      text-align: center;
    }
  }
</style>