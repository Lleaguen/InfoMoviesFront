'use client';

import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/tmdbService';
import { Params } from '../services/tmdbService';
import StarRating from './StarRating';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  [key: string]: any;
}

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const endpoint = 'discover/movie';
        const params: Params = {
            include_adult: true,
            include_video: true,
            language: 'en-US',
            page: 1,
            sort_by: 'popularity.desc',
        };
        const data = await fetchMovies(endpoint, params);
        
        setMovies(data.results);
      } catch (err) {
        setError('Failed to fetch movies.');
      }
    };

    loadMovies();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <ul className="grid grid-cols-7 gap-4">
        {movies.map((movie) => (
          <li key={movie.id} className=" p-0 m-0 rounded ">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="mb-2 rounded w-full m-0 p-0"
            />
            <h2 className="text-lg font-semibold">{movie.title}</h2>
            <StarRating voteAverage={movie.vote_average} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
