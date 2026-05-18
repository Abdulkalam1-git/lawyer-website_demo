import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FIRM } from '../data/content'
import SectionHeader from '../components/SectionHeader'

const MILESTONES = [
  { year: '1998', event: 'Firm founded by Arjun Mehta in Mumbai with a focus on corporate transactions.' },
  { year: '2004', event: 'Expanded to Delhi NCR. Advised on India\'s first cross-border PE buyout.' },
  { year: '2009', event: 'Litigation practice launched under Priya Nair. First Supreme Court appearance.' },
  { year: '2014', event: 'Ranked Band 1 by Chambers Asia-Pacific for the first time. 200+ client milestone.' },
  { year: '2018', event: 'Regulatory practice established. Former SEBI officer Vikram Rao joins as Partner.' },
  { year: '2023', event: 'Advised on India\'s largest REIT listing. Crossed ₹1 lakh crore in deal value.' },
  { year: '2026', event: 'Recognised as India\'s Most Innovative Law Firm by Financial Times.' },
]

const VALUES = [
  { title: 'Precision', desc: 'Every word in every document matters. We leave nothing to chance.' },
  { title: 'Integrity', desc: 'We tell clients what they need to hear, not what they want to hear.' },
  { title: 'Excellence', desc: 'We hold ourselves to the standard of the best law firms in the world.' },
  { title: 'Discretion', desc: 'Client confidentiality is not a policy — it is a sacred obligation.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 to-dark-950" />
        </div>
        <div className="container-law relative max-w-3xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">About the Firm</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-6">
            A Legacy of <span className="gold-text italic">Winning.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-dark-400 text-lg leading-relaxed">
            For over 25 years, Meridian Law Group has been the firm that India's most sophisticated clients turn to when the stakes are highest.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container-law grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80" alt="Arjun Mehta, Founding Partner" className="w-full aspect-[3/4] object-cover rounded-sm border border-white/[0.06]" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">Our Story</p>
            <h2 className="font-serif text-4xl font-light text-white mb-6">Founded on a single principle: <span className="gold-text italic">clients first.</span></h2>
            <div className="space-y-4 text-dark-400 leading-relaxed text-sm">
              <p>Meridian Law Group was founded in 1998 by Arjun Mehta with a simple but radical idea: that corporate clients deserved the same quality of legal counsel available to the world's largest multinationals, delivered by Indian lawyers who understood the local landscape with global sophistication.</p>
              <p>Over 25 years, that vision has been realised. Today, Meridian is home to 48 lawyers across four practice groups, with offices in Mumbai and Delhi. We have advised on transactions and disputes that have shaped Indian corporate history.</p>
              <p>What has not changed is our founding principle. Every client — from a Fortune 500 multinational to a first-generation entrepreneur — receives the personal attention of a senior partner and the full resources of the firm.</p>
            </div>
            <div className="mt-8">
              <Link to="/lawyers" className="btn-gold">Meet Our Lawyers <ArrowRight size={15} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-900/30">
        <div className="container-law">
          <SectionHeader eyebrow="What We Stand For" title="Our Core " goldWord="Values" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-8 text-center">
                <div className="divider-gold" />
                <h3 className="font-serif text-2xl text-white mb-3">{v.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container-law max-w-3xl">
          <SectionHeader eyebrow="Our Journey" title="25 Years of " goldWord="Excellence" />
          <div className="mt-12 relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-8 items-start">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="text-xs tracking-widest text-gold-500 font-medium">{m.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="h-3 w-3 rounded-full bg-gold-500 ring-4 ring-gold-500/20" />
                  </div>
                  <p className="text-sm text-dark-400 leading-relaxed pt-0.5">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
