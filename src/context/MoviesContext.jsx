import { createContext } from "react";
import { useReducer, useState } from "react";

const initialState = { // başlangıçta alınacak initial state
  loading: false,
  error: null,
  movies: [],
  success: null,
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
        success: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload,
        success: true,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        movies: [],
        success: false,
      };
    case "CLEAR_DATA":
      return {
        ...state,
        loading: false,
        error: null,
        movies: [],
        success: null,
      };

    default:
      return state;
  }
};
// state'i tüm componentler seviyesinde paylaşmak için context oluşturuldu
export const MovieProvider = ({ children }) => { 
  const [state, dispatch] = useReducer(reducer, initialState); //
  const [search, setSearch] = useState(""); // search kısmı iki layouttada kullanılabilmek için global state olarak tanımlandı
  return <MoviesContext.Provider value={{ state, dispatch, search, setSearch }}>{children}</MoviesContext.Provider>;
};
