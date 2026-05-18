import { motion } from 'framer-motion'
import { Award, Shield, Star, CheckCircle, Users, Briefcase } from 'lucide-react'

const TRUST_BADGES = [
  {
    icon: <Award size={20} />,
    title: 'Chambers Band 1',
    subtitle: 'Asia-Pacific Ranking',
    color: 'from-gold-500 to-gold-600'
  },
  {
    icon: <Shield size={20} />,
    title: 'ISO 27001',
    subtitle: 'Data Security Certified',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <Star size={20} />,
    title: 'Legal 500',
    subtitle: 'Tier 1 Recognition',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <CheckCircle size={20} />,
    title: '98% Success Rate',
    subtitle: 'Case Resolution',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <Users size={20} />,
    title: '850+ Clients',
    subtitle: 'Trusted Worldwide',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: <Briefcase size={20} />,
    title: '₹1.2L Cr+',
    subtitle: 'Deal Value Advised',
    color: 'from-gold-500 to-gold-600'
  }
]

export default function TrustBadges() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-premium-gold opacity-30" />
      <div className="absolute inset-0" style={{ 
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201,150,15,0.08) 0%, transparent 70%)' 
      }} />
      
      <div className="container-law relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-10"
        >
          <p className="eyebrow mb-3">Trusted & Recognized</p>
          <h2 className="font-serif text-2xl md:text-3xl font-light text-white">
            Industry <em className="gold-text not-italic">Leadership</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {TRUST_BADGES.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="premium-card p-4 md:p-6 text-center group cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${badge.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {badge.icon}
                </div>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-gold-400 transition-colors duration-300">
                {badge.title}
              </h3>
              <p className="text-xs text-gray-400 leading-tight">
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}