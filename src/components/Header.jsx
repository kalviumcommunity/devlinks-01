export default function Header() {
  return (
    <header>
      {/* BUG (issue #2): avatar image is missing alt text */}
      <img className="avatar" src="/avatar.png" />
      <h1>Welcome to DevLinks</h1>
    </header>
  )
}
