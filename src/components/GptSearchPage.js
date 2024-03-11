import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_URL } from "../utils/constants";
const GptSearchPage =()=>{
    return(
        <><div className="fixed -z-10 ">
            <img
                className="h-screen object-cover md:w-screen "
                src={BACKGROUND_URL}
                alt="Background" />
        </div><div className="">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div></>
    )
}
export default GptSearchPage;