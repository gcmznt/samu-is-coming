import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";

import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/messaging";
import "firebase/firestore";

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

var database = firebase.firestore();

const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  "BFDFvvxgmBmTtjSzf1v4nHsLN-9RM19h2zXGmgONsgposb3vOoNKZZUVPQPrwLvCycSglWhEmSxSaL9e_z4_z2o"
);

messaging
  .getToken()
  .then(currentToken => {
    if (currentToken) {
      console.log(currentToken);

      database
        .collection("endpoints")
        .add({
          endpoint: currentToken
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      // sendTokenToServer(currentToken);
      // updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request.
      console.log(
        "No Instance ID token available. Request permission to generate one."
      );
      // Show permission UI.
      // updateUIForPushPermissionRequired();
      // setTokenSentToServer(false);
    }
  })
  .catch(err => {
    console.log("An error occurred while retrieving token. ", err);
    // showToken('Error retrieving Instance ID token. ', err);
    // setTokenSentToServer(false);
  });

messaging.onMessage(payload => {
  console.log("Message received. ", payload);
  // ...
});

function requestPermission() {
  console.log("Requesting permission...");
  // [START request_permission]
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // [START_EXCLUDE]
      // In many cases once an app has been granted notification permission,
      // it should update its UI reflecting this.
      // resetUI();
      // [END_EXCLUDE]
    } else {
      console.log("Unable to get permission to notify.");
    }
  });
  // [END request_permission]
}

requestPermission();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
