type HeroProps = {
  id: string
  name: string
  title: string
  description: string
}

function Hero({
  id,
  name,
  title,
  description
}: HeroProps) {
  return (
    <section id={id} className="hero">

      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-intro">Olá, eu sou</span>

          <h1>{name}</h1>

          <h2>{title}</h2>

          <p>{description}</p>
          <h5>Disponivel para oportunidades presenciais ou remotas</h5>

          <div className="hero-actions">
            <a href="#projects" className="btn-primario">
              Ver projetos
            </a>

            <a href="#contact" className="btn-secundario">
              Entrar em contato
            </a>
          </div>
          
        </div>

        <div className="hero-image">
          <img
            src="/images/jessica.png"
            alt="Jessica Maciel"
          />
        </div>
      </div>

    </section>
  )
}

export default Hero