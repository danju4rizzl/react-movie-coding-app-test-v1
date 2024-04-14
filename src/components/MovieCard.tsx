import { BiLike } from 'react-icons/bi'
import imdbLogo from '@/assets/imdb.svg'
import { Movie } from '../utils/types'
import MovieImage from './MovieImage'
import { TMDB_IMAGE_SIZE } from '../utils/constants'
import { Link } from 'react-router-dom'

const MovieCard = ({
  id,
  title,
  release_date,
  vote_average,
  vote_count,
  poster_path
}: Movie) => {
  return (
    <>
      {/* Movie card */}
      <div className="pb-5 group md:w-full rounded-lg my-5 bg-neutral-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-neutral-200">
        <Link to={`/movie/${id}`}>
          <MovieImage
            imgTitle={title}
            imgPath={poster_path}
            imgSize={TMDB_IMAGE_SIZE.xl}
          />
        </Link>

        {/* Information  */}
        <div className="px-3">
          <div className="grid gap-1 my-2">
            <p className="text-neutral-900 text-sm ">
              Released:{' '}
              <span className="text-neutral-600 font-medium">
                {release_date}
              </span>
            </p>

            <Link
              to={`/movie/${id}`}
              className="text-xl font-medium xl:font-bold  text-gray-800 leading-tight capitalize truncate group-hover:text-rose-700 ease-out duration-500"
            >
              {title}
            </Link>
          </div>
          {/* Ratings */}
          <div className="flex items-center justify-between px-1.5">
            <div className="flex items-center">
              <img src={imdbLogo} alt="Logo of IMDB" width={40} height={40} />
              <p className="mx-2 text-sm text-gray-800 font-semibold">
                {vote_count}
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-rose-700 p-1.5 rounded-full">
                <BiLike className="text-white" />
              </div>
              <p className="mx-1 text-sm text-gray-800 font-semibold">
                {vote_average}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
