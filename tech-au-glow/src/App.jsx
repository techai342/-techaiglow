import React from 'react'
import Navbar from './Navbar'
import ThemeManager from './ThemeManager'
import HeroSection from './HeroSection'
import Features from './Features'
import Footer from './Footer'

export default function App() {
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
