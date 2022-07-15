import { Grid } from '@mui/material'
import React from 'react'
import useStyles from './styles'
import { Movie } from '..'
// import sortArrayByDate from '../../lib/sortArrayByDate'

const MovieList = ({ movies, numberOfMovies }) => {
  const classes = useStyles()
  // let sortedMovies = sortArrayByDate(movies.results)
  
  return (
    <Grid container className={classes.moviesContainer}>
      {movies?.results?.slice(0, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  )
}

export default MovieList