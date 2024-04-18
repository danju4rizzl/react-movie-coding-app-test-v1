import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Root from '@/routes/root.tsx'
import ErrorPage from '@/error-page.tsx'
import MoviePage from '@/routes/movie-page.tsx'
import HomePage from '@/routes/home-page.tsx'
import { getMovies } from '@/utils/getMovies.ts'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<ErrorPage />}>
      <Route
        path="/"
        element={<HomePage />}
        id="movies"
        loader={async () => getMovies('trending/movie/day')}
      />
      <Route
        path="/movie/:id"
        element={<MoviePage />}
        id="movie"
        loader={async ({ params }) => {
          const movie = await getMovies(`movie/${params.id}`)
          const reviews = await getMovies(`movie/${params.id}/reviews`)
          const recommendations = await getMovies(
            `movie/${params.id}/recommendations`
          )

          console.log(`🎥Movie`, movie)
          console.log(`🤘Reviews`, reviews)
          console.log(`🤨recommendations`, recommendations)
          return { movie, reviews, recommendations }
        }}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
