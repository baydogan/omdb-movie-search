import axios from "axios";

import { useMovieContext } from "./useMoviesContext";

export const useFetch = (url, search) => { // veri çekmek için oluşturlan bir custom hook, url ve search parametreleri alır
  const { dispatch } = useMovieContext();
  const fetchData = async () => {
    if (search !== "") {
      dispatch({ type: "FETCH_START" });
      try {
        const response = await axios.get(url + search);
        if (response.data.Search) {  
          dispatch({ type: "FETCH_SUCCESS", payload: response.data.Search });
        } else { // dönen response'da sonuç yoksa sonuç bulunamadı mesajı gösterir
          dispatch({ type: "FETCH_FAILURE", payload: "No results found" });
        }
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: error.message }); // dönen response'da hata varsa hata mesajı gösterir
      }
    } else {
      dispatch({ type: "CLEAR_DATA" });
    }
  };

  const clearData = () => {
    dispatch({ type: "CLEAR_DATA" }); // clear data butonu için dispatch fonksiyonu
  };

  return {
    fetchData,
    clearData,
  };
};
