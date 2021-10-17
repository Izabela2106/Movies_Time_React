import React, { useEffect } from 'react';
import Movie from './Movie';
import { useGlobalContext } from './context';

const Movies = () => {
  const { movies, loading, url } = useGlobalContext();

  useEffect(() => {}, [url]);

  return (
    <div className={`${loading ? 'hidden movies' : 'movies'}`}>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Movies;
