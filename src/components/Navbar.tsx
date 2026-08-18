import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightTheme, setLightTheme] = useState(false)
  const { t, language, setLanguage } = useLanguage()

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
     

        <a href="#home">{t.navbar.home}</a>
<a href="#about">{t.navbar.about}</a>
<a href="#skills">{t.navbar.skills}</a>
<a href="#experience">{t.navbar.experience}</a>
<a href="#projects">{t.navbar.projects}</a>
<a href="#contact">{t.navbar.contact}</a>
<div className="language-switcher">
  <button
    className={language === 'pt' ? 'active' : ''}
    onClick={() => setLanguage('pt')}
  >
    PT
  </button>

  <button
    className={language === 'en' ? 'active' : ''}
    onClick={() => setLanguage('en')}
  >
    EN
  </button>

  <button
    className={language === 'fr' ? 'active' : ''}
    onClick={() => setLanguage('fr')}
  >
    FR
  </button>
</div>
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
        <div className="language-switcher">
  <button
    className={language === 'pt' ? 'active' : ''}
    onClick={() => setLanguage('pt')}
  >
    PT
  </button>

  <button
    className={language === 'en' ? 'active' : ''}
    onClick={() => setLanguage('en')}
  >
    EN
  </button>
   <button
    className={language === 'fr' ? 'active' : ''}
    onClick={() => setLanguage('fr')}
  >
    FR
  </button>
</div>
        <a href="#home" onClick={() => setMenuOpen(false)}>
         {t.navbar.home}
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          {t.navbar.about}
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          {t.navbar.skills}
        </a>

        <a href="#experience" onClick={() => setMenuOpen(false)}>
          {t.navbar.experience}   
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          {t.navbar.projects}
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          {t.navbar.contact}
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