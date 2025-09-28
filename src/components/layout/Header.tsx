'use client'

import { useUser } from '@/lib/hooks/useUser'

export default function Header() {
  const { userId } = useUser()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Document Management & Semantic Search
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Powered by AI Document Analysis
            </p>
          </div>
          {userId && (
            <div className="text-right">
              <p className="text-xs text-gray-500">User ID</p>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                {userId.slice(0, 8)}...
              </code>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}