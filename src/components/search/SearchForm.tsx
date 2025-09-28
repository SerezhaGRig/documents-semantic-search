'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface SearchFormProps {
  onSearch: (query: string) => void
  isSearching: boolean
}

export default function SearchForm({ onSearch, isSearching }: SearchFormProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Query
        </label>
        <div className="flex gap-2">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your search query..."
            disabled={isSearching}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isSearching || !query.trim()}
            loading={isSearching}
          >
            Search
          </Button>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Search across all your uploaded documents using natural language
        </p>
      </div>
    </form>
  )
}