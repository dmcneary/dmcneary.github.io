import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));

const Main = (
  <React.StrictMode>
    <React.Fragment>
      <HashRouter>
        <App />
      </HashRouter>
    </React.Fragment>
  </React.StrictMode>
);

root.render(Main);

