import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Star, Award, Users, Briefcase, Shield, CheckCircle, Phone, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { FIRM, PRACTICE_AREAS, TESTIMONIALS, FAQS } from '../data/content'
import AnimatedCounter from '../components/AnimatedCounter'
import PremiumButton from '../components/PremiumButton'
import TrustBadges from '../components/TrustBadges'

/* ── Enhanced trusted logos with real Indian companies ── */
const TRUSTED = [
  'Tata Consultancy Services','Reliance Industries','HDFC Bank','Infosys Limited',
  'Mahindra Group','Bajaj Finance','Adani Enterprises','Wipro Technologies',
  'Larsen & Toubro','Kotak Mahindra Bank','Asian Paints','UltraTech Cement'
]

/* ── Premium trust signals with animated counters ── */
const TRUST = [
  { value: 25, suffix: '+', label: 'Years of Excellence', icon: <Award size={24}/>, color: 'from-gold-500 to-gold-600' },
  { value: 2400, suffix: '+', label: 'Cases Won', icon: <CheckCircle size={24}/>, color: 'from-green-500 to-green-600' },
  { value: 850, suffix: '+', label: 'Corporate Clients', icon: <Users size={24}/>, color: 'from-blue-500 to-blue-600' },
  { value: 120000, prefix: '₹', suffix: ' Cr+', label: 'Deal Value Advised', icon: <Briefcase size={24}/>, color: 'from-purple-500 to-purple-600' },
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
      }}
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
      {/* ══ PREMIUM HERO SECTION ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=85"
            alt="Premium law office"
            className="w-full h-full object-cover"
            style={{ opacity: 0.35 }}
          />
        </div>
        
        {/* Premium gradient overlays */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(105deg, rgba(8,7,5,0.95) 35%, rgba(8,7,5,0.8) 65%, rgba(8,7,5,0.4) 100%)' 
        }} />
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(ellipse 70% 80% at 0% 50%, rgba(201,150,15,0.12) 0%, transparent 70%)' 
        }} />
        <div className="absolute bottom-0 inset-x-0 h-48" style={{ 
          background: 'linear-gradient(to top, #080705, transparent)' 
        }} />
        
        {/* Animated decorative elements */}
        <div className="absolute left-0 top-0 bottom-0 w-px animate-pulse-gold" style={{ 
          background: 'linear-gradient(180deg, transparent, rgba(201,150,15,0.6) 30%, rgba(201,150,15,0.6) 70%, transparent)' 
        }} />
        
        {/* Premium floating ring animation */}
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] hidden xl:block pointer-events-none">
          <motion.div 
            className="animate-rotate-slow w-full h-full rounded-full border border-gold-500/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.div 
            className="absolute inset-12 rounded-full border border-gold-500/10"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <div className="w-3 h-3 rounded-full bg-gold-500 animate-pulse-gold" />
          </motion.div>
        </div>

        <div className="container-law relative pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-4xl">
            {/* Enhanced eyebrow with animation */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="flex items-center gap-5 mb-8 md:mb-10"
            >
              <motion.div 
                className="w-12 h-px bg-gradient-to-r from-gold-500 to-gold-300"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <span className="eyebrow text-shadow-gold">Established {FIRM.founded} · Mumbai, India</span>
            </motion.div>

            {/* Premium headline with enhanced typography */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="hero-title mb-8 md:mb-10 text-shadow-soft"
            >
              Where Law<br />
              Meets{' '}
              <em className="gold-text not-italic text-shadow-gold">Precision.</em>
            </motion.h1>

            {/* Enhanced subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="subtitle-premium max-w-2xl mb-12 md:mb-16"
            >
              India's premier corporate law firm. Trusted by Fortune 500 companies, PE funds, and high-net-worth individuals for complex transactions, high-stakes litigation, and regulatory counsel.
            </motion.p>

            {/* Premium CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 md:mb-20"
            >
              <PremiumButton 
                to="/booking" 
                size="lg" 
                className="shadow-2xl"
              >
                Book Free Consultation
              </PremiumButton>
              
              <PremiumButton 
                href={`https://wa.me/${FIRM.whatsapp}`}
                variant="outline" 
                size="lg" 
                icon="whatsapp"
              >
                WhatsApp Us Now
              </PremiumButton>
            </motion.div>

            {/* Enhanced trust signals with animated counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-4xl"
            >
              {TRUST.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + (i * 0.1) }}
                  className="gold-line-left group cursor-pointer"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <p className="font-serif text-3xl md:text-4xl font-light gold-text leading-none mb-2">
                    <AnimatedCounter 
                      end={stat.value} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </p>
                  <p className="text-[11px] tracking-[0.18em] uppercase leading-tight text-shadow-soft" 
                     style={{ color: 'rgba(200,196,184,0.6)' }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-gold-500/60">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-gold-500/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══ PREMIUM TRUSTED BY SECTION ══ */}
      <section className="relative overflow-hidden py-10 border-y border-white/5">
        <div className="absolute inset-0 bg-premium-gold opacity-20" />
        <div className="absolute inset-y-0 left-0 w-32 z-10" style={{ 
          background: 'linear-gradient(to right, #080705, transparent)' 
        }} />
        <div className="absolute inset-y-0 right-0 w-32 z-10" style={{ 
          background: 'linear-gradient(to left, #080705, transparent)' 
        }} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase mb-2" style={{ color: 'rgba(200,196,184,0.4)' }}>
            Trusted by India's Leading Corporations
          </p>
          <div className="w-16 h-px mx-auto bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        </motion.div>
        
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...TRUSTED, ...TRUSTED].map((name, i) => (
            <motion.span 
              key={i} 
              className="text-[11px] tracking-[0.3em] uppercase font-bold hover:text-gold-400 transition-colors duration-300 cursor-pointer" 
              style={{ color: 'rgba(200,196,184,0.3)' }}
              whileHover={{ scale: 1.05 }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* ══ TRUST BADGES COMPONENT ══ */}
      <TrustBadges />

      {/* ══ PREMIUM PRACTICE AREAS ══ */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(201,150,15,0.04) 0%, transparent 70%)' 
        }} />
        
        <div className="container-law">
          <FadeUp>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-px bg-gradient-to-r from-gold-500 to-gold-300 mb-4"
                />
                <p className="eyebrow mb-4">What We Do</p>
                <h2 className="section-title mb-6">Practice <em className="gold-text not-italic">Expertise</em></h2>
                <div className="w-24 h-px bg-gradient-to-r from-gold-500 via-gold-400 to-transparent mb-6" />
              </div>
              <div className="max-w-md">
                <p className="text-base leading-relaxed text-shadow-soft" style={{ color: 'rgba(200,196,184,0.7)' }}>
                  Six decades of combined experience across the most complex areas of Indian and international law.
                </p>
              </div>
            </div>
          </FadeUp>

          <StaggerContainer className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-sm overflow-hidden" 
                           style={{ background: 'rgba(255,255,255,0.02)' }}>
            {PRACTICE_AREAS.map((area, i) => (
              <StaggerItem key={area.id}>
                <motion.div
                  className="group relative p-10 md:p-12 cursor-pointer overflow-hidden h-full"
                  style={{ background: '#080705' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'linear-gradient(135deg, rgba(201,150,15,0.1) 0%, rgba(255,255,255,0.02) 100%)' }} />
                  
                  {/* Top border animation */}
                  <div className="absolute top-0 inset-x-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
                    style={{ background: 'linear-gradient(90deg, #c9960f, #e6b830)' }} />
                  
                  {/* Side accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'linear-gradient(180deg, transparent, #c9960f 30%, #c9960f 70%, transparent)' }} />
                  
                  <div className="relative z-10">
                    <motion.span 
                      className="text-4xl mb-6 block"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {area.icon}
                    </motion.span>
                    
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors duration-500 text-shadow-soft">
                      {area.title}
                    </h3>
                    
                    <p className="text-sm md:text-base leading-relaxed mb-6 text-shadow-soft" 
                       style={{ color: 'rgba(200,196,184,0.7)' }}>
                      {area.short}
                    </p>
                    
                    <motion.div 
                      className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-gold-500 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                      whileHover={{ x: 4 }}
                    >
                      <span className="font-bold">Learn More</span>
                      <ArrowRight size={12} />
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.3} className="text-center mt-12">
            <PremiumButton to="/practice" variant="outline" size="lg">
              View All Practice Areas
            </PremiumButton>
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

      {/* ══ PREMIUM FINAL CTA ══ */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Premium background layers */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, rgba(201,150,15,0.12) 0%, rgba(8,7,5,0.8) 40%, rgba(201,150,15,0.08) 100%)' 
        }} />
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,150,15,0.06) 0%, transparent 70%)' 
        }} />
        
        {/* Animated border lines */}
        <motion.div 
          className="absolute inset-x-0 top-0 h-px"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,150,15,0.6), transparent)' }} 
        />
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-px"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.2 }}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,150,15,0.6), transparent)' }} 
        />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-gold-500/30 animate-float" />
        <div className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-gold-500/20 animate-float-slow" />
        <div className="absolute top-1/2 left-20 w-1 h-1 rounded-full bg-gold-500/40 animate-pulse-gold" />
        
        <div className="container-law relative text-center max-w-4xl">
          <FadeUp>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6"
            />
            
            <p className="eyebrow mb-6 text-shadow-gold">Take the First Step</p>
            
            <h2 className="section-title mb-8 text-shadow-soft">
              Your matter deserves{' '}
              <em className="gold-text not-italic text-shadow-gold">senior attention.</em>
            </h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"
            />
            
            <p className="text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto subtitle-premium">
              Every consultation is handled personally by a senior partner. Confidential. No obligation. No junior associates.
            </p>
            
            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <PremiumButton 
                to="/booking" 
                size="lg"
                className="shadow-2xl hover-lift"
              >
                Book Free Consultation
              </PremiumButton>
              
              <PremiumButton 
                href={`https://wa.me/${FIRM.whatsapp}`}
                variant="outline" 
                size="lg" 
                icon="whatsapp"
                className="backdrop-blur-premium"
              >
                WhatsApp Us Now
              </PremiumButton>
            </div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs"
              style={{ color: 'rgba(200,196,184,0.5)' }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-gold-500" />
                <span>No fees for initial consultation</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-gold-500" />
                <span>Strictly confidential</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Award size={14} className="text-gold-500" />
                <span>Senior partner guarantee</span>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
