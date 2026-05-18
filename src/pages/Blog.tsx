import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, User } from 'lucide-react'
import { BLOG_POSTS } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function Blog() {
  return (
    <>
      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950" />
        <div className="container-law relative text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">Knowledge Centre</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6">
              Legal <span className="gold-text italic">Insights</span>
            </h1>
            <p className="text-dark-400 leading-relaxed">
              Perspectives from our partners on the legal developments shaping Indian business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-law grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                <span className="absolute top-4 left-4 text-xs tracking-widest uppercase text-gold-400 bg-dark-950/80 backdrop-blur px-3 py-1 rounded-sm border border-gold-500/20">
                  {post.category}
                </span>
              </div>
              <div className="p-7">
                <h2 className="font-serif text-xl text-white mb-3 leading-snug group-hover:text-gold-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-dark-400 leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-dark-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><User size={11} /> {post.author}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>
                  <span>{post.date}</span>
                </div>
                <div className="mt-5 flex items-center gap-2 text-xs tracking-widest uppercase text-gold-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Read Article <ArrowRight size={12} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-dark-900/30">
        <div className="container-law text-center max-w-2xl">
          <SectionHeader eyebrow="Stay Informed" title="Subscribe to our " goldWord="Legal Bulletin" />
          <p className="text-dark-400 mb-8 mt-4">Monthly insights from our partners on regulatory changes, landmark judgments, and deal trends.</p>
          <form className="flex gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className="input-dark flex-1" required />
            <button type="submit" className="btn-gold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}
