import { createContext } from "react";
import { useReducer } from "react";

const initialState = {
  loading: false,
  error: null,
  movies: [],
};

export const MoviesContext = createContext();
export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: null,
        movies: [],
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        movies: [],
      };
    case "CLEAR_DATA":
      return {
        initialState,
      };

    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <MoviesContext.Provider value={{ state, dispatch }}>{children}</MoviesContext.Provider>;
};
