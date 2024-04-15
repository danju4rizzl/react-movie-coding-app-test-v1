import axios from 'axios'

import { TMDB_API_KEY, TMDB_BASE_URL } from '@/utils/constants'
import { Movie, MovieData } from '@/utils/types'

export const searchMovies = (query: string): Promise<Movie[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get<MovieData>(
        `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
      )
      resolve(response.data.results)
    } catch (error) {
      reject(error)
    }
  })
}
