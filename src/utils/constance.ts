export const TMDB_API_KEY: string = import.meta.env.VITE_TMDB_API_KEY

export const TMDB_IMAGE_BASE = 'http://image.tmdb.org/t/p'

export const TMDB_IMAGE_SIZE = {
  sm: 'w92', // Small devices
  md: 'w154', // Medium devices
  lg: 'w185', // Large devices
  xl: 'w342', // Extra large devices
  '2xl': 'w500', // 2XL devices
  original: 'original' // Original size
}
