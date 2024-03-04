
import { useSelector } from "react-redux";
import { BACKGROUND_URL } from "../utils/constants";
import lang from "../utils/languageConstant";
const GptSearchBar =()=>{
    const langKey = useSelector((store)=>store.config.lang)
    return (
        <><div className="absolute -z-10 ">
            <img
                className="hidden md:block w-full "
                src={BACKGROUND_URL}
                alt="Background" />
        </div><div className=" pt-40 flex justify-center">
                <form onSubmit={(e) => e.preventDefault()} className="w-1/2 bg-black  grid grid-cols-12">
                    <input className="m-4 p-3 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
                    <button className="col-span-3 px-4 bg-red-700 rounded-lg py-2 m-3 text-white">{lang[langKey].search}</button>
                </form>
            </div></>
    )
}
export default GptSearchBar;