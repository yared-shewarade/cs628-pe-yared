import React from 'react';

const MovieItem = ({ movie }) => {
  const handleClick = () => {
    alert(movie.title);
  };

  return (
    <li className="movie-item" onClick={handleClick}>
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Release Year: {movie.releaseYear}</p>
    </li>
  );
};

export default MovieItem;