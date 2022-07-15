import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${API_KEY}`,
    }),
    getMovies: builder.query({
      query: ({ genIdOrCatName, page, searchQuery }) => {
        if (searchQuery)
          return `/search/movie?api_key=${API_KEY}&page=${page}&query=${searchQuery}`;
        
          if (genIdOrCatName && typeof genIdOrCatName === "string")
          return `/movie/${genIdOrCatName}?api_key=${API_KEY}&page=${page}`;
        
          if (genIdOrCatName && typeof genIdOrCatName === "number")
          return `/discover/movie?api_key=${API_KEY}&with_genres=${genIdOrCatName}&page=${page}`;
        
          return `/movie/popular?api_key=${API_KEY}&page=${page}`;
      },
    }),
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`,
    }),
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) =>
        `/account/${accountId}/${listName}?api_key=${API_KEY}&session_id=${sessionId}&page=${page}`,
    }),
    getRecommendations: builder.query({
      query: ({ movie_id, list }) =>
        `/movie/${movie_id}/${list}?api_key=${API_KEY}&language=en-US`,
    }),
    getActorDetails: builder.query({
      query: (id) =>
        `/person/${id}?api_key=${API_KEY}&append_to_response=credits`,
    }),
    // Get Movies by Actor Id
    getMoviesByActor: builder.query({
      query: ({ id, page }) =>
        `/discover/movie?with_cast=${id}&page=${page}&api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetRecommendationsQuery,
  useGetActorDetailsQuery,
  useGetMoviesByActorQuery,
  useGetListQuery,
} = tmdbApi;
