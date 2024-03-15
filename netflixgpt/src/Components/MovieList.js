import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
 
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white cursor-pointer">{title}</h1>
      <div className="flex  overflow-x-scroll whitespace-no-wrap cursor-pointer">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
