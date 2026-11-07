import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <img
          src={logo}
          alt="Film Society"
          className="footer-logo"
        />

        <div className="tagline">
          "Put the butter back into the popcorn."
        </div>

        <p className="footer-motto">
          LIGHTS &middot; LENS &middot; LEGACY
        </p>

        <p>
          VITC FILM SOCIETY &middot; @filmsocvitc &middot; VIT CHENNAI
          &middot; OFFICE OF STUDENT WELFARE
        </p>
      </div>
    </footer>
  );
}