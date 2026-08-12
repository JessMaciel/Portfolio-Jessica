import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Clínica Médica',
    image: '/images/clinica-medica.png',
    description:
      'Projeto web desenvolvido durante o curso de Programação Web do SENAC, aplicando conceitos de desenvolvimento back-end e design responsivo.',
    technologies: [
      'HTML5',
      'CSS3',
      'PHP',
      'Banco de Dados MySQL',
      'JavaScript',
      'Bootstrap',
    ],
    github: 'https://github.com/JessMaciel/Clinica-M-dica',
  },

  {
    id: 2,
    title: 'Doce Encanto',
    image: '/images/doce-encanto.png',
    description:
      'Website desenvolvido durante o curso de Programação Web do SENAC, com foco em estruturação de páginas, estilização com CSS e criação de uma interface visual para uma confeitaria.',
    technologies: ['HTML5', 'CSS3'],
    github: 'https://github.com/JessMaciel/Projeto-Doce-Encanto',
    demo: 'https://jessmaciel.github.io/Projeto-Doce-Encanto/',
  },

  {
    id: 3,
    title: 'Portfolio Pessoal',
    image: '/images/portfolio.png',
    description:
      'Portfolio profissional desenvolvido com React e TypeScript para apresentar minha experiência, competências e projetos.',
    technologies: ['React', 'TypeScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/JessMaciel/Portfolio-Jessica',
    demo: 'https://portfolio-jessica-seven.vercel.app/',
  },

  {
    id: 4,
    title: 'Senac Bootstrap',
    image: '/images/senac-bootstrap.png',
    description:
      'Projeto acadêmico desenvolvido durante o curso de Programação Web do SENAC, com foco na criação de interfaces responsivas utilizando Bootstrap e seu sistema de grid e componentes.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap'],
    github: 'https://github.com/JessMaciel/Senac-Bootstrap',
    demo: 'https://senac-bootstrap.vercel.app/',
  },

  {

  {
  id: 5,
  title: 'CV Eletrônico',
  image: '/images/cv-eletronico.png',
  description:
    'Versão web responsiva do meu currículo profissional, desenvolvida com Bootstrap 5 para apresentar experiência, formação e competências em uma interface adaptável a diferentes dispositivos.',
  technologies: ['HTML5', 'CSS3', 'Bootstrap'],
  github: 'https://github.com/JessMaciel/CV-Online',
  demo: 'https://cv-online-8ue3chnh2-jessica-maciel.vercel.app/',
},
]

export default projects
