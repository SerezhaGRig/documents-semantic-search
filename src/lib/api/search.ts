import { apiClient } from './client'
import {
  SemanticSearchRequest,
  SemanticSearchResponse,
} from '@/types/api.types'

export const searchApi = {
  semanticSearch: async (data: SemanticSearchRequest) => {
    const response = await apiClient.post<SemanticSearchResponse>(
      '/document/semantic',
      data
    )
    return response.data
  },
}