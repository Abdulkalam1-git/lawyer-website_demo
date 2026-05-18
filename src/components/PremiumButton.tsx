import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PremiumButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: 'arrow' | 'phone' | 'whatsapp' | 'none'
  href?: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

const iconMap = {
  arrow: ArrowRight,
  phone: Phone,
  whatsapp: MessageCircle,
  none: null
}

export default function PremiumButton({
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  href,
  to,
  onClick,
  children,
  className = '',
  disabled = false
}: PremiumButtonProps) {
  const IconComponent = iconMap[icon]
  
  const sizeClasses = {
    sm: 'px-6 py-3 text-[10px]',
    md: 'px-8 py-4 text-[11px]',
    lg: 'px-10 py-5 text-[12px]'
  }

  const variantClasses = {
    primary: 'btn-gold',
    outline: 'btn-outline',
    ghost: 'text-gold-400 hover:text-gold-300 transition-colors duration-300'
  }

  const baseClasses = `
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${className}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `.trim()

  const content = (
    <>
      <span>{children}</span>
      {IconComponent && (
        <motion.div
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <IconComponent size={size === 'sm' ? 13 : size === 'md' ? 15 : 17} />
        </motion.div>
      )}
    </>
  )

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 }
  }

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={baseClasses}
        {...motionProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {content}
    </motion.button>
  )
}