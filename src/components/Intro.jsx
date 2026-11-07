import { useEffect, useState } from "react";
import introVideo from "../assets/intro.mp4";

export default function Intro() {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.classList.add("intro-playing");

    return () => {
      document.body.classList.remove("intro-playing");
    };
  }, []);

  const handleVideoEnd = () => {
    setFadeOut(true);

    setTimeout(() => {
      setHidden(true);
      document.body.classList.remove("intro-playing");
    }, 800);
  };

  if (hidden) return null;

  return (
    <div className={`intro-screen ${fadeOut ? "fade-out" : ""}`}>
      <video
        className="intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      >
        <source src={introVideo} type="video/mp4" />
      </video>
    </div>
  );
}