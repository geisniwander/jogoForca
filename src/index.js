import React from "react";
import GlobalStyle from './theme/globalStyle'
import ReactDOM from "react-dom/client";
import App from "./componets/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
