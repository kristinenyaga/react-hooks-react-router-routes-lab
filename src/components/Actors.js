import React from "react";
import { actors } from "../data";

function Actors() {
  let actorscard=actors.map(actor =>{
    return  <div key={actor.name}>
       <h2>Name: {actor.name}</h2><br/>
       Movies:
       <ul>
         {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
       </ul>
     </div>
 
   })
  return <div>
    <h1>Actors Page</h1>
    {actorscard}
    </div>;
}

export default Actors;
