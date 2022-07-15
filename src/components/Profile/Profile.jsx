import { Typography, Box, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/authSlice";
import { useGetListQuery } from "../../services/TMDB";
import { RatedCards } from '..'

const Profile = () => {
  const { isAuthenticated, user } = useSelector(userSelector);

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
    refetchFavs()
    refetchWatch()
  }, [refetchFavs, refetchWatch])
  

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

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
