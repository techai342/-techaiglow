import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-4 z-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-xxl p-4 flex items-center justify-between shadow-neon-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center text-white font-bold shadow-neon-sm">S</div>
            <div className="text-white font-semibold">Studio Pley</div>
          </div>
          <nav className="hidden md:flex gap-6 text-slate-100/80">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Portfolio</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}