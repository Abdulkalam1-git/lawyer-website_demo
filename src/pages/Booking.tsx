import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { FIRM } from '../data/content'

const TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

export default function Booking() {
  const [step, setStep] = useState(1)
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg px-6"
        >
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 mb-8">
            <CheckCircle size={40} />
          </div>
          <h1 className="font-serif text-4xl text-white mb-4">Consultation Confirmed</h1>
          <div className="divider-gold" />
          <p className="text-dark-400 leading-relaxed mb-4">
            Your consultation has been scheduled. A senior partner will call you at the confirmed time. You will receive a confirmation email shortly.
          </p>
          <p className="text-sm text-dark-500 mb-8">
            For urgent matters, call us directly at <a href={`tel:${FIRM.phone}`} className="text-gold-400">{FIRM.phone}</a>
          </p>
          <Link to="/" className="btn-gold">Return Home <ArrowRight size={15} /></Link>
        </motion.div>
      </section>
    )
  }

  return (
    <>
      <section className="relative pt-36 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-950" />
        <div className="container-law relative text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">Confidential · No Obligation</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
              Book a <span className="gold-text italic">Consultation</span>
            </h1>
            <p className="text-dark-400">45 minutes with a senior partner. Confidential. No junior associates.</p>
          </motion.div>
        </div>
      </section>

      {/* Progress */}
      <div className="container-law max-w-2xl mb-10">
        <div className="flex items-center gap-3">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3 flex-1">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all ${
                step >= s ? 'bg-gold-500 text-dark-950' : 'bg-white/10 text-dark-500'
              }`}>{s}</div>
              {s < 3 && <div className={`flex-1 h-px transition-all ${step > s ? 'bg-gold-500' : 'bg-white/10'}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-dark-500 tracking-widest uppercase">
          <span>Select Time</span>
          <span>Your Details</span>
          <span>Confirm</span>
        </div>
      </div>

      <section className="pb-24">
        <div className="container-law max-w-2xl">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 md:p-10"
          >
            {step === 1 && (
              <div>
                <h2 className="font-serif text-2xl text-white mb-6">Select a Date & Time</h2>
                <div className="mb-6">
                  <label className="label-gold">Preferred Date</label>
                  <input
                    type="date"
                    className="input-dark"
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label-gold">Available Times (IST)</label>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {TIMES.map(t => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2.5 text-xs rounded-sm border transition-all ${
                          selectedTime === t
                            ? 'bg-gold-500 text-dark-950 border-gold-500 font-semibold'
                            : 'border-white/10 text-dark-400 hover:border-gold-500/40 hover:text-gold-400'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedTime || !selectedDate}
                  className="btn-gold w-full mt-8 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight size={15} />
                </button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(3) }}>
                <h2 className="font-serif text-2xl text-white mb-6">Your Details</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-gold">Full Name *</label>
                      <input type="text" required className="input-dark" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="label-gold">Company</label>
                      <input type="text" className="input-dark" placeholder="Company / Organisation" />
                    </div>
                  </div>
                  <div>
                    <label className="label-gold">Email *</label>
                    <input type="email" required className="input-dark" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="label-gold">Phone *</label>
                    <input type="tel" required className="input-dark" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="label-gold">Practice Area</label>
                    <select className="input-dark">
                      <option value="">Select area of interest</option>
                      <option>Mergers & Acquisitions</option>
                      <option>Corporate Governance</option>
                      <option>Commercial Litigation</option>
                      <option>Regulatory & Compliance</option>
                      <option>Real Estate</option>
                      <option>Intellectual Property</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-gold">Brief Description of Matter</label>
                    <textarea rows={3} className="input-dark resize-none" placeholder="Briefly describe your legal matter (confidential)..." />
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1">Back</button>
                  <button type="submit" className="btn-gold flex-1">Review Booking <ArrowRight size={15} /></button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h2 className="font-serif text-2xl text-white mb-6">Confirm Your Booking</h2>
                <div className="space-y-3 mb-8">
                  {[
                    { label: 'Date', value: selectedDate },
                    { label: 'Time', value: `${selectedTime} IST` },
                    { label: 'Duration', value: '45 minutes' },
                    { label: 'Format', value: 'Video call or in-person (Mumbai)' },
                    { label: 'Handled by', value: 'Senior Partner' },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between py-3 border-b border-white/[0.05]">
                      <span className="text-xs tracking-widest uppercase text-dark-500">{item.label}</span>
                      <span className="text-sm text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gold-500/5 border border-gold-500/20 rounded-sm p-4 mb-6">
                  <p className="text-xs text-dark-400 leading-relaxed">
                    This consultation is strictly confidential. No information shared will be disclosed to any third party. There is no obligation to engage our services following the consultation.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1">Back</button>
                  <button type="submit" className="btn-gold flex-1">Confirm Booking</button>
                </div>
              </form>
            )}
          </motion.div>

          {/* WhatsApp alternative */}
          <div className="mt-6 text-center">
            <p className="text-sm text-dark-500 mb-3">Prefer to book via WhatsApp?</p>
            <a
              href={`https://wa.me/${FIRM.whatsapp}?text=I'd%20like%20to%20book%20a%20consultation%20with%20Meridian%20Law%20Group.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Book via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
