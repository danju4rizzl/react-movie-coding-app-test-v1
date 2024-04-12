import MovieCard from '../components/MovieCard'
import { useTmdbData } from '../hooks/useTmdbData'
import { TMDB_API_KEY } from '../utils/constance'

function App() {
  const { data: movies, isLoading } = useTmdbData(
    'trending/movie/day',
    'movies',
    TMDB_API_KEY
  )

  return (
    <main>
      <div className="p-4 sm:p-14 md:py-20 md:px-32">
        <div className="">
          <h2 className="text-gray-900 text-xl sm:text-3xl md:text-4xl font-bold capitalize">
            <span className="border-l-8 border-rose-700 mr-5 "></span>
            Trending Movies
          </h2>
          <div className="grid justify-center gap-1 md:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {/* Movie card */}

            {movies?.results.map((movie) =>
              isLoading ? (
                <p>Loading...</p>
              ) : (
                <MovieCard key={movie.id} {...movie} />
              )
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
