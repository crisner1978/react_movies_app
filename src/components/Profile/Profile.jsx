import { Typography, Box, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/authSlice";
import { useGetListQuery } from "../../services/TMDB";
import { RatedCards } from "..";
import { logout } from "../../utils";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const history = useHistory();

  const { data: favoriteMovies, refetch: refetchFavs } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchlistMovies, refetch: refetchWatch } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      history.replace("/");
    }
  }, [history, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      refetchFavs();
      refetchWatch();
    }
  }, [isAuthenticated, refetchFavs, refetchWatch]);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h6">
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="Watchlist" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
