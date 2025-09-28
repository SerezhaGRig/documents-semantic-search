/**
 * Validate UUID format
 */
export function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return uuidRegex.test(uuid)
}

/**
 * Check if file type is allowed
 */
export function isValidFileType(file: File, allowedTypes: string[]): boolean {
  if (allowedTypes.length === 0) return true // No restrictions
  return allowedTypes.includes(file.type)
}

/**
 * Check if file size is within limit
 */
export function isValidFileSize(file: File, maxSizeInBytes: number): boolean {
  return file.size <= maxSizeInBytes
}

/**
 * Format file size for display
 */
function formatFileSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  if (bytes === 0) return '0 Bytes'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
}

/**
 * Validate a file with multiple criteria
 */
export function validateFile(
  file: File,
  options: {
    maxSize?: number
    allowedTypes?: string[]
  } = {}
): { valid: boolean; error?: string } {
  const { 
    maxSize = 10 * 1024 * 1024, // Default 10MB
    allowedTypes = [] 
  } = options

  // Check file type if restrictions exist
  if (allowedTypes.length > 0 && !isValidFileType(file, allowedTypes)) {
    return {
      valid: false,
      error: `File type not allowed. Allowed types: ${allowedTypes.join(', ')}`,
    }
  }

  // Check file size
  if (!isValidFileSize(file, maxSize)) {
    return {
      valid: false,
      error: `File size exceeds maximum allowed size of ${formatFileSize(maxSize)}`,
    }
  }

  return { valid: true }
}

/**
 * Sanitize filename for safe storage
 */
export function sanitizeFilename(filename: string): string {
  // Remove special characters except dots, hyphens, and underscores
  return filename.replace(/[^a-z0-9._-]/gi, '_')
}

/**
 * Extract file extension
 */
export function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || ''
}