import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
const VideoTitle =({title,overview})=>{
    return(
       <>
  <div className="pt-[15%] w-screen aspect-video text-white px-24 absolute bg-gradient-to-b from-black ">
    <h1 className="text-6xl md:text-6xl font-bold">{title}</h1>
    <p className="py-6 md:py-6 text-base w-10 md:text-lg w-full md:w-1/4">{overview}</p>

    <div className="flex flex-col md:flex-row">
      <button className="bg-white px-8 md:px-16 py-2 md:p-4 text-black rounded text-lg font-bold hover:opacity-70 mb-2 md:mb-0 md:mr-2">
        <FontAwesomeIcon className="px-2 scale-125 md:scale-150" icon={faPlay} />
        Play
      </button>
      <button className="bg-gray-500 px-8 md:px-16 py-2 md:p-4 text-white rounded text-lg font-bold bg-opacity-50 hover:opacity-70">
        <FontAwesomeIcon className="px-2 scale-125 md:scale-150" icon={faCircleInfo} />
        More Info
      </button>
    </div>
  </div>
</>
    )
}
export default VideoTitle;