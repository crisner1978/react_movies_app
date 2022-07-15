# Reactflix Movies App - CWR

Reactflix Movies App to search movies, save movies to favorites, create a movies watchlist and browse movies by categories to include several genres.

## Main Features:

- Consumes [TMDB](https://www.themoviedb.org/) APIs
- [Authentication](https://developers.themoviedb.org/3/getting-started/authentication) via The Movie Database API
- Browse movies by Category or Genres
- Pagination for all Movie Lists
- Movie Information Page w/cast of Actors and Recommended Movies
- Actor Information Page to include Movies List for that Actor
- Watch Movie Trailers via Modal
- Search Movies by Title
- Profile Page for Authenticated Users
- Create, Save or Delete Movies from Watchlist
- Add or Remove Movies to/from Favorites
- Voice capabilities to search & navigate using [Alan](https://alan.app/)

### Tech Stack:
- [React JS](https://reactjs.org/docs/getting-started.html) v17.02 Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Material UI](https://mui.com/material-ui/getting-started/installation/) 
- [Material Styles](https://mui.com/system/styles/basics/) 
- [Material Icons](https://mui.com/material-ui/material-icons/#main-content) 
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [React-Redux](https://react-redux.js.org/introduction/getting-started)
- [React-Router V5](https://v5.reactrouter.com/web/guides/quick-start)
- [Alan AI - React](https://alan.app/docs/client-api/web/react/)
- [AXIOS](https://axios-http.com/docs/intro)

### Getting Setup:
#### 1. Get the source code
You need to clone the master branch of then navigate to the project folder.
#### 2. Install dependencies
You will need to install the dependencies listed in the package.json
```
npm install
```
or
```
yarn install
```
#### 3. Setup Account with TMDB & ALAN
Go here [TMDB](https://www.themoviedb.org/signup?language=en-US) to set up a account then you will need to request a API KEY.

Go here [ALAN](https://alan.app/) to set up a free account. Once you create a new project, you will see in 'Integrations' button where you can find the code to implement into your project.

#### 4. Set Environment Variables
You'll need to set your TMDB API key in the environment variable file so your project runs correctly. Rename `.example.env` file to `.env` and place your TMDB API key there. Be sure to remove the '#' sign prepending the variable names.

#### 5. Run The App
To start the app 
```
npm start
```
or
```
yarn start
```