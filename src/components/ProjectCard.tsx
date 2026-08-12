import { useState } from 'react'
import { X } from 'lucide-react'
import type { Project } from '../types/project'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [imageOpen, setImageOpen] = useState(false)

  return (
    <>
      <article className="project-card">
        <h3>{project.title}</h3>

        {project.image && (
          <img
            src={project.image}
            alt={`Prévia do projeto ${project.title}`}
            className="project-image"
            onClick={() => setImageOpen(true)}
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

      {imageOpen && project.image && (
        <div
          className="image-modal"
          onClick={() => setImageOpen(false)}
        >
          <button
            className="image-modal-close"
            onClick={() => setImageOpen(false)}
            aria-label="Fechar imagem"
          >
            <X size={28} />
          </button>

          <img
            src={project.image}
            alt={`Prévia ampliada do projeto ${project.title}`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default ProjectCard
