'use client'

import { clsx } from 'clsx'

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Loader({ size = 'md', className }: LoaderProps) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  }

  return (
    <div
      className={clsx(
        'animate-spin rounded-full border-b-2 border-blue-600',
        sizes[size],
        className
      )}
    />
  )
}