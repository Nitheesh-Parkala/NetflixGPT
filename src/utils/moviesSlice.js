import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies= action.payload;
        },
         addPopularMovies:(state,action)=>{
            state.popularMovies= action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo= action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },   
    }
})
export const{addNowPlayingMovies,  addTrailerVideo, addPopularMovies,  addUpcomingMovies, addTrendingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;