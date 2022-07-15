import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useDarkMode from '../context/darkModeContext';
import { selectGenIdOrCat, searchMovie } from '../features/genreOrCategory';
import { fetchToken, logout } from '../utils';

const useAlan = () => {
  const { setMode } = useDarkMode()
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
  alanBtn({
      key: '5a9f1bb8ebd5c85d23f377b4435d92fb2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === 'chooseGenre') {
          const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase())
          if (foundGenre) {
            history.push('/')
            dispatch(selectGenIdOrCat(foundGenre.id))
          } else {
            const category = genreOrCategory.startsWith("top") ? 'top_rated' : genreOrCategory
            history.push('/')
            dispatch(selectGenIdOrCat(category))
          }
        } else if (command === 'toggleDarkMode') {
          if (mode === 'light') {
            setMode('light')
          } else {
            setMode('dark')
          }
        } else if (command === 'login') {
          fetchToken()
        } else if (command === 'logout') {
          logout()
        } else if (command === 'search') {
          history.push('/')
          dispatch(searchMovie(query))
        }
      }
  });
}, [dispatch, history, setMode]);

  
}

export default useAlan