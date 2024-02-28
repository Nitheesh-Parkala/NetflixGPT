import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer =()=>{
    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
    if(movies===null) return;

    const mainMovie = movies[0];
    console.log(mainMovie)
     const {original_title, overview} = mainMovie;
    return(
        <div>
       <VideoBackGround/>
       <VideoTitle title={original_title} overview={overview}/>
        </div>
    )
}
export default MainContainer;