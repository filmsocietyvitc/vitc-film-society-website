import { blogPosts } from '../data'

export default function Blog() {
  return (
    <section id="blog">
      <div className="wrap">
        <span className="frame-tag">FRAME 05 — CINEPHILE CORNER</span>
        <div className="section-head">
          <h2>Reviews from the crew</h2>
          <p>Student-written breakdowns, director spotlights and the odd argument about a final scene.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <div className="blog-card" key={i}>
              <div className="blog-kicker">{post.kicker}</div>
              <div className="blog-title">{post.title}</div>
              <div className="blog-excerpt">{post.excerpt}</div>
              <div className="blog-byline">{post.byline}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
