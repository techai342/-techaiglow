import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io5'

const TEMP_LINK = "https://tech-ai-zeta.vercel.app/"

const SocialIcon = ({ children, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-md flex items-center justify-center text-white bg-gradient-to-br from-neon-purple to-neon-cyan hover:scale-110 transition transform">
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="mt-12 pb-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-4">© {new Date().getFullYear()} Studio Pley — Crafted with ?</div>
        <div className="flex items-center justify-center gap-4">
          <SocialIcon href={TEMP_LINK}><FaTiktok /></SocialIcon>
          <SocialIcon href={TEMP_LINK}><FaFacebookF /></SocialIcon>
          <SocialIcon href={TEMP_LINK}><IoLogoWhatsapp /></SocialIcon>
          <SocialIcon href={TEMP_LINK}><FaInstagram /></SocialIcon>
        </div>
      </div>
    </footer>
  )
}