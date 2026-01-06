import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import BuiltForHosts from './components/BuiltForHosts'
import Transparency from './components/Transparency'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navigation scrollY={scrollY} />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <BuiltForHosts />
      <Transparency />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App

