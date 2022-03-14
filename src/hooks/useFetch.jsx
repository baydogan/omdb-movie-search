import axios from "axios";

import { useMovieContext } from "./useMoviesContext";

export const useFetch = (url, search) => {
  const { dispatch } = useMovieContext();
  const fetchData = async () => {
    if (search !== "") {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await axios.get(url + search);
        if (response.data.Search) {
          dispatch({ type: "FETCH_SUCCESS", payload: response.data.Search });
        } else {
          dispatch({ type: "FETCH_FAILURE", payload: "No results found" });
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error.message });
      }
    } else {
      dispatch({ type: "CLEAR_DATA" });
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
