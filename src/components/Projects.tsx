import { useState } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

type ProjectProps = {
  id: string
}

function Projects({ id }: ProjectProps) {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id={id}>
      <h2>Meus Projetos</h2>

      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Ver Menos' : 'Ver Todos'}
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
