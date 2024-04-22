import { gql } from '@apollo/client'

export const MoviesQuery = gql`
  query GetMovies($ids: [String!]!) {
    titles(ids: $ids) {
      id
      primary_title
      plot
      posters {
        url: url
      }
      rating {
        votes_count
        aggregate_rating
      }
    }
  }
`
// {
//     randomMovies(count: 10) {
//       id
//       name
//       description
//       rating {
//         imdb_rating
//       }
//     }
//   }
