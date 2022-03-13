import React from "react";
const MovieCard = ({movie})=>{
    console.log('movie->', movie)
    return(
        <div className="movie">
            <div>
                <p>{movie.Year??''}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                     alt={movie.Title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>


        </div>
    );

}

export default MovieCard;

// <div className="movie">
//     <div>
//         <p>{movie1.Year}</p>
//     </div>
//     <div>
//         <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'}
//              alt={movie1.Title}/>
//     </div>
//     <div>
//         <span>{movie1.Type}</span>
//         <h3>{movie1.Title}</h3>
{/*    </div>*/}


{/*</div>*/}