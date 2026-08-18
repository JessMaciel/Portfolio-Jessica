import { useLanguage } from '../context/LanguageContext'

export type SkillsProps = {
  id: string
}

function Skills({ id }: SkillsProps) {
  const { t } = useLanguage()

  const skills = [
    'HTML5',
    'CSS3',
    'SASS',
    'PHP',
    t.skills.database,
    'JavaScript',
    'TypeScript',
    'React',
    'Git',
    'GitHub',
    'WordPress',
    'Shopify',
    'UI/UX',
    'SEO',
  ]

  return (
    <section id={id} className="skills">
      <h2>{t.skills.title}</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills