import { BiLike } from 'react-icons/bi'
import imdbLogo from '@/assets/imdb.svg'

interface MovieCardProps {
  id: number
  title: string
  releaseDate: string
  voteAverage: number
  voteCount: number
  posterPath: string
}

const MovieCard = ({
  id,
  title,
  releaseDate,
  voteAverage,
  voteCount,
  posterPath
}: MovieCardProps) => {
  return (
    <>
      {/* Movie card */}
      <div className="group w-1/2 my-5">
        {/*TODO: Make this image a link */}
        <img
          src={posterPath}
          alt={`Image of ${title}`}
          className="rounded-lg"
        />

        {/* Information  */}
        <div className="grid gap-1 px-1 md:px-14 my-2 ">
          <p className="text-gray-500 text-sm">
            Released: <span className="text-gray-600">{releaseDate}</span>
          </p>

          {/*TODO: Replace this with a Link */}

          <a
            href=""
            className="text-xl font-medium xl:font-bold  text-gray-800 leading-tight capitalize truncate group-hover:text-rose-700 ease-out duration-500"
          >
            {title}
          </a>
        </div>
        {/* Ratings */}
        <div className="flex items-center justify-between px-1.5">
          <div className="flex items-center">
            <img src={imdbLogo} alt="Logo of IMDB" width={40} height={40} />
            <p className="mx-2 text-sm text-gray-800 font-semibold">
              {voteCount}
            </p>
          </div>
          <div className="flex items-center">
            <div className="bg-rose-700 p-1.5 rounded-full">
              <BiLike className="text-white" />
            </div>
            <p className="mx-1 text-sm text-gray-800 font-semibold">
              {voteAverage}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieCard
