import Header from './components/Header.jsx'
import Bio from './components/Bio.jsx'
import Links from './components/Links.jsx'
import Footer from './components/Footer.jsx'
// BUG (issue #10): unused import left in the file
import { useEffect } from 'react'

export default function App() {
  return (
    <main className="card">
      <Header />
      <Bio />
      <Links />
      <Footer />
    </main>
  )
}
