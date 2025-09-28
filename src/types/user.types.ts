export interface User {
  id: string
  createdAt: Date
  preferences?: UserPreferences
}

export interface UserPreferences {
  theme?: 'light' | 'dark' | 'system'
  defaultSearchLimit?: number
  autoSave?: boolean
}

export interface UserSession {
  userId: string
  expiresAt?: Date
}