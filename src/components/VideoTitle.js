import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const VideoTitle =({title,overview})=>{
    return(
        <>
         <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
      
           <div className="">
               <button className="bg-gray-500 px-16 p-4 text-white rounded text-lg bg-opacity-50">
               <FontAwesomeIcon className="px-2" icon={faPlay} />
                                Play
               </button>
                <button  className="bg-gray-500 px-16 p-4 text-white rounded m-2 bg-opacity-50 text-lg">More Info</button>
            </div>
              </div>
        </>
    )
}
export default VideoTitle;