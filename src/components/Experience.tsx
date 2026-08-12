
import experiences from '../data/experience'
export type  ExperienceProps = {
    id: string

}
function Experience({ id }: ExperienceProps) {
  return (
    <section id={id} className="experience">
      <h2>Experiência Profissional</h2>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.role}`}>
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