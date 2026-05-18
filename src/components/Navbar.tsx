import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FIRM } from '../data/content'

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
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'py-3 bg-[#080705]/90 backdrop-blur-2xl border-b border-white/[0.05]'
            : 'py-5 bg-transparent'
        }`}
      >
        {/* Top gold line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="container-law flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex flex-col leading-none select-none">
            <span className="font-serif text-[1.35rem] font-light tracking-[0.15em] text-white transition-colors duration-300 group-hover:text-gold-400">
              MERIDIAN
            </span>
            <span className="text-[8px] tracking-[0.45em] uppercase font-semibold"
              style={{ color: 'rgba(201,150,15,0.7)' }}>
              Law Group
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-8" aria-label="Primary">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav-link ${pathname === l.to ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden xl:flex items-center gap-5">
            <a
              href={`tel:${FIRM.phone}`}
              className="flex items-center gap-2 text-[10px] tracking-[0.15em] text-[#6b6760] hover:text-gold-400 transition-colors duration-300"
            >
              <Phone size={12} />
              <span className="hidden 2xl:inline">{FIRM.phone}</span>
            </a>
            <Link to="/booking" className="btn-gold text-[10px] py-3 px-6" style={{ width: 'auto' }}>
              Book Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(v => !v)}
            className="xl:hidden relative w-10 h-10 flex items-center justify-center text-[#6b6760] hover:text-gold-400 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {open
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={20} /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={20} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 xl:hidden"
            style={{ background: 'rgba(8,7,5,0.98)', backdropFilter: 'blur(24px)' }}
          >
            {/* Decorative */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

            <div className="container-law flex flex-col h-full pt-28 pb-12">
              <nav className="flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={l.to}
                      className={`block py-4 font-serif text-3xl font-light border-b border-white/[0.05] transition-colors duration-300 ${
                        pathname === l.to ? 'text-gold-400' : 'text-white hover:text-gold-400'
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-auto space-y-4 pt-8"
              >
                <a href={`tel:${FIRM.phone}`} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(200,196,184,0.4)' }}>
                  <Phone size={14} /> {FIRM.phone}
                </a>
                <Link to="/booking" className="btn-gold w-full text-center block" style={{ width: '100%' }}>
                  Book Free Consultation
                </Link>
                <a
                  href={`https://wa.me/${FIRM.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center block"
                  style={{ width: '100%' }}
                >
                  WhatsApp Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
