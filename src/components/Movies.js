import React, { useCallback, useEffect, useState } from "react";
import { movies } from "../data";

function Movies() {
  let moviecard=movies.map(movie =>{
   return  <div key={movie.title}>
     <h2>Name: {movie.title}</h2><br/>
      Time: {movie.time}<br></br>
      Genres:
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>

  })

  // const [movies,setMovies]=useState(movies)
  return <div>
    <h1>Movies Page</h1>
    {moviecard}
  </div>;
}

export default Movies;
