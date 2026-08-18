import { useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import type { Project } from '../types/project'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [imageOpen, setImageOpen] = useState(false)

  const { t } = useLanguage()

  const projectText = t.projects.items[project.id]

  return (
    <>
      <article className="project-card">
        <h3>{projectText.title}</h3>

        {project.image && (
          <img
            src={project.image}
            alt={`${t.projects.preview} ${projectText.title}`}
            className="project-image"
            onClick={() => setImageOpen(true)}
          />
        )}

        <p>{projectText.description}</p>

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
              {t.projects.github}
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.projects.viewProject}
            </a>
          )}
        </div>
      </article>

      {imageOpen &&
        project.image &&
        createPortal(
          <div
            className="image-modal"
            onClick={() => setImageOpen(false)}
          >
            <button
              className="image-modal-close"
              onClick={() => setImageOpen(false)}
              aria-label={t.projects.closeImage}
            >
              <X size={26} />
            </button>

            <img
              src={project.image}
              alt={`${t.projects.enlargedPreview} ${projectText.title}`}
              onClick={(event) => event.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  )
}

export default ProjectCard