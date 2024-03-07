
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS} from "../utils/constants";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai"
import { addGptMovieResults } from "../utils/gptSlice";
const GptSearchBar =()=>{
    const dispatch = useDispatch();
    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null)

    // search movie in TMDB
    const searchMovieTMDB = async(movie)=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+ movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
            const json = await data.json();
            return json.results;
    }

    const handleGptSearchClick = async()=>{
       console.log(searchText.current.value)

    //    Make an API call to GPT API and get movie results
      const gptQuery = "Act as a movie recommadition system and suggest some movies for the query:" + searchText.current.value + "only give me the name of 5 movies, comma separated like the example results give a head. Example : KGF, Upendra, SSE, James, Jackie"
       const gptResults= await openai.chat.completions.create({
        messages: [{ role: 'user', content:  gptQuery }],
        model: 'gpt-3.5-turbo',
  });
   console.log(gptResults.choices?.[0]?.message?.content)
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",") 
    //   for each movie  I will search TMDB API
    const promiseArray =gptMovies.map((movie)=> searchMovieTMDB (movie));
    // [this will return the promise]
    const tmdbResults = await Promise.all(promiseArray); 
    // This promise.all will get when the all promise is resolved then only we will get the data from the tmdbResults
    dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults:tmdbResults}))
}
    return ( 
        <><div className=" pt-40 flex justify-center">
                <form onSubmit={(e) => e.preventDefault()} className="w-1/2 bg-black  grid grid-cols-12">
                    <input ref={searchText} className="m-4 p-3 col-span-9" type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
                    <button className="col-span-3 px-4 bg-red-700 rounded-lg py-2 m-3 text-white" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
                </form>
            </div></>
    )
}
export default GptSearchBar;

 