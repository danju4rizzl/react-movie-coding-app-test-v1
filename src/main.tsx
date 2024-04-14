import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import MoviePage from './routes/movie-page.tsx'
import HomePage from './routes/home-page.tsx'
import { getMovies } from './utils/getMovies.ts'

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
        loader: async ({ params }) => getMovies(`movie/${params.id}`),
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
