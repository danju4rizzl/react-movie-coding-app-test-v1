import { Suspense } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

import { Movie, MovieCredits, MovieResults, ReviewData } from '@/utils/types'
import { TMDB_IMAGE_BASE, TMDB_IMAGE_SIZE } from '@/utils/constants'

import MovieImage from '@/components/MovieImage'
import Feedback from '@/components/ui/Feedback'
import ReviewCard from '@/components/ReviewCard'
import Title from '@/components/ui/Title'
import Badge from '@/components/ui/Badge'
import useIsMobile from '@/hooks/useIsMobile'

interface MoviePageData {
  movie: Movie
  reviews: ReviewData
  recommendations: MovieResults
  credits: MovieCredits
}

const MoviePage = () => {
  const isMobile = useIsMobile()
  const responseData = useLoaderData() as MoviePageData
  const { movie, reviews, recommendations, credits } = responseData

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
            <div
              className={`max-w-sm mx-auto  ${
                movie.poster_path ? 'w-full' : 'w-1/2'
              }`}
            >
              <MovieImage
                imgTitle={movie.title}
                imgPath={movie.poster_path}
                imgSize={TMDB_IMAGE_SIZE['2xl']}
              />
            </div>
            <div className="grid content-center gap-5">
              <div className="">
                <Title className="text-neutral-100" subtitle={movie.tagline}>
                  {movie.title}
                </Title>
              </div>
              <p className="text-lg">{movie.overview}</p>
              <div className="space-x-5">
                {movie.genres.map(({ name, id }) => (
                  <Badge key={id} title={name} />
                ))}
              </div>
              <div className="space-x-5">
                {movie.release_date && (
                  <Badge
                    title={`Premiered: ${movie.release_date.slice(0, 4)}`}
                  />
                )}
                {movie.spoken_languages.map(({ iso_639_1, english_name }) => (
                  <Badge title={english_name} key={iso_639_1} />
                ))}
              </div>
              <div className="grid gap-5 ">
                <Title className="text-neutral-100"> Cast</Title>
                <div className="grid  grid-cols-2 sm:flex gap-5 ">
                  {credits.cast
                    .filter(
                      ({ order, profile_path }) => profile_path && order < 4
                    )
                    .map(({ name, profile_path }) => (
                      <div className="grid justify-items-center space-y-3">
                        <img
                          key={name}
                          src={`${TMDB_IMAGE_BASE}/${
                            isMobile
                              ? TMDB_IMAGE_SIZE['2xl']
                              : TMDB_IMAGE_SIZE.sm
                          }/${profile_path}`}
                          alt={`image of ${name}`}
                          className="rounded"
                        />
                        <Badge title={name} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {recommendations.results.length > 0 && (
            <div className="space-y-8 p-5">
              <Title className="text-neutral-100">You might also like </Title>
              <div className="grid justify-center gap-5 md:gap-8 grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 ">
                {recommendations?.results.slice(0, 8).map((movie) => (
                  <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <MovieImage
                      imgPath={movie.poster_path}
                      imgTitle={movie.title}
                      imgSize={
                        isMobile ? TMDB_IMAGE_SIZE['2xl'] : TMDB_IMAGE_SIZE.md
                      }
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

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
