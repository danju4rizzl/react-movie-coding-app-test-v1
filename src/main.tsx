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
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from '@apollo/client'
import ErrorPage from '@/error-page.tsx'
import MoviePage from '@/routes/movie-page.tsx'
import HomePage from '@/routes/home-page.tsx'
import { getMovies } from '@/utils/getMovies.ts'

const movieUri = 'https://graph.imdbapi.dev/v1'

const client = new ApolloClient({
  uri: movieUri,
  cache: new InMemoryCache()
})

// client
//   .query({
//     query: gql`
//       {
//         title(id: "tt15398776") {
//           id
//           type
//           primary_title
//         }
//       }
//     `
//   })
//   .then((result) => console.log(result))

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
          const credits = await getMovies(`movie/${params.id}/credits`)

          return { movie, reviews, recommendations, credits }
        }}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
