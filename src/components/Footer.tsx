import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Linkedin, Twitter, ArrowRight, Award } from 'lucide-react'
import { FIRM } from '../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0907] to-[#080705]" />
      <div className="absolute inset-0" style={{ 
        background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,150,15,0.06) 0%, transparent 70%)' 
      }} />
      
      {/* Top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      
      <div className="container-law relative">
        {/* Main footer content */}
        <div className="py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                  <Award size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-light tracking-[0.15em] text-white text-shadow-soft">MERIDIAN</p>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-gold-500 font-bold">Law Group</p>
                </div>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-gold-500 to-transparent mb-4" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm leading-relaxed mb-8 text-shadow-soft"
              style={{ color: 'rgba(200,196,184,0.7)' }}
            >
              Precision. Integrity. Results. Trusted by India's leading corporations since {FIRM.founded}.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              <motion.a 
                href="#" 
                aria-label="LinkedIn" 
                className="grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-gray-400 hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300 hover:bg-gold-500/5"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Twitter" 
                className="grid h-10 w-10 place-items-center rounded-sm border border-white/10 text-gray-400 hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300 hover:bg-gold-500/5"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Enhanced Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold-500 font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-gold-500 to-gold-300" />
              Practice Areas
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(200,196,184,0.6)' }}>
              {['Mergers & Acquisitions', 'Corporate Governance', 'Commercial Litigation', 'Regulatory & Compliance', 'Real Estate', 'Intellectual Property'].map((area, i) => (
                <motion.li 
                  key={area}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                >
                  <Link 
                    to="/practice" 
                    className="hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{area}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold-500 font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-gold-500 to-gold-300" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(200,196,184,0.6)' }}>
              {[
                { to: '/about', label: 'About the Firm' },
                { to: '/lawyers', label: 'Our Lawyers' },
                { to: '/results', label: 'Case Results' },
                { to: '/blog', label: 'Legal Insights' },
                { to: '/booking', label: 'Book Consultation' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link, i) => (
                <motion.li 
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.05) }}
                >
                  <Link 
                    to={link.to} 
                    className="hover:text-gold-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold-500 font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-gold-500 to-gold-300" />
              Contact
            </h4>
            <ul className="space-y-5 text-sm" style={{ color: 'rgba(200,196,184,0.6)' }}>
              <motion.li 
                className="flex gap-3 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={16} className="text-gold-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="leading-relaxed text-shadow-soft">{FIRM.address}</span>
              </motion.li>
              <motion.li 
                className="flex gap-3 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={16} className="text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href={`tel:${FIRM.phone}`} className="hover:text-gold-400 transition-colors duration-300">
                  {FIRM.phone}
                </a>
              </motion.li>
              <motion.li 
                className="flex gap-3 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={16} className="text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href={`mailto:${FIRM.email}`} className="hover:text-gold-400 transition-colors duration-300">
                  {FIRM.email}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-white/[0.08] py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
            style={{ color: 'rgba(200,196,184,0.4)' }}
          >
            <div className="flex items-center gap-4">
              <p>© {currentYear} Meridian Law Group. All rights reserved.</p>
              <div className="hidden md:block w-px h-4 bg-white/10" />
              <p className="text-gold-500/60">Crafted with precision</p>
            </div>
            
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold-400 transition-colors duration-300">
                Terms of Use
              </Link>
              <Link to="/disclaimer" className="hover:text-gold-400 transition-colors duration-300">
                Disclaimer
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
