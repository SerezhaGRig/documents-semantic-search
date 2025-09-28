'use client'

import { SemanticSearchResponse } from '@/types/api.types'
import AnswerDisplay from './AnswerDisplay'
import SourcesList from './SourcesListed'

interface SearchResultsProps {
  results: SemanticSearchResponse
  query: string
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  if (!results.response?.content && (!results.dataset || results.dataset.length === 0)) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No results found for your search.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-sm font-medium text-gray-600 mb-1">Search Query</h3>
        <p className="text-gray-900">{query}</p>
      </div>

      {results.response?.content && (
        <AnswerDisplay content={results.response.content} />
      )}
      
      {results.dataset && results.dataset.length > 0 && (
        <SourcesList sources={results.dataset} />
      )}
    </div>
  )
}