'use client'

import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { generateSecureUUID } from '@/lib/utils/uuid'
import { isValidUUID } from '@/lib/utils/validators'

export function useUser() {
  const [userId, setUserId] = useLocalStorage<string>('userId', '')
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initializeUser = () => {
      if (!userId || !isValidUUID(userId)) {
        const newUserId = generateSecureUUID()
        setUserId(newUserId)
        console.log('New user ID generated:', newUserId)
      } else {
        console.log('Existing user ID found:', userId)
      }
      setIsInitialized(true)
      setIsLoading(false)
    }

    // Small delay to ensure client-side hydration
    const timer = setTimeout(initializeUser, 0)
    return () => clearTimeout(timer)
  }, [])

  const resetUser = () => {
    const newUserId = generateSecureUUID()
    setUserId(newUserId)
    return newUserId
  }

  return {
    userId,
    isLoading,
    isInitialized,
    resetUser,
  }
}