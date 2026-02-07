import { useState } from 'react'
import {Hero} from @/sections/hero
import './App.css'
import NavBar from './layout/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center">
      <NavBar/>
      <main>
        <Hero/>
      </main>
    </div>
  )
}

export default App
