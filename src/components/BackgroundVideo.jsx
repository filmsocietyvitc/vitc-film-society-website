// Fixed, full-viewport background video that sits behind every section.
// Drop your video file at public/video-bg.mp4 (and optionally a poster
// image at public/video-bg-poster.jpg to show while it loads).
export default function BackgroundVideo() {
  return (
    <>
      <video
        className="site-bg-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/video-bg-poster.jpg"
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>
      <div className="site-bg-overlay" />
    </>
  )
}
