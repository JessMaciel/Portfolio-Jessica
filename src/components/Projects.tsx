import { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

type ProjectProps = {
  id: string
}

function Projects({ id }: ProjectProps) {
  const [showAll, setShowAll] = useState(false)
  const { t } = useLanguage()

  return (
    <section id={id}>
      <h2>{t.projects.title}</h2>

      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? t.projects.showLess : t.projects.showAll}
      </button>

      <div className="projects-grid">
        {(showAll ? projects : projects.slice(0, 3)).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects