import { useLanguage } from '../context/LanguageContext'

type HeroProps = {
  id: string
  name: string
}

function Hero({
  id,
  name
}: HeroProps) {

  const { t } = useLanguage()

  return (
    <section id={id} className="hero">

      <div className="hero-content">

        <div className="hero-text">

          <span className="hero-intro">
            {t.hero.greeting}
          </span>

          <h1>{name}</h1>

          <h2>{t.hero.title}</h2>

          <p>{t.hero.description}</p>

          <h5>{t.hero.availability}</h5>
        

          <div className="hero-actions">

            <a href="#projects" className="btn-primario">
              {t.hero.projectsButton}
            </a>

            <a href="#contact" className="btn-secundario">
              {t.hero.contactButton}
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