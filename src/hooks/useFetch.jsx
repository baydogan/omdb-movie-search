import axios from "axios";
import { useMovieContext } from "./useMoviesContext";

export const useFetch = (url, search) => {
  const { dispatch } = useMovieContext();
  const fetchData = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await axios.get(url + search);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data.Search });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    }
  };

  const clearData = () => {
    dispatch({ type: "CLEAR_DATA" });
  };

  return {
    fetchData,
    clearData,
  };
};
