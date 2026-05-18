import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { LAWYERS } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function Lawyers() {
  return (
    <>
      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950" />
        <div className="container-law relative text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">The Team</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6">
              Our <span className="gold-text italic">Lawyers</span>
            </h1>
            <p className="text-dark-400 leading-relaxed">
              Every partner at Meridian is a recognised authority in their field. No generalists. No juniors on your matter.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-law grid gap-8 md:grid-cols-2">
          {LAWYERS.map((lawyer, i) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="grid sm:grid-cols-[200px_1fr]">
                <div className="relative overflow-hidden">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-64 sm:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent sm:bg-gradient-to-r" />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-serif text-2xl text-white">{lawyer.name}</h3>
                      <p className="text-xs tracking-widest uppercase text-gold-500 mt-1">{lawyer.title}</p>
                    </div>
                    <a href={lawyer.linkedin} aria-label="LinkedIn" className="text-dark-500 hover:text-gold-400 transition-colors">
                      <Linkedin size={16} />
                    </a>
                  </div>
                  <p className="text-xs text-dark-500 mt-3 mb-4 tracking-wide">{lawyer.specialization} · {lawyer.experience}</p>
                  <p className="text-sm text-dark-400 leading-relaxed mb-4">{lawyer.bio}</p>
                  <p className="text-xs text-dark-600 italic">{lawyer.education}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
