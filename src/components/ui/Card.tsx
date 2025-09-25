import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  onClick?: () => void
}

const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  onClick
}: CardProps) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700'

  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  }

  const Component = hover ? motion.div : 'div'
  const hoverProps = hover ? {
    whileHover: { scale: 1.02, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
    transition: { duration: 0.2 }
  } : {}

  return (
    <Component
      className={`
        ${baseStyles}
        ${paddings[padding]}
        ${hover ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      {...hoverProps}
    >
      {children}
    </Component>
  )
}

export default Card