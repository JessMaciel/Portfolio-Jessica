export type Experience = {
  company: string
  role: string
  period: string
  description: string
}

const experiences: Experience[] = [
  {
    company: 'Trebas Institute',
    role: 'Instrutora de Design e Mídia Digital',
    period: '2023 - 2025',
    description:
      'Ensino e acompanhamento técnico em design, animação e fluxos de pós-produção.'
  },
  {
    company: 'College CDI',
    role: 'Instrutora de Web e Graphic Design',
    period: '2019 – 2023',
    description:
      'Ensino de HTML, CSS, design responsivo, UI/UX e ferramentas Adobe.'
  },
  {
    company: 'TIMO',
    role: 'Web Designer',
    period: '2020',
    description:
      'Criação de interfaces, otimização para SEO e apoio a campanhas digitais.'
  },
  {
    company: 'Wenesis',
    role: 'Integração Web / Front-End',
    period: '2016 – 2017',
    description:
      'Desenvolvimento de sites responsivos com HTML, CSS, JavaScript, WordPress e Shopify.'
  }
]

export default experiences