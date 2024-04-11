import MovieCard from './components/MovieCard'
import { useTmdbData } from './hooks/useTmdbData'

function App() {
  const { data: allMovies } = useTmdbData('trending/movie/day', 'movies')

  console.log(allMovies)
  return (
    <main>
      <div className="p-4 sm:p-14 md:py-20 md:px-32">
        <div className="">
          <h2 className="text-gray-900 text-xl sm:text-3xl md:text-4xl font-bold capitalize">
            <span className="border-l-8 border-rose-700 mr-5 "></span>
            Trending Movies
          </h2>

          {/* Movie card */}
          {allMovies?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
