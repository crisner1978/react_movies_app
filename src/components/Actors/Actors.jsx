import { ArrowBack } from "@mui/icons-material";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { MovieList, Pagination } from "..";
import {
  useGetActorDetailsQuery,
  useGetMoviesByActorQuery,
} from "../../services/TMDB";
import useStyles from "./styles";

const Actors = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const classes = useStyles();
  const history = useHistory();

  const { data, isFetching, error } = useGetActorDetailsQuery(id);

  const { data: actorsMovies } = useGetMoviesByActorQuery({ id, page });

  if (isFetching)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );

  if (error)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => history.goBack()}
          color="primary">
          Go Back
        </Button>
      </Box>
    );

  return (
    <>
      <Grid container spacing={3} align="center">
        <Grid item lg={5} xl={4}>
          <img
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.name}
            className={classes.image}
          />
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <Typography gutterBottom textAlign="left" variant="h2">
            {data?.name}
          </Typography>
          <Typography textAlign="left" gutterBottom variant="h5">
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Box>
            <Typography
              variant="body1"
              align="justify"
              paragraph>
              {data?.biography || "Sorry no biography yet..."}
            </Typography>
          </Box>

          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              target="_blank"
              rel="noopener noreferre"
              href={`https://www.imdb.com/title/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => history.goBack()}
              color="primary">
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {actorsMovies ? (
          <MovieList movies={actorsMovies} numberOfMovies={12} />
        ) : (
          <Box>Sorry nothing was found here.</Box>
        )}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={actorsMovies?.total_pages}
        />
      </Box>
    </>
  );

  // return (
  //   <Grid container className={classes.containerSpaceAround}>
  //     <Grid item sm={12} lg={4}>
  //       <img
  //         src={`${basePhotoUrl}${data?.profile_path}`}
  //         className={classes.poster}
  //         alt={data?.name}
  //       />
  //     </Grid>
  //     <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
  //       <Typography variant="h3" align="left" gutterBottom>
  //         {data?.name}
  //       </Typography>
  //       <Typography variant="h5" align="left" gutterBottom>
  //         Born: {data?.birthday || "No information provided"}
  //       </Typography>
  //       <Typography variant="body2" align='justify' paragraph>
  //         {data?.biography}
  //       </Typography>
  //       <Grid
  //         item
  //         container
  //         justifyContent="center"
  //         style={{ marginTop: "2rem" }}>
  //         <Grid item xs={8} className={classes.buttonsContainer}>
  //           <Button
  //             variant="contained"
  //             target="_blank"
  //             rel="noopener noreferre"
  //             href={`https://www.imdb.com/title/${data?.imdb_id}`}>
  //             IMDB
  //           </Button>
  //           <Button
  //             endIcon={<ArrowBack />}
  //             sx={{ borderColor: "primary.main" }}>
  //             <Typography
  //               component={Link}
  //               to="/"
  //               color="inherit"
  //               variant="subtitle2"
  //               style={{ textDecoration: "none" }}>
  //               Back
  //             </Typography>
  //           </Button>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </Grid>
  // );
};

export default Actors;
