import React, { useState } from "react";
import { useGetMoviesQuery } from "../../services/TMDB";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { MovieList, Pagination } from "..";

const Movies = () => {
  const [page, setPage] = useState(1)
  const { genIdOrCatName, searchQuery } = useSelector((state) => state.genreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ genIdOrCatName, page, searchQuery });
  
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'))
  const numberOfMovies = lg ? 16 : 18

  if (isFetching)
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );

  if (!data.results.length)
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );

  if (error) return "An error has occured.";

  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination currentPage={page} setPage={setPage} totalPages={data?.total_pages} />
    </div>
  );
};

export default Movies;
