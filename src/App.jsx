import { useState } from 'react'
import './App.css'
import HeroSection from './components/heroSection'
import Projects from './components/Projects'
import Experience from './components/Experience'
function App() {

  return (
    <>
    <div className=' bg-zinc-900 '>
    <div className='flex  flex-col justify-center gap-14  max-w-3xl mx-auto pb-16 pt-46'>
      <HeroSection/>
    <Projects/>
<Experience />
    </div>
  


    </div>

    </>
  )
}

export default App
