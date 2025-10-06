import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/6 text-xs">
              <span className="px-2 py-1 rounded-md bg-gradient-to-r from-neon-purple to-neon-pink text-white text-[11px]">NEW</span>
              <span className="text-slate-300 text-sm">Neon Glass UI • 3D look</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Studio Pley <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-cyan">Studoic</span>
          </motion.h1>

          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-slate-300 max-w-xl">
            Modern neon glassmorphism landing with soft 3D glow. Auto-switching theme backgrounds and animated cards — perfect for a creative agency.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium shadow-neon-sm">Discover</button>
            <button className="px-5 py-3 rounded-xl border border-white/8 text-slate-100 glass">Our Work</button>
          </motion.div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="glass rounded-xl p-3 text-center">
              <div className="text-xs text-slate-300">Clients</div>
              <div className="font-semibold text-white">120+</div>
            </div>
            <div className="glass rounded-xl p-3 text-center">
              <div className="text-xs text-slate-300">Projects</div>
              <div className="font-semibold text-white">320+</div>
            </div>
            <div className="glass rounded-xl p-3 text-center">
              <div className="text-xs text-slate-300">Awards</div>
              <div className="font-semibold text-white">18</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="w-[420px] h-[340px] rounded-xxl glass glow-edge p-6 relative overflow-hidden animate-float">
            <div className="absolute -left-20 -top-10 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-neon-purple to-neon-pink opacity-10 blur-3xl" />
            <div className="relative z-10 h-full flex items-end justify-between">
              <div className="space-y-3">
                <div className="w-[120px] h-[80px] rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 shadow-neon-sm"></div>
                <div className="w-[90px] h-[60px] rounded-lg bg-gradient-to-br from-slate-800 to-slate-700"></div>
              </div>
              <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan shadow-neon-sm flex items-center justify-center text-white font-bold">3D</div>
            </div>
            <div className="absolute bottom-4 left-4 text-xs text-slate-200/80 bg-[rgba(0,0,0,0.22)] px-3 py-1 rounded-md">Studio render</div>
          </div>
        </div>
      </div>
    </section>
  )
}