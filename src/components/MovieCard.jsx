import React from "react";

const Moviecard = ({ movie }) => {
  return (
    <div className="movie-card">
      <p>{movie.Title}</p>
    </div>
  );
};

export default Moviecard;
