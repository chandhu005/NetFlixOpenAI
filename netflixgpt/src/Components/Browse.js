import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
function Browse() {
  //fetch data from TMDB APi and update the store
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
{
  showGptSearch?<GptSearch/>:<>
  
  <MainContainer/>
      <SecondaryContainer/></>
}
      
      {/*
      MainContainer
        -videobackground
        -videoTitle
      SecondyContainer
      -movielist *n
        -cards*n
      */}
    </div>
  );
}

export default Browse;
