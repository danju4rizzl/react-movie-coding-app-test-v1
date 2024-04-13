import MovieCard from '../components/MovieCard'
import Feedback from '../components/ui/Spinner'
import { useTmdbData } from '../hooks/useTmdbData'

function HomePage() {
  const {
    data: movies,
    isLoading,
    isError
  } = useTmdbData('trending/movie/day', 'movies')

  if (isError) {
    return <Feedback showError />
  }

  if (isLoading) {
    return <Feedback />
  }

  return (
    <section>
      <div className="p-4 sm:p-14 md:py-20 md:px-32">
        <div className="">
          <h2 className="text-gray-900 text-xl sm:text-3xl md:text-4xl font-semibold capitalize">
            <span className="border-l-8 border-rose-700 mr-5 "></span>
            Random Movies
          </h2>
          <div className="grid justify-center  gap-1 md:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {movies?.results.slice(0, 10).map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
