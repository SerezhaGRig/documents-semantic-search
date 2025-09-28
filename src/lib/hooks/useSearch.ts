'use client'

import { useState, useCallback } from 'react'
import { searchApi } from '@/lib/api/search'
import { useUser } from './useUser'
import { SemanticSearchResponse } from '@/types/api.types'
import toast from 'react-hot-toast'
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/lib/constants/messages'

export function useSearch() {
  const { userId } = useUser()
  const [results, setResults] = useState<SemanticSearchResponse | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  const search = useCallback(async (query: string) => {
    if (!userId) {
      toast.error(ERROR_MESSAGES.NO_USER_ID)
      return
    }

    if (!query.trim()) {
      toast.error('Please enter a search query')
      return
    }

    setIsSearching(true)
    setError(null)
    
    try {
      const response = await searchApi.semanticSearch({
        userId,
        query: query.trim(),
      })
      
      setResults(response)
      
      // Add to search history
      setSearchHistory((prev) => {
        const newHistory = [query, ...prev.filter((q) => q !== query)]
        return newHistory.slice(0, 10) // Keep last 10 searches
      })
      
      // Show success if results found
      if (response.response?.content || response.dataset?.length > 0) {
        toast.success(SUCCESS_MESSAGES.SEARCH_SUCCESS)
      } else {
        toast.success('No results found for your search')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : ERROR_MESSAGES.SEARCH_FAILED
      setError(errorMessage)
      toast.error(errorMessage)
      console.error('Search error:', err)
    } finally {
      setIsSearching(false)
    }
  }, [userId])

  const clearResults = useCallback(() => {
    setResults(null)
    setError(null)
  }, [])

  const clearHistory = useCallback(() => {
    setSearchHistory([])
  }, [])

  return {
    search,
    results,
    isSearching,
    error,
    searchHistory,
    clearResults,
    clearHistory,
  }
}