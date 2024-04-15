import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from '@/routes/root.tsx'
import ErrorPage from '@/error-page.tsx'
import MoviePage from '@/routes/movie-page.tsx'
import HomePage from '@/routes/home-page.tsx'
import { getMovies } from '@/utils/getMovies.ts'

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        path: '/',
        loader: async () => getMovies('trending/movie/day'),
        id: 'movies'
      },
      {
        element: <MoviePage />,
        path: '/movie/:id',
        loader: async ({ params }) => {
          const movie = await getMovies(`movie/${params.id}`)
          const reviews = await getMovies(`movie/${params.id}/reviews`)

          return { movie, reviews }
        },
        id: 'movie'
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
