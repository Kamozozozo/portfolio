import { useState } from 'react'
import Hero from './sections/Hero'
import NavBar from './layout/NavBar'
import About from './sections/About'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center ">
      <NavBar/>
      <main>
        <Hero/>
        <About/>
      </main>
    </div>
  ) 
}

export default App
