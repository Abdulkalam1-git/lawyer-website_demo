import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/content'
import SectionHeader from '../components/SectionHeader'

const EXTRA = [
  {
    name: 'Rohit Gupta',
    title: 'Founder, NextGen Ventures',
    quote: 'When our startup faced a hostile IP claim that threatened our entire product line, Meridian\'s IP team dismantled the case in 4 months. They saved the company.',
    rating: 5,
  },
  {
    name: 'Ananya Krishnan',
    title: 'MD, Sovereign Capital Partners',
    quote: 'We\'ve worked with law firms across 12 countries. Meridian\'s M&A team is in the top three globally for cross-border deal execution. No question.',
    rating: 5,
  },
  {
    name: 'Suresh Nambiar',
    title: 'Chairman, Coastal Infrastructure Ltd.',
    quote: 'Kavya Sharma structured our ₹800 crore land acquisition in a way that saved us ₹120 crore in stamp duty — legally. That\'s the Meridian difference.',
    rating: 5,
  },
  {
    name: 'Deepa Menon',
    title: 'CEO, Pharma Innovations India',
    quote: 'Priya Nair is simply the best litigator I have ever seen in action. Her cross-examination of the opposing expert witness was a masterclass.',
    rating: 5,
  },
]

const ALL = [...TESTIMONIALS, ...EXTRA]

export default function Testimonials() {
  return (
    <>
      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950" />
        <div className="container-law relative text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">Client Voices</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6">
              What Clients <span className="gold-text italic">Say</span>
            </h1>
            <p className="text-dark-400 leading-relaxed">
              Our reputation is built on outcomes. These are the words of the people we've served.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-law columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {ALL.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-card p-8 break-inside-avoid"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="font-serif text-lg text-white font-light leading-relaxed italic mb-5">"{t.quote}"</p>
              <div className="border-t border-white/[0.06] pt-4">
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-dark-400 mt-0.5">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
