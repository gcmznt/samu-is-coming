import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBYuBVHKOnjyHq-IN6_of7HipPJyTelUVc",
  authDomain: "samu-is-coming.firebaseapp.com",
  databaseURL: "https://samu-is-coming.firebaseio.com",
  projectId: "samu-is-coming",
  storageBucket: "samu-is-coming.appspot.com",
  messagingSenderId: "714982459562",
  appId: "1:714982459562:web:bbecf8ec9d4ba1ea52a8d3",
  measurementId: "G-1ZQK9ECK53"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

let messaging;

if (firebase.messaging.isSupported()) {
  messaging = firebase.messaging();
  messaging.usePublicVapidKey(
    "BFDFvvxgmBmTtjSzf1v4nHsLN-9RM19h2zXGmgONsgposb3vOoNKZZUVPQPrwLvCycSglWhEmSxSaL9e_z4_z2o"
  );
}

function subscribe() {
  return messaging
    .getToken()
    .then(currentToken => {
      if (currentToken) {
        sendTokenToServer(currentToken);
      } else {
        setTokenSentToServer(false);
      }
    })
    .catch(err => {
      setTokenSentToServer(false);
    });
}

function sendTokenToServer(currentToken) {
  if (!isTokenSentToServer()) {
    fetch(`/.netlify/functions/register?token=${currentToken}`, {
      method: "POST"
    })
      .then(d => d.json())
      .then(() => setTokenSentToServer(true));
  }
}

function isTokenSentToServer() {
  return window.localStorage.getItem("sentToServer") === "1";
}

function setTokenSentToServer(sent) {
  window.localStorage.setItem("sentToServer", sent ? "1" : "0");
}

function requestPermission() {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      subscribe();
    }
  });
}

ReactDOM.render(
  <App action={requestPermission} hasPush={firebase.messaging.isSupported()} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
