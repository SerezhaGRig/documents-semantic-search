'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { documentsApi } from '@/lib/api/documents'
import { useUser } from './useUser'
import toast from 'react-hot-toast'
import { validateFile } from '@/lib/utils/validators'
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/lib/constants/messages'

export function useDocuments() {
  const { userId } = useUser()
  const queryClient = useQueryClient()

  // Fetch documents
  const {
    data: documents = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['documents', userId],
    queryFn: async () => {
      if (!userId) throw new Error(ERROR_MESSAGES.NO_USER_ID)
      const response = await documentsApi.list({ userId })
      return response.files || []
    },
    enabled: !!userId,
    retry: 2,
    staleTime: 30000, // 30 seconds
  })

  // Upload mutation
  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      if (!userId) throw new Error(ERROR_MESSAGES.NO_USER_ID)
      
      // Validate file
      const validation = validateFile(file, {
        maxSize: Number(process.env.NEXT_PUBLIC_MAX_FILE_SIZE) || 10 * 1024 * 1024,
        allowedTypes: process.env.NEXT_PUBLIC_ALLOWED_FILE_TYPES?.split(',') || [],
      })
      
      if (!validation.valid) {
        throw new Error(validation.error)
      }
      console.info("file", file)
      // Get signed URL
      const { uploadUrl } = await documentsApi.getSignedUrl({
        userId,
        key: file.name,
      })
      console.info(uploadUrl)
      // Upload to signed URL
      await documentsApi.uploadToSignedUrl(uploadUrl, file)
      
      return file.name
    },
    onSuccess: (fileName) => {
      queryClient.invalidateQueries({ queryKey: ['documents', userId] })
      toast.success(SUCCESS_MESSAGES.UPLOAD_SUCCESS)
    },
    onError: (error: Error) => {
      toast.error(error.message || ERROR_MESSAGES.UPLOAD_FAILED)
      console.error('Upload error:', error)
    },
  })

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (documentKey: string) => {
      if (!documentKey) throw new Error('Document key is required')
      
      await documentsApi.delete({ key: `${userId}/${documentKey}` })
      return documentKey
    },
    onSuccess: (documentKey) => {
      queryClient.invalidateQueries({ queryKey: ['documents', userId] })
      toast.success(SUCCESS_MESSAGES.DELETE_SUCCESS)
    },
    onError: (error: Error) => {
      toast.error(ERROR_MESSAGES.DELETE_FAILED)
      console.error('Delete error:', error)
    },
  })

  return {
    documents,
    isLoading,
    error,
    refetch,
    uploadDocument: uploadMutation.mutate,
    uploadDocumentAsync: uploadMutation.mutateAsync,
    deleteDocument: deleteMutation.mutate,
    deleteDocumentAsync: deleteMutation.mutateAsync,
    isUploading: uploadMutation.isPending,
    isDeleting: deleteMutation.isPending,
    uploadError: uploadMutation.error,
    deleteError: deleteMutation.error,
  }
}