import Moviecard from "../components/MovieCard";

const Resultlist = () => {
  return (
    <div className="result-list">
      <span>Search results will appear here</span>
      <p className="text-sm mt-2 mb-2">click on a movie title to learn more about it</p>
      <div className="movie-list">
        <Moviecard />
        <Moviecard />
        
      </div>
    </div>
  );
};

export default Resultlist;
