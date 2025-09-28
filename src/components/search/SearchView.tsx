'use client'

import { useState } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import { useSearch } from '@/lib/hooks/useSearch'
import { Alert } from '@/components/ui/Alert'

export default function SearchView() {
  const [query, setQuery] = useState('')
  const { search, results, isSearching, error } = useSearch()

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery)
    await search(searchQuery)
  }

  return (
    <div className="space-y-6">
      <SearchForm
        onSearch={handleSearch}
        isSearching={isSearching}
      />
      
      {error && (
        <Alert variant="error">
          Failed to perform search. Please try again.
        </Alert>
      )}
      
      {results && (
        <SearchResults
          results={results}
          query={query}
        />
      )}
    </div>
  )
}