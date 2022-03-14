import { MoviesContext } from "../context/MoviesContext";
import { useContext } from "react";

export const useMovieContext = () => { // movieContext'i kullanabilmek için oluşturulan bir custom hook
  const context = useContext(MoviesContext);
  return context;
};
