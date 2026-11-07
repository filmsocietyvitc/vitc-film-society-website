export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-eyebrow">LIGHTS  •  LENS  •  LEGACY •</div>
        <h1>
          PUT THE<br />
          <span className="outline">BUTTER</span> BACK<br />
          IN THE <span className="accent">POPCORN</span>
        </h1>
        <p className="hero-sub">
          We're VITC Film Society — a crew of writers, shooters, editors and critics
          learning cinema by actually making it. Script to screen, one short at a time.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn-primary">Watch Our Shorts</a>
          <a href="#join" className="btn-ghost">Join the Crew</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">6</div>
            <div className="stat-label">Core Domains</div>
          </div>
          <div>
            <div className="stat-num">24fps</div>
            <div className="stat-label">Never Less</div>
          </div>
          <div>
            <div className="stat-num">02</div>
            <div className="stat-label">Flagship Fests / Yr</div>
          </div>
          <div>
            <div className="stat-num">&#8734;</div>
            <div className="stat-label">Retakes Taken</div>
          </div>
        </div>
      </div>
    </header>
  )
}
