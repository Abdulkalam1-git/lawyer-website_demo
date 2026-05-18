import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Star, Award, Users, Briefcase, Shield, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { FIRM, PRACTICE_AREAS, TESTIMONIALS, FAQS } from '../data/content'

/* ── Trusted logos (text-based, realistic) ── */
const TRUSTED = ['Tata Group','Reliance Industries','HDFC Bank','Infosys','Mahindra & Mahindra','Bajaj Finance','Adani Group','Wipro','L&T Group','Kotak Mahindra']

/* ── Trust signals ── */
const TRUST = [
  { value: '25+', label: 'Years of Practice', icon: <Award size={22}/> },
  { value: '2,400+', label: 'Cases Won', icon: <CheckCircle size={22}/> },
  { value: '850+', label: 'Corporate Clients', icon: <Users size={22}/> },
  { value: '₹1.2L Cr+', label: 'Deal Value Advised', icon: <Briefcase size={22}/> },
]

/* ── Why choose us ── */
const WHY = [
  { icon: <Award size={20}/>, title: 'Chambers Asia-Pacific Band 1', desc: 'Ranked Band 1 in Corporate/M&A and Dispute Resolution by Chambers, Legal 500, and IFLR1000 for 8 consecutive years.' },
  { icon: <Briefcase size={20}/>, title: '₹1,20,000 Cr+ Deal Value', desc: 'Our lawyers have advised on transactions and disputes with an aggregate value exceeding ₹1.2 lakh crore across 40+ jurisdictions.' },
  { icon: <Users size={20}/>, title: 'Former Regulators on Team', desc: 'Our team includes former SEBI, RBI, and Ministry of Finance officials who bring unparalleled regulatory insight to every matter.' },
  { icon: <Shield size={20}/>, title: 'Senior Partner on Every File', desc: 'Every engagement is led personally by a senior partner — no juniors, no handoffs, no surprises.' },
]

