import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {  addTrailerVideo} from "../utils/moviesSlice"
const VideoBackGround =({movieId})=>{
    const trailerVideo = useSelector(store=>store.movies.trailerVideo);
   const dispatch = useDispatch();
    // fetch trailer video
    const getMovieVideos = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/1096197/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log(json);
          const filterData = json.results.filter((video)=>video.type ==="Trailer");
          const trailer = filterData.length ? filterData[0] : json.results[0];
     console.log(trailer)
     dispatch(addTrailerVideo(trailer))

    }
    useEffect(()=>{
       getMovieVideos();
    },[])
    return(
        <div>
      <iframe 
      src={"https://www.youtube.com/embed/"+ trailerVideo?.key}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
     </iframe>
        </div>
    )
}
export default VideoBackGround;