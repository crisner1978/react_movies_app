import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "../app/store";

const AppProviders = ({ children }) => {
  const theme = createTheme({});

  return (
    <Provider store={store}>
      <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Router>
    </Provider>
    
  );
};

export default AppProviders;
