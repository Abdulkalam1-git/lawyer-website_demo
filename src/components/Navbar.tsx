import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FIRM } from '../data/content'
import PremiumButton from './PremiumButton'

const LINKS = [
  { to: '/',             label: 'Home' },
  { to: '/about',        label: 'About' },
  { to: '/practice',     label: 'Practice Areas' },
  { to: '/lawyers',      label: 'Our Lawyers' },
  { to: '/results',      label: 'Case Results' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/blog',         label: 'Insights' },
  { to: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'py-4 bg-[#080705]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        {/* Premium top accent line */}
        <motion.div 
          className="absolute top-0 inset-x-0 h-px"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0.6 }}
          transition={{ duration: 0.8 }}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,150,15,0.6), transparent)' }} 
        />

        <div className="container-law flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link to="/" className="group flex flex-col leading-none select-none relative">
            <motion.span 
              className="font-serif text-[1.4rem] font-light tracking-[0.18em] text-white transition-all duration-500 group-hover:text-gold-400 text-shadow-soft"
              whileHover={{ scale: 1.05 }}
            >
              MERIDIAN
            </motion.span>
            <motion.span 
              className="text-[8px] tracking-[0.5em] uppercase font-bold transition-all duration-500"
              style={{ color: 'rgba(201,150,15,0.8)' }}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, color: '#e6b830' }}
            >
              Law Group
            </motion.span>
            {/* Hover underline */}
            <motion.div
              className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-gold-500 to-gold-300"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-10" aria-label="Primary">
            {LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={link.to}
                  className={`nav-link relative ${pathname === link.to ? 'active' : ''}`}
                >
                  {link.label}
                  {pathname === link.to && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-gold-500 to-gold-300"
                      layoutId="activeNavLink"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Right Actions */}
          <div className="hidden xl:flex items-center gap-6">
            <motion.a
              href={`tel:${FIRM.phone}`}
              className="flex items-center gap-2 text-[10px] tracking-[0.15em] text-[#6b6760] hover:text-gold-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={13} className="group-hover:animate-pulse" />
              <span className="hidden 2xl:inline font-semibold">{FIRM.phone}</span>
            </motion.a>
            
            <PremiumButton to="/booking" size="sm">
              Book Consultation
            </PremiumButton>
          </div>

          {/* Enhanced Mobile Toggle */}
          <motion.button
            onClick={() => setOpen(v => !v)}
            className="xl:hidden relative w-12 h-12 flex items-center justify-center text-[#6b6760] hover:text-gold-400 transition-colors duration-300 rounded-sm hover:bg-white/5"
            aria-label={open ? 'Close menu' : 'Open menu'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span 
                  key="x" 
                  initial={{ rotate: -90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: 90, opacity: 0 }} 
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span 
                  key="m" 
                  initial={{ rotate: 90, opacity: 0 }} 
                  animate={{ rotate: 0, opacity: 1 }} 
                  exit={{ rotate: -90, opacity: 0 }} 
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 xl:hidden"
            style={{ background: 'rgba(8,7,5,0.98)', backdropFilter: 'blur(32px)' }}
          >
            {/* Premium decorative elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
            
            {/* Floating particles */}
            <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-gold-500/20 animate-float" />
            <div className="absolute bottom-32 right-16 w-1 h-1 rounded-full bg-gold-500/30 animate-pulse-gold" />

            <div className="container-law flex flex-col h-full pt-32 pb-16">
              <nav className="flex flex-col gap-2 flex-1">
                {LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link
                      to={link.to}
                      className={`block py-5 font-serif text-3xl md:text-4xl font-light border-b border-white/[0.06] transition-all duration-500 relative group ${
                        pathname === link.to ? 'text-gold-400' : 'text-white hover:text-gold-400'
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {pathname === link.to && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-500 to-gold-300"
                          layoutId="activeMobileLink"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-6 pt-8 border-t border-white/[0.06]"
              >
                {/* Contact info */}
                <div className="flex flex-col gap-4">
                  <a 
                    href={`tel:${FIRM.phone}`} 
                    className="flex items-center gap-3 text-base group"
                    style={{ color: 'rgba(200,196,184,0.6)' }}
                  >
                    <Phone size={16} className="group-hover:text-gold-400 transition-colors duration-300" />
                    <span className="group-hover:text-gold-400 transition-colors duration-300">{FIRM.phone}</span>
                  </a>
                  
                  <a 
                    href={`https://wa.me/${FIRM.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-base group"
                    style={{ color: 'rgba(200,196,184,0.6)' }}
                  >
                    <MessageCircle size={16} className="group-hover:text-gold-400 transition-colors duration-300" />
                    <span className="group-hover:text-gold-400 transition-colors duration-300">WhatsApp Us</span>
                  </a>
                </div>

                {/* CTA buttons */}
                <div className="space-y-4">
                  <PremiumButton to="/booking" className="w-full">
                    Book Free Consultation
                  </PremiumButton>
                  
                  <PremiumButton 
                    href={`https://wa.me/${FIRM.whatsapp}`}
                    variant="outline" 
                    icon="whatsapp"
                    className="w-full"
                  >
                    WhatsApp Us Now
                  </PremiumButton>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
