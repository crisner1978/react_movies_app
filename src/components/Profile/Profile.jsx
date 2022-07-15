import { Typography, Box, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/authSlice";

const Profile = () => {
  const { isAuthenticated, user } = useSelector(userSelector);

  const favoriteMovies = [];

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
      {!favoriteMovies.length ? (
        <Typography variant="h6">
          Add favorites or watchlist some movies to see them here!
        </Typography>
      ) : (
        <Box>Favorite Movies</Box>
      )}
    </Box>
  );
};

export default Profile;
