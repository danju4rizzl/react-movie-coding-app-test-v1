export interface Movies {
  results: [
    {
      adult: boolean
      backdrop_path: string
      id: number
      title: string
      original_language: string
      original_title: string
      overview: string
      poster_path: string
      media_type: string
      genre_ids: number[]
      popularity: number
      release_date: string
      video: boolean
      vote_average: number
      vote_count: number
    }
  ]
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null | {
    // Define collection properties if needed
  }
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type TmdbData = {
  results: Movie[]
}
