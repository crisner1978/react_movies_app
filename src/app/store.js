import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import genreOrCategoryReducer from "../features/genreOrCategory";
import userReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    genreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  }
})

export default store