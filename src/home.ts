export function renderHomePage(container: HTMLElement) {
    container.innerHTML = `
     <section class="hero">
    <h1>PSYCHIC READINGS, <br> ASTOUNDINGLY <br> <span class="highlight">RELATABLE</span></h1>
    <p>Are you at crossroads and want to know what each path holds so you can make a wise decision that's in alignment with your goals?</p>
  </section>
    <section class="psychic-reading">
    <h2>I WILL TAKE YOU TO PLACES YOU HAVE NEVER BEEN</h2>
    <div class="psychic-content">
      <div class="psychic-text scroll-animate">
        <p>Are you at crossroads and want to know what each path holds, so you can make a wise decision that's in alignment with your goals? Sometimes we are too emotionally attached to give ourselves objective advice. It is good to get a professional to clarify with accurate insight into what the future may hold.</p>
        
        <p>I was born with psychic ability and I am proud to have been successfully providing psychic readings for both local and international clients for over 34 years. I have experience with helping people from all walks of life to overcome many obstacles in their lives and pride myself on being helpful, understanding, supportive and honest.</p>
        
        <p>Focussing on positive information that will help you choose your optimal life path. Whether it's work, business, relationships or family I am able to guide you in the right direction. I've had business clients who book with me whenever they're getting ready to hire someone important to their company. That's one of my specialities actually... sort of a psychic human resources person.</p>
        
        <p>I've had business clients book me when there are multiple choices of investment opportunities and they want to look into each of them to ensure the correct choice is made.</p>
      </div>
      <div class="psychic-image">
        <img src="images/image.png" alt="Professional Psychic Reader" class="profile-pic">
      </div>
    </div>
  </section>
   <section class="pricing-section">
      <h2 class="section-title">PSYCHIC SERVICES</h2>
      <div class="pricing-grid">
        <!-- Pricing Card 1 -->
        <div class="pricing-card scroll-animate">
          <div class="card-header">
            <h3>10 Minute Reading</h3>
            <div class="crystal-icon">💎</div>
          </div>
          <div class="card-price">$45.80<span>/session</span></div>
          <ul class="card-features">
          </ul>
          <button class="card-button">Book Now</button>
        </div>

        <!-- Pricing Card 2 (Featured) -->
        <div class="pricing-card featured scroll-animate">
          <div class="card-badge">Most Popular</div>
          <div class="card-header">
            <h3>20 Minute Reading</h3>
            <div class="crystal-icon">🔮</div>
          </div>
          <div class="card-price">$91.60<span>/session</span></div>
          <ul class="card-features">
            
          </ul>
          <button class="card-button">Book Now</button>
        </div>

        <!-- Pricing Card 3 -->
        <div class="pricing-card scroll-animate">
          <div class="card-header">
            <h3>30 Minute Reading</h3>
            <div class="crystal-icon">✨</div>
          </div>
          <div class="card-price">$137.40<span>/session</span></div>
          <ul class="card-features">
          </ul>
          <button class="card-button">Book Now</button>
        </div>


        <!-- Pricing Card 4 -->
        <div class="pricing-card scroll-animate">
          <div class="card-header">
            <h3>40 Minute Reading</h3>
            <div class="crystal-icon">🃏 </div>
          </div>
          <div class="card-price">$183.20<span>/session</span></div>
          <ul class="card-features">
          </ul>
          <button class="card-button">Book Now</button>
        </div>


        <!-- Pricing Card 5 -->
        <div class="pricing-card scroll-animate">
          <div class="card-header">
            <h3>60 Minute Reading</h3>
            <div class="crystal-icon">🌙</div>
          </div>
          <div class="card-price">$275.00<span>/session</span></div>
          <ul class="card-features">
          </ul>
          <button class="card-button">Book Now</button>
        </div>
      </div>
    </section>
    `;
  }