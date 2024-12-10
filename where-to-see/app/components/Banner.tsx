'use client';

import { useEffect, useState } from "react";
import { fetchMovies } from "../services/tmdbService";
import { Params } from "../services/tmdbService";
import StarRating from "./StarRating";

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  [key: string]: any;
}

const Banner = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {
    const loadMovies = async () => {
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
    };

    loadMovies();

    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div className="relative h-96 w-full overflow-hidden">
      {movies.length > 0 && (
        <div className="relative h-full w-full">
          {/* Contenedor deslizante */}
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentMovie * 100}%)`, // Desliza según el índice
            }}
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="flex-none w-full h-full relative"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                {/* Información de la película */}
                <div className="absolute inset-0 flex flex-row justify-left z-20 items-center p-20">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    className="h-80 w-56 object-cover"
                  />
                  <div className="ml-10 text-white ">
                    <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
                    <p className="mb-4">{movie.overview}</p>
                    <span className="text-yellow-400 font-bold text-lg">
                      {movie.vote_average}
                    </span>
                    <StarRating voteAverage={movie.vote_average} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
