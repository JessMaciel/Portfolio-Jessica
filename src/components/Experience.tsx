import { useLanguage } from '../context/LanguageContext'

type ExperienceProps = {
  id: string
}

function Experience({ id }: ExperienceProps) {
  const { t } = useLanguage()

  return (
    <section id={id} className="experience">
      <h2>{t.experience.title}</h2>

      <div className="experience-list">
        {t.experience.items.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
          >
            <h3>{experience.role}</h3>

            <h4>{experience.company}</h4>

            <span>{experience.period}</span>

            <p>{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience