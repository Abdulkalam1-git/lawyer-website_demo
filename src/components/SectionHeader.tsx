import { motion } from 'framer-motion'

interface Props {
  eyebrow?: string
  title: string
  goldWord?: string
  subtitle?: string
  center?: boolean
  large?: boolean
}

export default function SectionHeader({ eyebrow, title, goldWord, subtitle, center = true, large = false }: Props) {
  const parts = goldWord ? title.split(goldWord) : [title]
  const titleSize = large
    ? 'text-5xl md:text-6xl lg:text-7xl'
    : 'text-4xl md:text-5xl lg:text-6xl'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={center ? 'text-center' : ''}
    >
      {eyebrow && (
        <div className={`section-eyebrow ${center ? 'justify-center' : ''}`}>
          {eyebrow}
        </div>
      )}

      <h2 className={`section-title ${titleSize} font-light`}>
        {parts[0]}
        {goldWord && <em className="gold-text not-italic">{goldWord}</em>}
        {parts[1]}
      </h2>

      {center && <div className="divider-gold" />}
      {!center && <div className="divider-gold-left" />}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-[#a09880] leading-relaxed text-base max-w-2xl ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
