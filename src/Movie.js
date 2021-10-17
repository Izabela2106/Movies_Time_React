import React from 'react';
import { useGlobalContext } from './context';

const Movie = ({ movie }) => {
  const { openModal, setModalContent, closeSidebar } = useGlobalContext();

  const handleClick = () => {
    setModalContent(movie);
    closeSidebar();
    openModal();
  };

  return (
    <div className="movie">
      <img className="movie-image" src={movie.medium_cover_image} alt="pi" onClick={handleClick} />
    </div>
  );
};

export default Movie;
