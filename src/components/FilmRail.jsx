import { useEffect, useState } from 'react'

export default function FilmRail({ side }) {
  const [count, setCount] = useState(20)

  useEffect(() => {
    function calc() {
      setCount(Math.ceil(window.innerHeight / 34) + 2)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  return (
    <div className={`filmrail ${side}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div className="sprocket-hole" key={i} />
      ))}
    </div>
  )
}
