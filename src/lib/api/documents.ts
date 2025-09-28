import { apiClient } from './client'
import {
  GetDocumentSignedUrlRequest,
  GetDocumentSignedUrlResponse,
  DeleteDocumentRequest,
  DeleteDocumentResponse,
  ListDocumentRequest,
  ListDocumentResponse,
} from '@/types/api.types'

export const documentsApi = {
  getSignedUrl: async (data: GetDocumentSignedUrlRequest) => {
    const response = await apiClient.post<GetDocumentSignedUrlResponse>(
      '/document/upload/url',
      data
    )
    return response.data
  },

  uploadToSignedUrl: async (signedUrl: string, file: File) => {
    const response = await fetch(signedUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    })
    console.info(response)
    if (!response.ok) throw new Error('Upload failed')
    return response
  },

  list: async (data: ListDocumentRequest) => {
    const response = await apiClient.post<ListDocumentResponse>(
      '/document/list',
      data
    )
    return response.data
  },

  delete: async (data: DeleteDocumentRequest) => {
    const response = await apiClient.delete<DeleteDocumentResponse>(
      '/document/delete',
      { data }
    )
    return response.data
  },
}