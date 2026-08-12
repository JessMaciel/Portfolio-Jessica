type AboutProps = {
  id: string
}


function About({ id }: AboutProps) {
  return (
    <section id={id} className="about">
      <div className="about-content">
        <span className="section-label">Sobre mim</span>

        <h2>Design, tecnologia e desenvolvimento web.</h2>

        <p>
          Sou desenvolvedora Front-End com experiência em Web Design,
          UI/UX e criação de experiências digitais.
        </p>

        <p>
          Vivi no Canadá por cerca de 10 anos, onde trabalhei com
          desenvolvimento web e também como instrutora nas áreas de
          Web Design, Design Gráfico e Pós-Produção de Vídeo.
        </p>

        <p>
          Em 2025, retornei ao Brasil e passei a direcionar minha carreira
          ainda mais para desenvolvimento de software. Concluí o curso de
          Programação Web pelo SENAC e atualmente continuo expandindo meus
          conhecimentos em desenvolvimento.
        </p>

        <p>
          Minha experiência combina pensamento visual, experiência do
          usuário e código, permitindo transformar ideias em interfaces
          funcionais, intuitivas e responsivas.
        </p>
      </div>
    </section>
  )
}

export default About