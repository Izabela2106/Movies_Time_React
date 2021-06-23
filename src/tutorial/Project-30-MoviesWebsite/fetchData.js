 import {
     useState,
     useRef,
     useEffect
 } from 'react';
 import {
     useGlobalContext
 } from "./context.js"

 export const fetchData = async (url) => {

     const response = await fetch(url);
     const newMovies = await response.json();
     return newMovies;

 }
