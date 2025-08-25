import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Banner from './components/Banner'
import Services from './components/Services'
import Partners from './components/Partners'


function App() {
 

  return (
    
      <>
        <Hero/>
        <About/>
        <Banner/>
        <Services/>
        <Partners/>
      </>
        
        
    
  )
}

export default App
