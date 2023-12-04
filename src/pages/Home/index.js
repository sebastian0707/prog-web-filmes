import { Container, MovieList, Movie } from "./styles";
import { APIKey } from '../../config/key';
import { useEffect, useState } from "react";


function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        //consumo da API

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt -US&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
    }, [])


    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https://www.google.com.br/?hl=pt-BR"> <img src={`${image_path}${movie.poster_path}`} alt={movie.title}></img></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}


export default Home;
