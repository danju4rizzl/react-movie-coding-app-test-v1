import { useQuery } from 'react-query'
import axios from 'axios'
import { Movie } from '../utils/types'

export function useTmdbData(
  config: string,
  queryName: string,
  isDependent?: boolean
) {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  const { data, isLoading, isSuccess, isError, error } = useQuery<Movie[]>(
    queryName,
    async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${config}?api_key=${apiKey}`
        )
        return response.data.results
      } catch (error) {
        throw new Error('Failed to fetch data')
      }
    },
    {
      enabled: isDependent,
      useErrorBoundary: true,
      refetchOnWindowFocus: false
    }
  )
  return { data, isLoading, isSuccess, isError, error }
}
