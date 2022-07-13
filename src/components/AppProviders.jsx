import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const AppProviders = ({ children }) => {
  const theme = createTheme({});
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
