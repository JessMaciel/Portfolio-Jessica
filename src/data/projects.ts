import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    image: '/images/clinica-medica.png',
    technologies: [
      'HTML5',
      'CSS3',
      'PHP',
      'MySQL',
      'JavaScript',
      'Bootstrap',
    ],
    github: 'https://github.com/JessMaciel/Clinica-M-dica',
  },

  {
    id: 2,
    image: '/images/doce-encanto.png',
    technologies: ['HTML5', 'CSS3'],
    github: 'https://github.com/JessMaciel/Projeto-Doce-Encanto',
    demo: 'https://jessmaciel.github.io/Projeto-Doce-Encanto/',
  },

  {
    id: 3,
    image: '/images/portfolio.png',
    technologies: ['React', 'TypeScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/JessMaciel/Portfolio-Jessica',
    demo: 'https://portfolio-jessica-seven.vercel.app/',
  },

  {
    id: 4,
    image: '/images/senac-bootstrap.png',
    technologies: ['HTML5', 'CSS3', 'Bootstrap'],
    github: 'https://github.com/JessMaciel/Senac-Bootstrap',
    demo: 'https://senac-bootstrap.vercel.app/',
  },

  {
    id: 5,
    image: '/images/cv-eletronico.png',
    technologies: ['HTML5', 'CSS3', 'Bootstrap'],
    github: 'https://github.com/JessMaciel/CV-Online',
    demo: 'https://cv-online-ten-sandy.vercel.app/',
  },
]

export default projects