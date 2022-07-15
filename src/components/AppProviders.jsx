import { CssBaseline } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../app/store";
import { DarkModeProvider } from "../context/darkModeContext";

const AppProviders = ({ children }) => {
  const alanButtonRef = useRef();

  return (
    <Provider store={store}>
      <Router>
        <DarkModeProvider>
          <CssBaseline />
          {children}
          <div ref={alanButtonRef} />
        </DarkModeProvider>
      </Router>
    </Provider>
  );
};

export default AppProviders;
