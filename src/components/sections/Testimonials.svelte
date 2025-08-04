<!-- src/components/sections/Testimonials.svelte -->
<script>
  import Badge from "../ui/Badge.svelte";

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      business: "Mitchell's Boutique",
      location: "Denver, CO",
      image: "👩‍💼",
      rating: 5,
      quote:
        "GY6AI increased our online sales by 127% in just 30 days. The setup was incredibly easy and the results were immediate!",
      result: "127% Sales Increase",
      timeframe: "30 days",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      business: "Rodriguez Auto Repair",
      location: "Phoenix, AZ",
      image: "👨‍🔧",
      rating: 5,
      quote:
        "I was skeptical at first, but this AI chatbot booked 23 appointments while I was sleeping. It's like having a sales person that never takes a break!",
      result: "23 Appointments Booked",
      timeframe: "Overnight",
    },
    {
      id: 3,
      name: "Jessica Chen",
      business: "Chen Marketing Agency",
      location: "San Francisco, CA",
      image: "👩‍💻",
      rating: 5,
      quote:
        "The lead qualification feature is incredible. GY6AI now handles all our initial client screenings and only sends me qualified prospects.",
      result: "89% Lead Quality Improvement",
      timeframe: "60 days",
    },
    {
      id: 4,
      name: "David Thompson",
      business: "Thompson Fitness Studio",
      location: "Miami, FL",
      image: "💪",
      rating: 5,
      quote:
        "Since implementing GY6AI, we've signed up 47 new members without me having to personally answer every inquiry. Game changer!",
      result: "47 New Members",
      timeframe: "45 days",
    },
    {
      id: 5,
      name: "Lisa Park",
      business: "Park Real Estate",
      location: "Austin, TX",
      image: "🏠",
      rating: 5,
      quote:
        "The 24/7 availability means I never miss a potential client. GY6AI has helped me close 12 deals that would have been lost otherwise.",
      result: "$340K in Sales",
      timeframe: "90 days",
    },
    {
      id: 6,
      name: "Tom Wilson",
      business: "Wilson's Restaurant",
      location: "Chicago, IL",
      image: "👨‍🍳",
      rating: 5,
      quote:
        "Reservation bookings are up 85% and customer complaints are down 60%. The AI handles everything perfectly!",
      result: "85% More Reservations",
      timeframe: "6 weeks",
    },
  ];
</script>

<section class="testimonials section">
  <div class="container">
    <div class="testimonials-header">
      <Badge variant="success">Real Results</Badge>
      <h2>What Our Customers Are Saying</h2>
      <p class="subtitle">
        Join 12,000+ businesses already transforming their customer experience
      </p>
    </div>

    <div class="testimonials-grid">
      {#each testimonials as testimonial}
        <div class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar">{testimonial.image}</div>
            <div class="customer-info">
              <h4>{testimonial.name}</h4>
              <p class="business">{testimonial.business}</p>
              <p class="location">{testimonial.location}</p>
            </div>
            <div class="stars">
              {#each Array(testimonial.rating) as _}
                ⭐
              {/each}
            </div>
          </div>

          <blockquote>"{testimonial.quote}"</blockquote>

          <div class="results">
            <div class="result-metric">
              <span class="metric">{testimonial.result}</span>
              <span class="timeframe">in {testimonial.timeframe}</span>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="testimonials-cta">
      <h3>Ready to Get Results Like These?</h3>
      <button class="results-cta-btn">Start Your Success Story</button>
    </div>
  </div>
</section>

<style lang="scss">
  .testimonials {
    background: #0a0a0a;
    color: white;
    text-align: center;
  }

  .testimonials-header {
    margin-bottom: 4rem;

    h2 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      margin: 1rem 0;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 1.2rem;
      color: #888;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .testimonial-card {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    border: 1px solid rgba(79, 172, 254, 0.2);
    border-radius: 20px;
    padding: 2rem;
    text-align: left;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #4facfe, #00f2fe);
    }

    &:hover {
      transform: translateY(-5px);
      border-color: rgba(79, 172, 254, 0.5);
      box-shadow: 0 15px 40px rgba(79, 172, 254, 0.2);
    }
  }

  .testimonial-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .avatar {
    font-size: 3rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(79, 172, 254, 0.1);
    border-radius: 50%;
    flex-shrink: 0;
  }

  .customer-info {
    flex: 1;

    h4 {
      margin: 0 0 0.3rem 0;
      font-size: 1.1rem;
      color: #4facfe;
    }

    .business {
      font-weight: 600;
      margin: 0 0 0.2rem 0;
      color: white;
    }

    .location {
      font-size: 0.9rem;
      color: #888;
      margin: 0;
    }
  }

  .stars {
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  blockquote {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #ccc;
    margin: 0 0 1.5rem 0;
    font-style: italic;
    border: none;
    padding: 0;
  }

  .results {
    border-top: 1px solid rgba(79, 172, 254, 0.2);
    padding-top: 1rem;
  }

  .result-metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .metric {
      font-size: 1.3rem;
      font-weight: 700;
      color: #4facfe;
      margin-bottom: 0.3rem;
    }

    .timeframe {
      font-size: 0.9rem;
      color: #888;
    }
  }

  .testimonials-cta {
    background: linear-gradient(
      135deg,
      rgba(79, 172, 254, 0.1),
      rgba(0, 242, 254, 0.1)
    );
    border: 2px solid rgba(79, 172, 254, 0.3);
    border-radius: 20px;
    padding: 3rem 2rem;

    h3 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: #4facfe;
    }
  }

  .results-cta-btn {
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

  @media (max-width: 768px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }

    .testimonial-card {
      text-align: center;
    }

    .testimonial-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .result-metric {
      align-items: center;
    }
  }
</style>