/* ── Awards ── */
const AWARDS = [
  { name: "Chambers Asia-Pacific", detail: "Band 1 — Corporate/M&A", year: "2026" },
  { name: "Legal 500 Asia Pacific", detail: "Tier 1 — Dispute Resolution", year: "2026" },
  { name: "IFLR1000", detail: "Highly Regarded — Finance", year: "2025" },
  { name: "Financial Times", detail: "Most Innovative Law Firm", year: "2026" },
]

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* ══ HERO — FIX: brighter image, stronger single CTA, trust stats ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG image — opacity raised from 0.12 → 0.28 for visibility */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=85"
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.28 }}
          />
        </div>
        {/* Overlay — lighter on right so image shows through */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(8,7,5,0.96) 40%, rgba(8,7,5,0.7) 70%, rgba(8,7,5,0.35) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(201,150,15,0.07) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 inset-x-0 h-40" style={{ background: 'linear-gradient(to top, #080705, transparent)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(201,150,15,0.5) 30%, rgba(201,150,15,0.5) 70%, transparent)' }} />

        {/* Decorative ring */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] hidden xl:block pointer-events-none">
          <div className="animate-rotate-slow w-full h-full rounded-full" style={{ border: '1px solid rgba(201,150,15,0.1)' }} />
          <div className="absolute inset-10 rounded-full" style={{ border: '1px solid rgba(201,150,15,0.07)' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse-gold" />
          </div>
        </div>

        <div className="container-law relative pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >
              <div className="w-8 h-px bg-gold-500" />
              <span className="eyebrow">Established {FIRM.founded} · Mumbai, India</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title mb-6 md:mb-8"
            >
              Where Law<br />
              Meets{' '}
              <em className="gold-text not-italic">Precision.</em>
            </motion.h1>

            {/* FIX: text-readability — raised opacity from 0.65 → 0.85 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg leading-relaxed max-w-xl mb-10 md:mb-12"
              style={{ color: 'rgba(220,216,204,0.85)' }}
            >
              India's premier corporate law firm. Trusted by Fortune 500 companies, PE funds, and high-net-worth individuals for complex transactions, high-stakes litigation, and regulatory counsel.
            </motion.p>

            {/* FIX: CTA hierarchy — ONE dominant primary, one ghost secondary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              {/* PRIMARY — larger, more prominent */}
              <Link to="/booking"
                className="btn-gold group text-center"
                style={{ padding: '16px 36px', fontSize: '12px', letterSpacing: '0.22em' }}
              >
                Book a Free Consultation
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              {/* SECONDARY — clearly subordinate */}
              <Link to="/practice"
                className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 py-4 px-6"
                style={{ color: 'rgba(200,196,184,0.5)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9960f')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(200,196,184,0.5)')}
              >
                View Practice Areas <ArrowRight size={13} />
              </Link>
            </motion.div>

            {/* FIX: Trust signals in hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-14 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl"
            >
              {TRUST.map((s) => (
                <div key={s.label} className="gold-line-left">
                  <p className="font-serif text-2xl md:text-3xl font-light gold-text leading-none mb-1.5">{s.value}</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase leading-tight" style={{ color: 'rgba(200,196,184,0.45)' }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(201,150,15,0.45)' }}>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown size={15} style={{ color: 'rgba(201,150,15,0.45)' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ══ TRUSTED BY — scrolling marquee ══ */}
      <section className="relative overflow-hidden py-7" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.018)' }}>
        <div className="absolute inset-y-0 left-0 w-20 z-10" style={{ background: 'linear-gradient(to right, #080705, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-20 z-10" style={{ background: 'linear-gradient(to left, #080705, transparent)' }} />
        <p className="text-center text-[9px] tracking-[0.35em] uppercase mb-5" style={{ color: 'rgba(200,196,184,0.25)' }}>
          Trusted by India's Leading Corporations
        </p>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex gap-14 whitespace-nowrap"
        >
          {[...TRUSTED, ...TRUSTED].map((name, i) => (
            <span key={i} className="text-[10px] tracking-[0.28em] uppercase font-semibold" style={{ color: 'rgba(200,196,184,0.22)' }}>
              {name}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ══ TRUST SIGNALS BAR ══ */}
      <section className="py-12 md:py-16" style={{ background: 'rgba(201,150,15,0.03)', borderBottom: '1px solid rgba(201,150,15,0.08)' }}>
        <div className="container-law">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {TRUST.map((t, i) => (
              <FadeUp key={t.label} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center p-6 rounded-sm transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(201,150,15,0.1)' }}>
                  <div className="mb-3" style={{ color: '#c9960f' }}>{t.icon}</div>
                  <p className="font-serif text-3xl md:text-4xl font-light gold-text mb-1">{t.value}</p>
                  <p className="text-[10px] tracking-[0.18em] uppercase" style={{ color: 'rgba(200,196,184,0.45)' }}>{t.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRACTICE AREAS ══ */}
      <section className="section-pad">
        <div className="container-law">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div>
                <p className="eyebrow mb-3">What We Do</p>
                <h2 className="section-title">Practice <em className="gold-text not-italic">Expertise</em></h2>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(200,196,184,0.5)' }}>
                Six decades of combined experience across the most complex areas of Indian and international law.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-px grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
            {PRACTICE_AREAS.map((area, i) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative p-8 md:p-10 cursor-pointer overflow-hidden"
                style={{ background: '#080705' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(201,150,15,0.07) 0%, rgba(255,255,255,0.01) 100%)' }} />
                <div className="absolute top-0 inset-x-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: 'linear-gradient(90deg, #c9960f, #e6b830)' }} />
                <div className="relative">
                  <span className="text-3xl mb-5 block">{area.icon}</span>
                  <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">{area.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(200,196,184,0.5)' }}>{area.short}</p>
                  <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-gold-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More <ArrowRight size={11} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeUp delay={0.2} className="text-center mt-10">
            <Link to="/practice" className="btn-outline">View All Practice Areas</Link>
          </FadeUp>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="section-pad relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 60% at 100% 50%, rgba(201,150,15,0.04) 0%, transparent 60%)' }} />
        <div className="container-law relative">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div>
              <FadeUp>
                <p className="eyebrow mb-4">Why Meridian</p>
                <h2 className="section-title mb-5">The Standard of <em className="gold-text not-italic">Excellence</em></h2>
                <div className="divider-gold" />
                <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(200,196,184,0.6)' }}>
                  We don't just practice law — we engineer outcomes. Every matter is approached with the rigour of a transaction and the strategy of a campaign.
                </p>
              </FadeUp>
              <div className="space-y-7">
                {WHY.map((item, i) => (
                  <FadeUp key={item.title} delay={i * 0.1}>
                    <div className="flex gap-5 group">
                      <div className="flex-shrink-0 grid h-12 w-12 place-items-center rounded-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold-400"
                        style={{ background: 'rgba(201,150,15,0.08)', border: '1px solid rgba(201,150,15,0.2)', color: '#c9960f' }}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1.5 text-sm">{item.title}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(200,196,184,0.55)' }}>{item.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
              <FadeUp delay={0.4} className="mt-10">
                <Link to="/about" className="btn-gold group">
                  About the Firm
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-sm opacity-25 blur-3xl" style={{ background: 'radial-gradient(ellipse, rgba(201,150,15,0.2), transparent 70%)' }} />
                <div className="relative overflow-hidden rounded-sm" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85"
                    alt="Meridian Law Group office"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,7,5,0.85) 0%, transparent 55%)' }} />
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-sm"
                  style={{ background: 'rgba(8,7,5,0.88)', backdropFilter: 'blur(20px)', border: '1px solid rgba(201,150,15,0.18)' }}>
                  <div className="w-6 h-px bg-gold-500 mb-3" />
                  <p className="font-serif text-xl text-white font-light leading-snug">
                    "We don't just advise. We <em className="gold-text">win.</em>"
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase mt-3" style={{ color: 'rgba(200,196,184,0.4)' }}>
                    — Arjun Mehta, Senior Partner
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ══ AWARDS & RECOGNITION ══ */}
      <section className="py-16 md:py-20">
        <div className="container-law">
          <FadeUp className="text-center mb-10">
            <p className="eyebrow mb-3">Recognition</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-white">
              Industry <em className="gold-text not-italic">Awards</em>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {AWARDS.map((a, i) => (
              <FadeUp key={a.name} delay={i * 0.08}>
                <div className="p-6 rounded-sm text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/30"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-8 h-px mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #c9960f, transparent)' }} />
                  <p className="text-xs font-semibold text-white mb-1">{a.name}</p>
                  <p className="text-[11px] leading-snug mb-2" style={{ color: 'rgba(200,196,184,0.5)' }}>{a.detail}</p>
                  <p className="text-[10px] tracking-widest text-gold-500">{a.year}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className="section-pad" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="container-law">
          <FadeUp className="text-center mb-12 md:mb-16">
            <p className="eyebrow mb-4">Client Voices</p>
            <h2 className="section-title">What Our Clients <em className="gold-text not-italic">Say</em></h2>
            <div className="divider-gold-center" />
          </FadeUp>
          <div className="grid gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="glass-card p-7 md:p-10 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} style={{ fill: '#c9960f', color: '#c9960f' }} />
                    ))}
                  </div>
                  <p className="font-serif text-lg md:text-xl text-white font-light leading-relaxed italic flex-1 mb-7">"{t.quote}"</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs mt-0.5 tracking-wide" style={{ color: 'rgba(200,196,184,0.4)' }}>{t.title}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2} className="text-center mt-10">
            <Link to="/testimonials" className="btn-outline">Read More Testimonials</Link>
          </FadeUp>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="section-pad">
        <div className="container-law max-w-3xl">
          <FadeUp className="text-center mb-12 md:mb-16">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="section-title">Frequently Asked <em className="gold-text not-italic">Questions</em></h2>
            <div className="divider-gold-center" />
          </FadeUp>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.06}>
                <div className="overflow-hidden rounded-sm" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-white font-medium pr-6 text-sm group-hover:text-gold-400 transition-colors duration-300">{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown size={16} style={{ color: openFaq === i ? '#c9960f' : 'rgba(200,196,184,0.4)', flexShrink: 0 }} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        key={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed"
                          style={{ color: 'rgba(200,196,184,0.6)', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1rem' }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,150,15,0.09) 0%, rgba(8,7,5,0) 50%, rgba(201,150,15,0.06) 100%)' }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,150,15,0.45), transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,150,15,0.45), transparent)' }} />
        <div className="container-law relative text-center max-w-3xl">
          <FadeUp>
            <p className="eyebrow mb-5">Take the First Step</p>
            <h2 className="section-title mb-5">
              Your matter deserves{' '}
              <em className="gold-text not-italic">senior attention.</em>
            </h2>
            <div className="divider-gold-center" />
            <p className="text-sm leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'rgba(200,196,184,0.6)' }}>
              Every consultation is handled personally by a senior partner. Confidential. No obligation. No junior associates.
            </p>
            {/* Single dominant CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking" className="btn-gold group" style={{ padding: '16px 40px', fontSize: '12px' }}>
                Book a Free Consultation
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a href={`https://wa.me/${FIRM.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Us Now
              </a>
            </div>
            <p className="text-xs mt-6" style={{ color: 'rgba(200,196,184,0.3)' }}>
              No fees for the initial consultation · Strictly confidential
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
