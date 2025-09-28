export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://m3wm13ba63.execute-api.us-east-1.amazonaws.com/dev'

export const API_ENDPOINTS = {
  SEMANTIC_SEARCH: '/document/semantic',
  UPLOAD_URL: '/document/upload/url',
  DELETE_DOCUMENT: '/document/delete',
  LIST_DOCUMENTS: '/document/list',
} as const