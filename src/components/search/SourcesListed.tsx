'use client'

interface Source {
  pageContent: string
  metadata: {
    source: Record<string, any>
  }
}

interface SourcesListProps {
  sources: Source[]
}

export default function SourcesList({ sources }: SourcesListProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
        <svg
          className="h-5 w-5 mr-2 text-green-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
            clipRule="evenodd"
          />
        </svg>
        Sources Used ({sources.length})
      </h3>
      <div className="space-y-3">
        {sources.map((source, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
          >
            <div className="mb-2">
              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Source {index + 1}
              </span>
              {source.metadata?.source && (
                <span className="ml-2 text-sm text-gray-600">
                  {typeof source.metadata.source === 'object'
                    ? JSON.stringify(source.metadata.source, null, 2)
                    : source.metadata.source}
                </span>
              )}
            </div>
            <p className="text-gray-700 text-sm">{source.pageContent}</p>
          </div>
        ))}
      </div>
    </div>
  )
}