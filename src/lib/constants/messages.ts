export const SUCCESS_MESSAGES = {
  UPLOAD_SUCCESS: 'Document uploaded successfully',
  DELETE_SUCCESS: 'Document deleted successfully',
  SEARCH_SUCCESS: 'Search completed successfully',
  DOCUMENT_LOADED: 'Documents loaded successfully',
} as const

export const ERROR_MESSAGES = {
  UPLOAD_FAILED: 'Failed to upload document. Please try again.',
  DELETE_FAILED: 'Failed to delete document. Please try again.',
  SEARCH_FAILED: 'Failed to perform search. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_FILE: 'Invalid file format.',
  FILE_TOO_LARGE: 'File size exceeds the maximum limit.',
  NO_USER_ID: 'User ID not found. Please refresh the page.',
  API_ERROR: 'An error occurred with the API request.',
  LOAD_DOCUMENTS_FAILED: 'Failed to load documents.',
} as const

export const CONFIRMATION_MESSAGES = {
  DELETE_DOCUMENT: 'Are you sure you want to delete this document? This action cannot be undone.',
  CLEAR_SEARCH: 'Clear search results?',
} as const

export const PLACEHOLDER_TEXT = {
  SEARCH_INPUT: 'Enter your search query...',
  NO_DOCUMENTS: 'No documents uploaded yet. Upload your first document to get started!',
  NO_RESULTS: 'No results found for your search.',
  LOADING_DOCUMENTS: 'Loading your documents...',
} as const

export const LABELS = {
  UPLOAD_BUTTON: 'Choose File to Upload',
  SEARCH_BUTTON: 'Search',
  DELETE_BUTTON: 'Delete',
  CANCEL_BUTTON: 'Cancel',
  DOCUMENTS_TAB: 'Documents',
  SEARCH_TAB: 'Semantic Search',
} as const