import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightTheme, setLightTheme] = useState(false)

  function toggleTheme() {
    setLightTheme(!lightTheme)

    if (lightTheme) {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  return (
    <nav className="nav-menu">
      <div className="logo">
        Jessica Maciel
      </div>

      <div className="desktop-menu">
        <a href="#home">Início</a>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Competências</a>
        <a href="#experience">Experiência</a>
        <a href="#contact">Contato</a>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          {lightTheme ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Início
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          Sobre
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Competências
        </a>

        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experiência
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projetos
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contato
        </a>

        <button
          className="theme-toggle mobile-theme-toggle"
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          {lightTheme ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar