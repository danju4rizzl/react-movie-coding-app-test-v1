import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import MoviePage from './routes/movie-page.tsx'
import HomePage from './routes/home-page.tsx'
import { getMovies } from './utils/fetchMovieList.ts'

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
