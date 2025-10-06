import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { title: 'Premium Design', text: 'Glass-morphism, gradients and neon glows.' },
  { title: 'Smooth Animations', text: 'Framer Motion for text and cards.' },
  { title: 'Responsive', text: 'Looks great on mobile and desktop.' }
]

export default function Features() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 * i }} className="glass rounded-2xl p-6 glow-edge shadow-neon-lg">
            <h3 className="text-white font-semibold">{it.title}</h3>
            <p className="text-slate-300 mt-2 text-sm">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}