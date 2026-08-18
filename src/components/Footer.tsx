import { useLanguage } from '../context/LanguageContext'
function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {currentYear} Jessica Maciel. {t.footer.allRightsReserved}
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/JessMaciel"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jessica-maciel-51639798/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a href="#home">
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  )
}

export default Footer