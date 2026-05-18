import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PRACTICE_AREAS } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function Practice() {
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950" />
        <div className="container-law relative text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">What We Do</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6">
              Practice <span className="gold-text italic">Areas</span>
            </h1>
            <p className="text-dark-400 leading-relaxed">
              Six practice groups. One standard of excellence. We handle the matters that define careers, companies, and industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-law space-y-6">
          {PRACTICE_AREAS.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card p-8 md:p-10 grid md:grid-cols-[80px_1fr_auto] gap-6 items-start group"
            >
              <div className="text-4xl">{area.icon}</div>
              <div>
                <h2 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-400 transition-colors">{area.title}</h2>
                <p className="text-dark-400 leading-relaxed text-sm max-w-2xl">{area.detail}</p>
              </div>
              <Link to="/booking" className="btn-outline text-xs whitespace-nowrap self-center">
                Consult Now <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-dark-900/30">
        <div className="container-law text-center max-w-2xl">
          <SectionHeader eyebrow="Get Started" title="Not sure which practice area fits your " goldWord="matter?" />
          <p className="text-dark-400 mb-8 mt-4">Our intake team will assess your situation and connect you with the right specialist within 24 hours.</p>
          <Link to="/booking" className="btn-gold">Book a Free Assessment <ArrowRight size={15} /></Link>
        </div>
      </section>
    </>
  )
}
