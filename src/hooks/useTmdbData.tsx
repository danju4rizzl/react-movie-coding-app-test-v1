import { useQuery } from 'react-query'
import axios from 'axios'
import { TmdbData } from '../utils/types'
import { TMDB_API_KEY } from '../utils/constance'

/**
 * @description This custom hook  used to interact with TMDB's API.

 * @param config (required)  Should be a string that forms the TMDB's query request parameters
 * @param queryName (required) Should be a string that forms the query key for React-Query
 * @param isDependent (optional) Should be a boolean that to disable automatic refetching when the query mounts or changes query keys.
 * @example const {data, isLoading} = useTmdbData("trending/movies/week", "trends")
 
 * @tooling  Under the hook it uses React-Query + Axios
 */

export function useTmdbData(
  config: string,
  queryName: string,
  isDependent?: boolean
) {
  const { data, isLoading, isSuccess, isError, error } = useQuery<TmdbData>(
    queryName,
    async () =>
      await axios
        .get(`https://api.themoviedb.org/3/${config}?api_key=${TMDB_API_KEY}`)
        .then((res) => res.data),
    {
      enabled: isDependent,
      refetchOnWindowFocus: false
    }
  )

  return { data, isLoading, isSuccess, isError, error }
}
