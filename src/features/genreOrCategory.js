import { createSlice } from '@reduxjs/toolkit'

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genIdOrCatName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenIdOrCat: (state, action) => {
      state.genIdOrCatName = action.payload
      state.searchQuery = ''
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload
    }
  }
})

export const { selectGenIdOrCat, searchMovie } = genreOrCategory.actions

export default genreOrCategory.reducer