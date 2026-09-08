import logo from "../assets/logo_oscuro.png"

function Header() {
  return (
    <header className="flex bg-accent items-center justify-between px-8 py-6">
      <span className="text-xl text-text-h font-bold">Mochuelo Games</span>
      <nav className="flex gap-6 text-text-h text-sm">
        <a href="/">Equipo</a>
        <a href="/projects">Proyectos</a>
        <a href="/contact">Contacto</a>
      </nav>
    </header>
  )
}

export default Header