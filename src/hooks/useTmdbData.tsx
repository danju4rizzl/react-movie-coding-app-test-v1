import { useQuery } from 'react-query'
import axios from 'axios'
import { TmdbData } from '../utils/types'

/**
 * @description This custom hook  used to interact with TMDB's API.

 * @param config (required)  Should be a string that forms the TMDB's query request parameters
 * @param queryName (required) Should be a string that forms the query key for React-Query
 * @param apiKey (required) The API key for TMDB API. You can get the link in the `README.md`.
 * @param isDependent (optional) Should be a boolean that to disable automatic refetching when the query mounts or changes query keys.
 * @example const {data, isLoading} = useTmdbData("trending/movies/week", "trends")
 
 * @tooling  Under the hook it uses React-Query + Axios
 */

export function useTmdbData(
  config: string,
  queryName: string,
  apiKey: string,
  isDependent?: boolean
) {
  const { data, isLoading, isSuccess, isError, error } = useQuery<TmdbData>(
    queryName,
    async () =>
      (await axios
        .get(`https://api.themoviedb.org/3/${config}?api_key=${apiKey}`)
        .then((res) => res.data)) as TmdbData,
    {
      enabled: isDependent,
      refetchOnWindowFocus: false,
      cacheTime: 34000
    }
  )

  return { data, isLoading, isSuccess, isError, error }
}
