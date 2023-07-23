import React, { useState } from 'react';
import MovieItem from './MovieItem'; // We will create this component later

const moviesData = [
  { id: 1, title: 'Inception', genre: 'Science Fiction', releaseYear: 2010 },
  { id: 2, title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
  { id: 3, title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
  // Add more movie objects as needed
];

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const genres = ['All Genres', ...new Set(moviesData.map((movie) => movie.genre))];

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredMovies = selectedGenre === 'All Genres'
    ? moviesData
    : moviesData.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <div className="genre-filter">
        <label htmlFor="genre-select">Filter by Genre:</label>
        <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
      <ul>
        {filteredMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;