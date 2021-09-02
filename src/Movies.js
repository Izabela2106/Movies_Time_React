import Movie from "./Movie"
import {fetchData} from './fetchData';
import {useGlobalContext} from "./context.js"
import { useState, useRef, useEffect } from 'react'


const Movies=()=>{
    
    const {movies,loading,url,dataToFetch}= useGlobalContext();
    
   
    
    useEffect(()=>{
      
    },[url]);
    
  
  
        return <div className={`${loading ?"hidden movies" : "movies"}`}>
                    { 
                    movies.map(movie=>{
            return <Movie movie={movie} key={movie.id}>
            </Movie>
            })
                }
                    </div>
            }


            export default Movies