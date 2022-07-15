import React from "react";
import ReactDOM from "react-dom";
import { AppProviders } from "./components";
import App from "./components/App";
import './index.css'

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
