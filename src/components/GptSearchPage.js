import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_URL } from "../utils/constants";
const GptSearchPage =()=>{
    return(
        <><div className="fixed -z-10 ">
            <img
                className="hidden md:block w-full "
                src={BACKGROUND_URL}
                alt="Background" />
        </div><div>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div></>
    )
}
export default GptSearchPage;