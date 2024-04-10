import MovieCard from './components/MovieCard'

const dummyData = [
  {
    id: 1,
    title: 'Move 1',
    releaseDate: '2023-05-15',
    voteAverage: 8.5,
    voteCount: 1200,
    posterPath: 'https://placehold.co/300x450'
  },
  {
    id: 2,
    title: 'Move 2',
    releaseDate: '2022-11-30',
    voteAverage: 7.9,
    voteCount: 950,
    posterPath: 'https://placehold.co/300x450'
  },
  {
    id: 3,
    title: 'Move 3',
    releaseDate: '2024-02-10',
    voteAverage: 9.2,
    voteCount: 1800,
    posterPath: 'https://placehold.co/300x450'
  }
]

function App() {
  return (
    <main>
      <div className="p-4 sm:p-14 md:py-20 md:px-32">
        <div className="">
          <h2 className="text-gray-900 text-xl sm:text-3xl md:text-4xl font-bold capitalize">
            <span className="border-l-8 border-rose-700 mr-5 "></span>
            Trending Movies
          </h2>

          {/* Movie card */}
          {dummyData.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
