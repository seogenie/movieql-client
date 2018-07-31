import gql from "graphql-tag"

export const MOVIE_LIST = gql`
    {
        movies( limit:50, rating:7 ){
            id,
            title,
            genres,
            rating
        }
    }
`

export const MOVIE_DETAIL = gql`
    query getMovieDetails($movieId: Int!) {
     movie(id: $movieId) {
        title,
        description_intro
     }
 }
`