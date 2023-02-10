import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import authSlice from "./authSlice";
const preloadedState = window.__PRELOADED_STATE__;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={authSlice} serverState={preloadedState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
