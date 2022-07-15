import { Grid } from '@mui/material'
import React from 'react'
import useStyles from './styles'
import { Movie } from '..'
// import sortArrayByDate from '../../lib/sortArrayByDate'

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const classes = useStyles()
  const startFrom = excludeFirst ? 1 : 0
  
  return (
    <Grid container className={classes.moviesContainer}>
      {movies?.results?.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  )
}

export default MovieList