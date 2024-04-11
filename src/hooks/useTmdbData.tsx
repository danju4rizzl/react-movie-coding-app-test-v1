import { useQuery } from 'react-query'
import axios from 'axios'
import { Movie } from '../utils/types'

/**
 * @description This hook is used to fetch data from the TMDB API.
 * @example
 *  const {data, isLoading} = use useFetchTmdbData("trending/movies/week", "trends")
 * @param config  Should be a string that forms the TMDB's query request parameters
 * @param queryName Should be a string that forms the query key for React-Query
 * @param isDependent  Should be a boolean that to disable automatic refetching when the query mounts or changes query keys.
 * @tooling  Under the hook it uses React-Query + Axios
 */

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
