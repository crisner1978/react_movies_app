import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";
import { useGetGenresQuery } from "../../services/TMDB";
import genreIcons from "../../assets/genres";
import { useDispatch, useSelector } from "react-redux";
import { selectGenIdOrCat } from "../../features/genreOrCategory";
import { useEffect } from "react";

const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();
  const { genIdOrCatName } = useSelector((state) => state.genreOrCategory);

  useEffect(() => {
    setMobileOpen(prev => !prev)
  }, [genIdOrCatName])

  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const redLogo =
    "https://fontmeme.com/permalink/220715/2ecd9ae671d01d09904f55b14ac5afdb.png";

  const blueLogo =
    "https://fontmeme.com/permalink/220715/6b3506498850afc7d82e40879ddc1d43.png";

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          src={theme.palette.mode === "dark" ? redLogo : blueLogo}
          className={classes.image}
          alt="Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} to="/" className={classes.links}>
            <ListItem onClick={() => dispatch(selectGenIdOrCat(value))} button>
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImage}
                  height={30}
                  alt={label}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ id, name }) => (
            <Link key={id} to="/" className={classes.links}>
              <ListItem onClick={() => dispatch(selectGenIdOrCat(id))} button>
                <ListItemIcon>
                  <img
                    className={classes.genreImage}
                    height={30}
                    src={genreIcons[name.toLowerCase()]}
                    alt={name}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
