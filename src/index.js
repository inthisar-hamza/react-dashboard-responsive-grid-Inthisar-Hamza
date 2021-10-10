import { StrictMode } from "react";
import React, { render } from "react-dom";

import App from "./App";

import styles from "./styles/style.css";

const rootElement = document.getElementById("root");

render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
