import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeManager() {
  const { themes, index, setIndex, auto, setAuto } = useContext(ThemeContext)
  const [bg, setBg] = useState(themes[0])

  useEffect(() => {
    setBg(themes[index])
  }, [themes, index])

  return (
    <div className="fixed inset-0 -z-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={bg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(1.05) contrast(1.02)'
          }}
        />
      </AnimatePresence>

      {/* gradient overlay for stronger neon look */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(6,6,23,0.35), rgba(10,6,25,0.6))'
      }} />

      {/* small controls */}
      <div className="fixed right-4 bottom-4 z-50">
        <div className="glass rounded-xl p-2 flex items-center gap-2">
          <button onClick={() => setIndex((p) => (p - 1 + themes.length) % themes.length)} className="px-3 py-2 rounded-md bg-white/6 hover:bg-white/8">Prev</button>
          <button onClick={() => setIndex((p) => (p + 1) % themes.length)} className="px-3 py-2 rounded-md bg-white/6 hover:bg-white/8">Next</button>
          <button onClick={() => setAuto(!auto)} className="px-3 py-2 rounded-md bg-white/6 hover:bg-white/8">
            {auto ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
    </div>
  )
}