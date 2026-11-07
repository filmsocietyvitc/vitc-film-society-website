// Turns "text **bold** text" into React nodes with <b> for the bold part.
export default function renderBold(text) {
  const parts = text.split('**')
  return parts.map((part, i) =>
    i % 2 === 1 ? <b key={i}>{part}</b> : <span key={i}>{part}</span>
  )
}
