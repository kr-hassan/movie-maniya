import React, {useState} from "react";
import {useEffect} from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

/*6cbc3b7e*/
const API_URL = 'http://www.omdbapi.com?apikey=6cbc3b7e';
const movie1 = {
    "Title": "Spider-Man",
    "Year": "2002",
    "imdbID": "tt0145487",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        setMovies(data?.Search || []);
         console.log('data.Search',data.Search);
    }
    useEffect(() => {
        searchMovies('Spider-man');

    }, []);
    return (
        <>
            <div className="app">
                <h1>Movie Maniya</h1>
                <div className="search">
                    <input placeholder="Search" value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)
                           }
                    />
                    <img src={SearchIcon} alt="search"
                         onClick={() => searchMovies(searchTerm)
                         }
                    />

                </div>
                {
                    movies?.length > 0 ? (
                            <div className="container">
                                {/*<MovieCard movie1={movies[0]}/>*/}
                                {movies.map((movie, index) => (
                                    <MovieCard key={index} movie={movie}/>
                                ))}
                            </div>
                        ) : (
                            <div className="empty">
                                <h2>No movies Found!</h2>

                            </div>
                        )
                }

                <div className="container">
                    <MovieCard movie={movies}/>
                </div>
            </div>
        </>
    );
}

export default App;

