import axios from "axios";
import { useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { MoviesContext } from "../context/MoviesContext";

const initialState = {
  loading: false,
  error: null,
  movies: [],
};



export const useFetch = (url, search) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    state,
    fetchData,
    clearData,
  };



};
