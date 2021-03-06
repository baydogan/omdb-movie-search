//componentler
import Searchbox from "../components/SearchBox";
import Searchbutton from "../components/SearchButton";
import Clearbutton from "../components/ClearButton";

import { useFetch } from "../hooks/useFetch";
import { useMovieContext } from "../hooks/useMoviesContext";

const SearchSection = () => {
  const { search, setSearch } = useMovieContext();
  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&s=`; // api keyle birlikte oluşturulan url
  const { fetchData, clearData } = useFetch(url, search);

  //child componentlerden litfing state up ile veri almak için handle fonksiyonları

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
