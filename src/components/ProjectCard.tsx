import type { Project } from '../types/project'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      
      {project.image && (
  <img
    src={project.image}
    alt={`Prévia do projeto ${project.title}`}
    className="project-image"
  />
)}

      <p>{project.description}</p>








      <div className="technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="technology">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-links">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver projeto
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard