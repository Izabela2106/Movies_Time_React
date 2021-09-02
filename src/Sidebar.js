import React, { useState, useRef, useEffect } from 'react';
import {useGlobalContext} from "./context.js"
import {sidebar_links,genres,sortByData} from "./data.js";
import logo from "./images/1979.jpg";
import { AiFillTwitterCircle,AiFillInstagram,AiFillFacebook } from 'react-icons/ai'


const Sidebar=()=>{
    const {sidebar,toggleSidebar,url,setUrl,toggleOrderBy,isOrderByShown,isGenresShown,genresList,orderBy,toggleGenres, setSearchQuery,searchForm,setPage,setCategory,setOrderByQuery,setSortBy}=useGlobalContext();
    
    const handleGenreClick=(name)=>{
       
        setPage(1);
        
        if(name==="Popular"){
            setUrl("https://yts.mx/api/v2/list_movies.json?limit=50&order_by=asc");
            return;
        }
        setCategory(name);
         setSortBy('rating');
        
        
 
    toggleSidebar();
         setSearchQuery("");
         searchForm.current.value="";
        
    }
    
     const handleSortByClick=(name)=>{
                 setPage(1);

       console.log(name);
         if(name ==="year" || name==="rating"){
              setOrderByQuery('desc') ; 
              console.log('query')
         }
         else{
            setOrderByQuery('asc') ; 
              console.log('query2')
         }
         setSortBy(name);
    toggleSidebar();
       
         setSearchQuery("");
         searchForm.current.value="";
         
    }
    
    
    
    
    return <aside className={`${sidebar ? "sidebar " :"sidebar hidden"}`}>
    <div className="sidebarHeader">
<img src={logo} alt="logo" className="logo"></img>
<div className="urlName">
<div className="socialIcons">
<AiFillTwitterCircle/>
<AiFillInstagram/>
<AiFillFacebook />
</div>
<h5>www.movietime.com</h5>
</div>
</div>
        <div className="sidebar_links">
      <h2 onClick={()=>toggleGenres()}>Genres</h2>
    <div className={`${genresList ? "genres" :"genres hidden"}`}>{genres.map(genre =>{
return <h3 key={genre.id} className="genre" onClick={()=>handleGenreClick(genre.name)}>{genre.text}</h3>
})}</div>
    <h2 onClick={()=>toggleOrderBy()}>Sort By</h2>
 <div  className={`${orderBy ? "orderBy" :"orderBy hidden"}`}>{sortByData.map(genre =>{
return <h3 key={genre.id} className="order" onClick={()=>handleSortByClick(genre.name)}>{genre.text}</h3>
})}</div>
   

</div>
        
        </aside>
    
    
}

export default Sidebar