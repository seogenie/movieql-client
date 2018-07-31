import React from 'react'
import { Query } from 'react-apollo';
import { MOVIE_LIST } from './queries';

const Home = () => 
    <Query query={MOVIE_LIST}>
    {( { loading, data, error } )=> {
        if(loading) return <span>LOADING</span>
        if(error) return <span>ERROR</span>
        if(data) {
            console.log(data)
            return data.movies.map(movie => (
                <h3 key={movie.id}>
                    <a href={`/#/details/${movie.id}`}> {movie.title} </a> / {movie.rating}
                    
                </h3>
                
            ))
        }
    }}
    </Query>

export default Home