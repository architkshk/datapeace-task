import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import history from "./history";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./Layout";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router history={history}>
    <Layout />
  </Router>,
  rootElement
);
