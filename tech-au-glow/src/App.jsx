import React from 'react'
import Navbar from './components/Navbar'
import ThemeManager from './components/ThemeManager'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen relative">
      <ThemeManager />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
