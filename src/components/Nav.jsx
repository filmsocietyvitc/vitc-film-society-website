import logo from '../assets/logo.png'

export default function Nav() {
  return (
    <nav>
      <div className="wrap navbar">
        <div className="brand">
          <img src={logo} alt="Film Society" className="brand-logo" />
        </div>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#domains">Domains</a>
          <a href="#portfolio">Films</a>
          <a href="#events">Events</a>
          <a href="#blog">Cinephile</a>
          <a href="#team">Team</a>
        </div>
        <a href="#join" className="nav-cta">Join the Crew</a>
      </div>
    </nav>
  )
}
