'use client'

import { useDocuments } from '@/lib/hooks'
import DocumentItem from './DocumentItem'
import { Loader } from '@/components/ui/Loader'

export default function DocumentList() {
  const { documents, isLoading, deleteDocument, isDeleting } = useDocuments()

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <Loader />
      </div>
    )
  }

  if (documents.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No documents</h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by uploading a document.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Your Documents ({documents.length})
      </h3>
      <div className="space-y-2">
        {documents.map((doc) => (
          <DocumentItem
            key={doc}
            name={doc}
            onDelete={() => deleteDocument(doc)}
            isDeleting={isDeleting}
          />
        ))}
      </div>
    </div>
  )
}