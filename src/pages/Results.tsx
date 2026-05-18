import { motion } from 'framer-motion'
import { CASE_RESULTS } from '../data/content'
import SectionHeader from '../components/SectionHeader'

const CATEGORY_COLORS: Record<string, string> = {
  'M&A': 'text-gold-400 border-gold-500/30 bg-gold-500/10',
  'Litigation': 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  'Regulatory': 'text-purple-400 border-purple-500/30 bg-purple-500/10',
  'Real Estate': 'text-green-400 border-green-500/30 bg-green-500/10',
  'IP': 'text-orange-400 border-orange-500/30 bg-orange-500/10',
  'Corporate': 'text-red-400 border-red-500/30 bg-red-500/10',
}

export default function Results() {
  return (
    <>
      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950" />
        <div className="container-law relative text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">Track Record</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6">
              Case <span className="gold-text italic">Results</span>
            </h1>
            <p className="text-dark-400 leading-relaxed">
              A selection of landmark matters. Client names withheld where confidentiality obligations apply.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-law grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_RESULTS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs tracking-widest uppercase font-medium px-3 py-1 rounded-sm border ${CATEGORY_COLORS[c.category] ?? 'text-gold-400 border-gold-500/30 bg-gold-500/10'}`}>
                  {c.category}
                </span>
                <span className="text-xs text-dark-600">{c.year}</span>
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{c.title}</h3>
              <p className="text-sm text-dark-400 leading-relaxed flex-1">{c.description}</p>
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <p className="text-xs tracking-widest uppercase text-gold-500 mb-1">Outcome</p>
                <p className="text-sm text-white font-medium">{c.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-dark-900/30">
        <div className="container-law text-center max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">Disclaimer</p>
          <p className="text-sm text-dark-500 leading-relaxed">
            Past results do not guarantee future outcomes. Each matter is unique and depends on its specific facts and circumstances. The results described above are representative of the firm's work and are not intended as a guarantee of similar results in other matters.
          </p>
        </div>
      </section>
    </>
  )
}
