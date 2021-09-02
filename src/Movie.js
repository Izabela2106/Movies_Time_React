import {useGlobalContext} from "./context.js"


const Movie =({movie})=>{
    
     const {openModal,setModalContent,modalContent,closeSidebar}=useGlobalContext();
    
    const handleClick=()=>{
        setModalContent(movie);
        closeSidebar();
        
        
        openModal();
    }
    
    return <div className="movie">
        <img className="movie-image" src={movie.medium_cover_image} alt="pic" onClick={handleClick}></img>
        </div>
}

export default Movie