import React from "react";
import { directors } from "../data";

function Directors() {
  let directorcard=directors.map(director =>{
    return  <div key={director.name}>
       <h2>Name: {director.name}</h2>
       Movies:
       <ul>
         {director.movies.map(movie => <li key={movie}>{movie}</li>)}
       </ul>
     </div>
  })
  return <div>
    <h1>Directors Page</h1>
    {directorcard}
    </div>;
}

export default Directors;
