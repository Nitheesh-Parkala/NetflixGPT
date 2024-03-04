import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";

const Browse = ()=>{
    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
useNowPlayingMovies();
usePopularMovies();
useUpcomingMovies();
useTrendingMovies();

    return (
        <div ><Header/>
        {
            showGptSearch ?   <GptSearchPage/> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
        }
        </div>
    )
}
export default Browse;