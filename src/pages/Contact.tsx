import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { FIRM } from '../data/content'

const AREAS = ['Mergers & Acquisitions','Corporate Governance','Commercial Litigation','Regulatory & Compliance','Real Estate & Infrastructure','Intellectual Property','Other']

const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
)

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,150,15,0.06) 0%, transparent 60%)' }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,150,15,0.3), transparent)' }} />
        <div className="container-law relative text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <p className="eyebrow mb-4">Reach Us</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-4">
              Get in <em className="gold-text not-italic">Touch</em>
            </h1>
            <div className="w-12 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #c9960f, transparent)' }} />
          </motion.div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-law grid lg:grid-cols-[1fr_520px] gap-16 items-start">
          {/* Info column */}
          <div className="space-y-10">
            <FadeUp>
              <h2 className="font-serif text-3xl text-white font-light mb-8">Mumbai Office</h2>
              <div className="space-y-6">
                {[
                  { icon: <MapPin size={16}/>, label: 'Address', value: FIRM.address },
                  { icon: <Phone size={16}/>, label: 'Phone', value: FIRM.phone, href: `tel:${FIRM.phone}` },
                  { icon: <Mail size={16}/>, label: 'Email', value: FIRM.email, href: `mailto:${FIRM.email}` },
                  { icon: <Clock size={16}/>, label: 'Hours', value: 'Mon–Fri: 9 AM – 7 PM IST · Sat: 10 AM – 2 PM' },
                ].map(item => (
                  <div key={item.label} className="flex gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-sm flex-shrink-0"
                      style={{ background: 'rgba(201,150,15,0.08)', border: '1px solid rgba(201,150,15,0.18)', color: '#c9960f' }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(200,196,184,0.35)' }}>{item.label}</p>
                      {item.href
                        ? <a href={item.href} className="text-sm text-white hover:text-gold-400 transition-colors duration-300">{item.value}</a>
                        : <p className="text-sm" style={{ color: 'rgba(200,196,184,0.7)' }}>{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Map */}
            <FadeUp delay={0.15}>
              <div className="overflow-hidden rounded-sm" style={{ border: '1px solid rgba(255,255,255,0.06)', height: '280px' }}>
                <iframe
                  title="Meridian Law Group Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0!2d72.8!3d18.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU4JzQ4LjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(92%) hue-rotate(180deg) saturate(0.3) brightness(0.85)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeUp>
          </div>

          {/* Form */}
          <FadeUp delay={0.1}>
            <div className="rounded-sm overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)' }}>
              <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,150,15,0.5), transparent)' }} />
              <div className="p-8 md:p-10">
                {sent ? (
                  <div className="text-center py-16">
                    <div className="w-12 h-px mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, #c9960f, transparent)' }} />
                    <h3 className="font-serif text-3xl text-white font-light mb-3">Message Received</h3>
                    <p className="text-sm" style={{ color: 'rgba(200,196,184,0.5)' }}>
                      A senior associate will contact you within 4 business hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl text-white mb-8">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="label-gold">Full Name</label>
                          <input type="text" required className="input-dark" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="label-gold">Company</label>
                          <input type="text" className="input-dark" placeholder="Company name" />
                        </div>
                      </div>
                      <div>
                        <label className="label-gold">Email</label>
                        <input type="email" required className="input-dark" placeholder="you@company.com" />
                      </div>
                      <div>
                        <label className="label-gold">Phone</label>
                        <input type="tel" className="input-dark" placeholder="+91 98765 43210" />
                      </div>
                      <div>
                        <label className="label-gold">Practice Area</label>
                        <select className="input-dark">
                          <option value="" style={{ background: '#16140f', color: '#c8c4b8' }}>Select area of interest</option>
                          {AREAS.map(a => (
                            <option key={a} value={a} style={{ background: '#16140f', color: '#c8c4b8' }}>{a}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="label-gold">Message</label>
                        <textarea required rows={4} className="input-dark" placeholder="Briefly describe your matter..." />
                      </div>
                      <button type="submit" className="btn-gold w-full group">
                        Send Message
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      <p className="text-[10px] text-center tracking-[0.15em] uppercase" style={{ color: 'rgba(200,196,184,0.25)' }}>
                        All communications are strictly confidential
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
