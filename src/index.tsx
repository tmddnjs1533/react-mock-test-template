import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { store } from "./redux/store";
const container = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  container
);
