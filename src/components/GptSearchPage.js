import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const GptSearchPage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <>
            {!imageLoaded && <Shimmer />} {/* Display shimmer effect until image is loaded */}
            <div className={`fixed -z-10 ${!imageLoaded ? "hidden" : ""}`}>
                <img
                    className={`h-screen object-cover md:w-screen ${!imageLoaded ? "hidden" : ""}`}
                    src={BACKGROUND_URL}
                    alt="Background"
                    onLoad={handleImageLoad}
                />
            </div>
           <div className={imageLoaded ? "" : "hidden"}> {/* Hide content until image is loaded */}
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    );
};

export default GptSearchPage;


