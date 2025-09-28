'use client'

import UploadSection from './UploadSection'
import DocumentList from './DocumentList'
import { Alert } from '@/components/ui/Alert'
import { useDocuments } from '@/lib/hooks'

export default function DocumentsView() {
  const { error } = useDocuments()

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="error">
          Failed to load documents. Please try again.
        </Alert>
      )}
      
      <UploadSection />
      <DocumentList />
    </div>
  )
}