import { useState } from 'react'
import Hero from './sections/Hero'
import NavBar from './layout/NavBar'
import About from './sections/About'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center ">
      <NavBar/>
      <main>
        <Hero/>
        <About/>
        <Education/>
        <Projects/>
         <Contact />
         <Footer/>
      </main>
    </div>
  ) 
}

export default App
