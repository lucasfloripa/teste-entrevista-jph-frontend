import React from "react";
import ReactDOM from "react-dom";

// Store
import { Provider } from "react-redux";
import store from "./store";

// Pages
import Main from "./pages/Main";

// Bootstrap Css
import "bootstrap/dist/css/bootstrap.css";

// Font Awesome
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
