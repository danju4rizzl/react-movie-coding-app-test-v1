import axios from 'axios'
import { TMDB_API_KEY, TMDB_BASE_URL } from '@/utils/constants'
import { MovieData } from '@/utils/types'

export const getMovies = (query: string): Promise<MovieData> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get<MovieData>(
        `${TMDB_BASE_URL}/${query}?api_key=${TMDB_API_KEY}`
      )
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })
}
