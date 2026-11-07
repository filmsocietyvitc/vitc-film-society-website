import { reels } from "../data";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrap">
        <span className="frame-tag">FRAME 03 — FILMOGRAPHY</span>

        <div className="section-head">
          <h2>Shorts, reels &amp; behind the scenes</h2>
          <p>A running reel of what the crew has shot, cut and released.</p>
        </div>
      </div>

      <div className="reel-grid">
        {reels.map((r, i) => (
          <div className="reel-cell" key={i}>
            <iframe
              src={r.embed}
              title={r.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <div className="reel-meta">
              <div className="title">{r.title}</div>
              <div className="tc">{r.tc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}