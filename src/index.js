import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {
  isMessagingSupported,
  isTokenSentToServer,
  requestPermission
} from "./firebase";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <App
    action={requestPermission}
    hasPush={isMessagingSupported}
    isTokenSentToServer={isTokenSentToServer}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
