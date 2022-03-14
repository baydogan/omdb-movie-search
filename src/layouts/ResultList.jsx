import { useMovieContext } from "../hooks/useMoviesContext";

//componentler
import Moviecard from "../components/MovieCard";

const Resultlist = () => {
  const { state, search } = useMovieContext();
  return (
    /* search alanı için conditional rendering tanımları ve dönen veriyi listeleme işlemi */
    <div className="result-list"> 
      {state.success == null && !state.loading &&  <span>Search results will appear here</span>}
      {state.success && <span>Results for "{search}"</span>}
      {state.error && <span>{state.error}</span>}
      {state.loading && <span>Loading...</span>}
      {state.success && <p className="text-sm mt-2 mb-2">click on a movie title to learn more about it</p>}
      <div className="movie-list">
        {state.movies && state.movies.map((movie) => <Moviecard key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default Resultlist;
