import {
  AccountCircle, Brightness4, Brightness7, Menu
} from "@mui/icons-material";
import {
  AppBar, Avatar, Button, Drawer, IconButton,
  Toolbar, useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Search, Sidebar } from "..";
import useDarkMode from "../../context/darkModeContext";
import { setUser, userSelector } from "../../features/authSlice";
import { fetchToken, getSessionId, moviesApi } from "../../utils";
import useStyles from "./styles";

const Navbar = () => {
  const { isAuthenticated, user, profileImg } = useSelector((userSelector))
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch()
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const { toggleDarkMode } = useDarkMode()
  const token = localStorage.getItem('request_token')
  const sessionIdLocal = localStorage.getItem('session_id')

  useEffect(() => {
    const loginUser = async() => {
      if (token) {
        if (sessionIdLocal) {
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdLocal}`)
          dispatch(setUser(userData))
        } else {
          const sessionId = await getSessionId();
          const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`)
          dispatch(setUser(userData))
        }
      }
    }
    loginUser()
  }, [dispatch, sessionIdLocal, token])

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen(prev => !prev)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={toggleDarkMode}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
              >
                {!isMobile && <>{user.username || 'My Movies'} &nbsp;</>}
                <Avatar
                  style={{ width: 36, height: 36 }}
                  alt="Profile"
                  src={profileImg ? `https://www.themoviedb.org/t/p/w64_and_h64_face${profileImg}` : 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'}
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen(prev => !prev)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant='permanent' open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
