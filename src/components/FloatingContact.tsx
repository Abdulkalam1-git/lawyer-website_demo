import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Mail, X, ChevronUp } from 'lucide-react'
import { FIRM } from '../data/content'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: <Phone size={20} />,
      label: 'Call Now',
      href: `tel:${FIRM.phone}`,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-400 hover:to-blue-500'
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      href: `https://wa.me/${FIRM.whatsapp}`,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-400 hover:to-green-500'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      href: `mailto:${FIRM.email}`,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-400 hover:to-purple-500'
    }
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="absolute bottom-20 right-0 space-y-3"
          >
            {contactOptions.map((option, i) => (
              <motion.a
                key={option.label}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r ${option.color} ${option.hoverColor} text-white shadow-lg hover:shadow-xl transition-all duration-300 group min-w-[140px]`}
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <span className="text-sm font-semibold">{option.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-gold-500 animate-ping opacity-20" />
        
        {/* Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center"
            >
              <Phone size={20} className="mb-0.5" />
              <div className="text-[8px] font-bold tracking-wider">CONTACT</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap pointer-events-none"
        >
          {isOpen ? 'Close' : 'Contact Us'}
          <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-l-4 border-l-gray-900 border-y-4 border-y-transparent" />
        </motion.div>
      </motion.button>
    </div>
  )
}