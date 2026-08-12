export type  SkillsProps = {
    id: string

}
const skills = [
  'HTML5',
  'CSS3',
  'SASS',
  'PHP',
  'Database',
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

function Skills({ id }: SkillsProps) {
  return (
   <section id={id} className="skills">
      <h2>Tecnologias & Competências</h2>

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