import {useGlobalContext} from "./context.js"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import React, { useState, useRef, useEffect } from 'react'


const Modal =({modalContent})=>{
    
    let{medium_cover_image,title,year,rating,runtime,genres,description_full,language,mpa_rating,small_cover_image}=modalContent;
    const {closeModal, modal}=useGlobalContext();
 if(genres){
     
   genres = genres.slice(0,5);
     genres=genres.join(", ");
    
 }
    
    if(description_full){
     if(description_full.length>650){
         description_full=description_full.slice(0,650)+"...";
     }
    }
    
    
    useEffect(()=>{
        
    },[modalContent])
    
    return <div className={`${modal ?"modal" : "hidden modal"}`}>
        <div className="inner-modal">
        <div className="modal_image_div">
        <img className="modal-image" src={medium_cover_image} alt="pic"></img>
        </div>
        <div className="modal-center">
        <h2>{title}</h2>
        <div>
        <h3>{genres}</h3>
        </div>
        <div className="info">

        <h3>{runtime+"min"}</h3>
        <h3>rating: {rating}</h3>
        </div>

        <h6 className="description">{description_full}</h6>

        </div>
        <button className="close-btn" > <AiOutlineCloseCircle onClick={closeModal}className="close"/></button>
                </div>
        </div>
        }

        export default Modal 