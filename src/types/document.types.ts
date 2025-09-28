export interface Document {
  key: string
  name: string
  size?: number
  type?: string
  lastModified?: Date
  uploadedAt?: Date
  url?: string
}

export interface DocumentUploadProgress {
  file: File
  progress: number
  status: 'pending' | 'uploading' | 'completed' | 'failed'
  error?: string
}

export interface DocumentMetadata {
  contentType: string
  size: number
  checksum?: string
  tags?: Record<string, string>
}