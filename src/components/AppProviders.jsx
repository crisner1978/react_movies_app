import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

const AppProviders = ({ children }) => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      {children}
    </Router>
  );
};

export default AppProviders;
