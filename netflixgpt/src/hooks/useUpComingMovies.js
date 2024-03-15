import { API_OPTIONS } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useUpComingMovies=()=>{
  const upComingMovies=useSelector((store)=>store.movies.upComingMovies)
    const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    if(!upComingMovies)
    getUpComingMovies();
  }, []);
}
export default useUpComingMovies;