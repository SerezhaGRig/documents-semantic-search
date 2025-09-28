// API Types based on Swagger specification

export interface SemanticSearchRequest {
  userId: string
  query: string
}

export interface SemanticSearchResponse {
  response: {
    content: string
  }
  dataset: Array<{
    pageContent: string
    metadata: {
      source: Record<string, any>
    }
  }>
}

export interface GetDocumentSignedUrlRequest {
  userId: string
  key: string
}

export interface GetDocumentSignedUrlResponse {
  uploadUrl: string
}

export interface DeleteDocumentRequest {
  key: string
}

export interface DeleteDocumentResponse {
  message: string
}

export interface ListDocumentRequest {
  userId: string
}

export interface ListDocumentResponse {
  files: string[]
}

export interface ApiError {
  error: string
  details?: Record<string, any>
}