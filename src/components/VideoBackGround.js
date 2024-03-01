import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackGround =({movieId})=>{
    const trailerVideo = useSelector(store=>store.movies.trailerVideo);
     useMovieTrailer(movieId);
    return(
        <div>
      <iframe  className="md:w-screen  md:h-screen-hidden aspect-video"
      src={"https://www.youtube.com/embed/"+ trailerVideo?.key+ "?rel=0&amp;autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
     </iframe>
        </div>
    )
}
export default VideoBackGround;
