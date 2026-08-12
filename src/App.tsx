import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Form from './components/Form'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar />

      <Hero
        id="home"
        name="Jessica Maciel"
        title="Desenvolvedora Web & Front-End"
        description="Crio experiências digitais que unem código, design e usabilidade."
      />

      <About
        id="about"
      />
<Skills id="skills" />
<Experience id="experience" />
      <Projects id="projects" />
      <Form id="contact" />

      <Footer />


   
    </>
  )
}

export default App