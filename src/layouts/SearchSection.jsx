//componentler
import Searchbox from "../components/SearchBox";
import Searchbutton from "../components/SearchButton";
import Clearbutton from "../components/ClearButton";

import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { useMovieContext } from "../hooks/useMoviesContext";

const SearchSection = () => {
  const [search, setSearch] = useState("");
  const { fetchData, clearData } = useFetch("http://www.omdbapi.com/?apikey=e9797b4c&s=", search);
  const { state } = useMovieContext();
  console.log(state);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFetch = () => {
    fetchData();
  };

  const handleClear = () => {
    clearData();
    setSearch("");
  };

  return (
    <div className="search-section">
      <h3>Movie Title</h3>
      <Searchbox search={search} handleChange={handleChange} />
      <div className="search-buttons">
        <Clearbutton handleClear={handleClear} />
        <Searchbutton handleFetch={handleFetch} />
      </div>
    </div>
  );
};

export default SearchSection;
