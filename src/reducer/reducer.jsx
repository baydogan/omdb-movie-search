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
        ...state,
        loading: false,
        error: null,
        movies: [],
      };

    default:
      return state;
  }
};
