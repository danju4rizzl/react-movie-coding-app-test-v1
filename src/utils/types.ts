// Interface defining the structure of a Movie object
export interface Movie {
  backdrop_path: string
  id: number
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  adult: boolean
  title: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

// Interface representing the data structure for a collection of movies
export interface MovieData {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

// Type defining the structure of movie results
export type MovieResults = {
  results: Movie[]
}

// Interface representing the base structure for a review
export interface Review {
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: string | null
    rating: number
  }
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

// Interface defining the data  structure for reviews
export interface ReviewData {
  id: number
  page: number
  results: Review[]
  total_pages: number
  total_results: number
}

// Deejay continue here : https://developer.themoviedb.org/reference/movie-credits
// testing Movie ID: 1011985
export interface CastMember {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface MovieCredits {
  id: number
  cast: CastMember[]
}
