import { useLanguage } from '../context/LanguageContext'
type AboutProps = {
  id: string
}


function About({ id }: AboutProps) {
  const { t } = useLanguage()
  return (
    <section id={id} className="about">
      <div className="about-content">
        <span className="section-label"> {t.about.label}</span>

        <h2> {t.about.title} </h2>

        <p>
          {t.about.paragraph1}
        </p>

        <p>
          {t.about.paragraph2}
        </p>

        <p>
          {t.about.paragraph3}
        </p>

        <p>
          {t.about.paragraph4}
        </p>
        <p className="about-availability">
  {t.about.availability}
</p>
      </div>
    </section>
  )
}

export default About
        