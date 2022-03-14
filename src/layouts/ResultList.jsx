import { useMovieContext } from "../hooks/useMoviesContext";

//componentler
import Moviecard from "../components/MovieCard";

const Resultlist = () => {
  const { state, search } = useMovieContext();
  return (
    <div className="result-list">
      {state.success == null && <span>Search results will appear here</span>}
      {state.success && <span>Results for {search}</span>}
      {state.error && <span>{state.error}</span> }
      {state.success && <p className="text-sm mt-2 mb-2">click on a movie title to learn more about it</p>}
      <div className="movie-list">
        {state.movies && state.movies.map((movie) => <Moviecard key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default Resultlist;
