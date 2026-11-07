export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <span className="frame-tag">FRAME 01 — ORIGIN</span>
        <div className="about-grid">
          <div className="about-copy">
            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', marginBottom: 24 }}>
              Beyond casual movie watching
            </h2>
            <p>
              VITC Film Society is the official recreational and cultural filmmaking
              club under the Office of Student Welfare at VIT Chennai. We exist for
              one reason: <strong>learning through entertainment.</strong>
            </p>
            <p>
              Most people watch films. We wanted a place to interrogate them — then
              go make our own. That's the whole premise: a collaborative space where
              students at any skill level can learn, experiment, and actually execute
              real filmmaking projects, from a blank page to a locked cut.
            </p>
            <p>
              No department is more important than another here. A script is only
              as good as the frame it's shot in, and a frame is only as good as the
              cut it lives in. We run as one crew across five departments, plus the
              people who make sure anyone hears about what we made.
            </p>
          </div>
          <div className="clapper">
            <div className="clapper-top" />
            <div className="clapper-body">
              <div className="clapper-row"><span>Production</span><span>VITC Film Society</span></div>
              <div className="clapper-row"><span>Parent Body</span><span>Office of Student Welfare</span></div>
              <div className="clapper-row"><span>Campus</span><span>VIT Chennai</span></div>
              <div className="clapper-row"><span>Handle</span><span>@filmsocvitc</span></div>
              <div className="clapper-row"><span>Genre</span><span>Recreational / Cultural</span></div>
              <div className="clapper-row"><span>Take</span><span>Always one more</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
