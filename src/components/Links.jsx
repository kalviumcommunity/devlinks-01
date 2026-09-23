import { useState } from 'react'

const links = [
  { label: 'GitHub', url: 'https://github.com/kalviumcommunity' },
  { label: 'Twitter', url: 'https://twitter.com' },
]

export default function Links() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="links">
      {links.map((l) => (
        <a key={l.label} className="btn btn-primary" href={l.url} target="_blank" rel="noopener noreferrer">
          {l.label}
        </a>
      ))}
      <button id="copy-btn" className="btn btn-primary" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy profile link'}
      </button>
    </section>
  )
}
