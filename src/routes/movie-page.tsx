import { Suspense } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import { Movie, MovieResults, ReviewData } from '@/utils/types'
import { TMDB_IMAGE_BASE, TMDB_IMAGE_SIZE } from '@/utils/constants'

import MovieImage from '@/components/MovieImage'
import Feedback from '@/components/ui/Feedback'
import ReviewCard from '@/components/ReviewCard'
import Title from '@/components/ui/Title'

interface MoviePageData {
  movie: Movie
  reviews: ReviewData
  recommendations: MovieResults
}

const MoviePage = () => {
  const responseData = useLoaderData() as MoviePageData
  const { movie, reviews, recommendations } = responseData

  return (
    <section className="pt-24">
      <Suspense fallback={<Feedback />}>
        <div
          className="grid place-content-center gap-3 text-white md:gap-12 px-3 sm:px-10 md:px-20 xl:px-40 pt-5 sm:pt-10 xl:pt-52 pb-20 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
             rgba(0, 0, 0, 0.98)),
              url(${TMDB_IMAGE_BASE}/${TMDB_IMAGE_SIZE.original}/${movie.backdrop_path})`
          }}
        >
          {/* Information */}
          <div className="grid sm:flex gap-3 md:gap-8 p-5">
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
              <div className="">{}</div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="space-y-8 p-5">
            <Title className="text-neutral-100">You might also like </Title>
            <div className="grid justify-center gap-5 md:gap-8 grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 ">
              {recommendations?.results.slice(0, 8).map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <MovieImage
                    imgPath={movie.poster_path}
                    imgTitle={movie.title}
                    imgSize={TMDB_IMAGE_SIZE.md}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="p-5">
            {!reviews.results.length ? (
              <Feedback errorTitle="No Reviews Yet" showError />
            ) : (
              <div className="space-y-10">
                <Title className="text-neutral-100">User reviews</Title>
                <ul className="grid gap-8 max-h-72 pr-3 overflow-y-scroll">
                  {reviews.results.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Suspense>
    </section>
  )
}

export default MoviePage
