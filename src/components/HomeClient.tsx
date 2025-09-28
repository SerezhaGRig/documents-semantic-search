'use client'

import { useRouter } from 'next/navigation'
import DocumentsView from './documents/DocumentsView';
import SearchView from './search/SearchView';
import { useUser } from '@/lib/hooks';
import { Tabs } from './ui/Tabs';

interface ClientHomePageProps {
  signedUrl?: string;
}

export default function HomeClient({signedUrl}: ClientHomePageProps) {
  const { userId, isLoading } = useUser()
  const router = useRouter()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const tabs = [
    {
      label: 'Documents',
      value: 'documents',
      content: <DocumentsView />
    },
    {
      label: 'Semantic Search',
      value: 'search',
      content: <SearchView />
    }
  ]

    return (
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg">
          <Tabs tabs={tabs} defaultValue="documents" />
        </div>
      </div>
    )
}