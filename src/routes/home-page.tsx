import { useRouteLoaderData } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import { MovieResults } from '../utils/types'
import Feedback from '../components/ui/Feedback'
import { Suspense } from 'react'
import Title from '../components/ui/Title'

const HomePage = () => {
  const res = useRouteLoaderData('movies')
  const movies = res as MovieResults

  return (
    <section className="pt-24">
      <Suspense fallback={<Feedback />}>
        <div className="p-4 sm:p-14 md:py-20 md:px-32">
          {/* Hero Section will be here*/}
          <div className="space-y-5">
            <Title>Random Movies</Title>
            <div className="grid justify-center  gap-1 md:gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {movies?.results.slice(0, 10).map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </section>
  )
}

export default HomePage
