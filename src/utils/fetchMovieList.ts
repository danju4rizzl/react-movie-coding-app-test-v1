import axios from 'axios'
import { TMDB_API_KEY, TMDB_BASE_URL } from './constance'
import { MovieData } from './types'

export const getMovies = async (tmdbQuery: string): Promise<MovieData> => {
  try {
    const response = await axios.get<MovieData>(
      `${TMDB_BASE_URL}/${tmdbQuery}?api_key=${TMDB_API_KEY}`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw new Error('Failed to fetch movies')
  }
}
