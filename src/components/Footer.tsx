function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {currentYear} Jessica Maciel. Todos os direitos reservados.
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
          Voltar ao topo
        </a>
      </div>
    </footer>
  )
}

export default Footer