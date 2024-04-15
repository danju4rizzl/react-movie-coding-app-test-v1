import { useLoaderData } from 'react-router-dom'
import { TMDB_IMAGE_BASE, TMDB_IMAGE_SIZE } from '../utils/constants'

import MovieImage from '../components/MovieImage'
import { Movie, ReviewData } from '../utils/types'
import Feedback from '../components/ui/Feedback'
import { Suspense } from 'react'
import ReviewCard from '../components/ReviewCard'
import Title from '../components/ui/Title'

interface MoviePageData {
  movie: Movie
  reviews: ReviewData
}
const MoviePage = () => {
  const responseData = useLoaderData() as MoviePageData
  const { movie, reviews } = responseData

  return (
    <section>
      <Suspense fallback={<Feedback />}>
        <div
          className="grid place-content-center gap-3 text-white  md:gap-12 md:px-40 md:pt-40 pb-20 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.98)), url(${TMDB_IMAGE_BASE}/${TMDB_IMAGE_SIZE.original}/${movie.backdrop_path})`
          }}
        >
          <div className="flex md:gap-x-8">
            <div className="w-full">
              <MovieImage
                imgTitle={movie.title}
                imgPath={movie.poster_path}
                imgSize={TMDB_IMAGE_SIZE['2xl']}
              />
            </div>
            <div className="grid content-center gap-5">
              <Title className="text-neutral-100">{movie.title}</Title>
              <p className="text-lg">{movie.overview}</p>
            </div>
          </div>
          {/* Review card */}
          {!reviews.results.length ? (
            <Feedback errorTitle="No Reviews Yet" showError />
          ) : (
            <div className="space-y-10 max-w-screen-lg mx-auto">
              <Title className="text-neutral-100">User reviews</Title>
              <ul className="overflow-y-scroll pr-5 grid  gap-8 md:max-h-72 ">
                {reviews.results.map((review) => (
                  <ReviewCard key={review.id} {...review} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </Suspense>
    </section>
  )
}

export default MoviePage
