import { domains } from '../data'
import renderBold from '../utils/renderBold'

export default function Domains() {
  return (
    <section id="domains">
      <div className="wrap">
        <span className="frame-tag">FRAME 02 — DEPARTMENTS</span>
        <div className="section-head">
          <h2>Six wings, one crew</h2>
          <p>Every short film needs all of these working together. Pick where you start — you won't stay in just one lane for long.</p>
        </div>
        <div className="domain-strip">
          {domains.map((d) => (
            <div className="domain-row" key={d.code}>
              <div className="domain-fr">{d.code}</div>
              <div className="domain-name">{d.name}</div>
              <div className="domain-desc">{renderBold(d.desc)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
