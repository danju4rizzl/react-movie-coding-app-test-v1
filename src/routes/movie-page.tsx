import { Link, useParams } from 'react-router-dom'
import { useTmdbData } from '../hooks/useTmdbData'
import { TMDB_IMAGE_BASE, TMDB_IMAGE_SIZE } from '../utils/constance'

import Feedback from '../components/ui/Spinner'
import MovieImage from '../components/MovieImage'
import Button from '../components/ui/Button'
import { Movie } from '../utils/types'

const MoviePage = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useTmdbData(`movie/${id}`, 'movie')

  console.log('location', location)

  // TODO 🔴 fix the hook to return type issues instead of using any
  const currentMovie = data as Movie | any

  if (isError) {
    return <Feedback showError errorTitle="Cannot find movie ⚰️" />
  }

  if (isLoading) {
    return <Feedback />
  }

  return (
    <div
      className="text-white flex gap-5 md:gap-12 md:p-40 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.98)), url(${TMDB_IMAGE_BASE}/${TMDB_IMAGE_SIZE.original}/${currentMovie.backdrop_path})`
      }}
    >
      <MovieImage
        imgTitle={currentMovie.title}
        imgPath={currentMovie.poster_path}
        imgSize={TMDB_IMAGE_SIZE['2xl']}
      />
      <div className="grid place-content-center gap-3 pr-24">
        <h2 className="text-5xl ">{currentMovie.title}</h2>
        <p className="text-lg">{currentMovie.overview}</p>
        <Link to="/" className="text-lg ">
          <Button> Back to home</Button>
        </Link>
      </div>
    </div>
  )
}

export default MoviePage
