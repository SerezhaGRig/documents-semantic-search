'use client'

import { clsx } from 'clsx'

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  children: React.ReactNode
  className?: string
}

export function Alert({ variant = 'info', children, className }: AlertProps) {
  const variants = {
    info: 'bg-blue-100 border-blue-500 text-blue-700',
    success: 'bg-green-100 border-green-500 text-green-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    error: 'bg-red-100 border-red-500 text-red-700',
  }

  return (
    <div
      className={clsx(
        'p-4 border-l-4 rounded animate-fade-in',
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  )
}