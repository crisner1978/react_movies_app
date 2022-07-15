import React from "react";
import { Route, Switch } from "react-router-dom";
import useAlan from "../hooks/useAlan";
import { Actors, MovieInfo, Movies, Navbar, Profile } from "./";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  useAlan()

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInfo />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path={["/", "/approved"]}>
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
