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
      />

      <About
        id="about"
      />
       <Projects id="projects" />
<Skills id="skills" />
<Experience id="experience" />
     
      <Form id="contact" />

      <Footer />


   
    </>
  )
}

export default App