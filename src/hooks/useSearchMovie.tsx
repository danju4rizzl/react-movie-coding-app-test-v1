import { useQuery } from 'react-query'
import axios from 'axios'
import { Movies } from '../utils/types'
import { TMDB_API_KEY } from '../utils/constance'

const useSearchMovie = (movieQuery: string) => {
  const { data, isLoading, isSuccess, isError } = useQuery<Movies[] | null>(
    'search',
    async () =>
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${movieQuery}&page=1&include_adult=true`
        )
        .then((res) => res.data.results),
    {
      enabled: !!movieQuery
    }
  )

  return { data, isLoading, isSuccess, isError }
}

export default useSearchMovie
