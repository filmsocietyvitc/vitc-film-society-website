import { useEffect, useState } from 'react'

const pad = (n) => String(n).padStart(2, '0')

function timecodeFromScroll(scrollPx) {
  const fps = 24
  const totalFrames = Math.floor(scrollPx / 4)
  const frames = totalFrames % fps
  const totalSeconds = Math.floor(totalFrames / fps)
  const seconds = totalSeconds % 60
  const totalMinutes = Math.floor(totalSeconds / 60)
  const minutes = totalMinutes % 60
  const hours = Math.floor(totalMinutes / 60)
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`
}

export default function FrameCounter() {
  const [tc, setTc] = useState(timecodeFromScroll(0))

  useEffect(() => {
    function onScroll() {
      setTc(timecodeFromScroll(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="frame-counter">{tc}</div>
}
