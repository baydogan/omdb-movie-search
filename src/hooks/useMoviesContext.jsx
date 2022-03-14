import { MoviesContext } from "../context/MoviesContext";
import { useContext } from "react";

export const useMovieContext = () => {
  const context = useContext(MoviesContext);
  return context;
};
