exports.handler = function(event, context, callback) {
  const firebase = require("firebase");
  // Required for side-effects
  require("firebase/firestore");
  const fetch = require("node-fetch");

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
  var database = firebase.firestore();

  var key = process.env.KEY;

  database
    .collection("endpoints")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        var notification = {
          title: "Portugal vs. Denmark",
          body: `R: ${Math.random()}`,
          icon: "firebase-logo.png",
          click_action: "http://localhost:8081"
        };

        fetch("https://fcm.googleapis.com/fcm/send", {
          method: "POST",
          headers: {
            Authorization: "key=" + key,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            notification: notification,
            to: doc.data().endpoint
          })
        })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.error(error);
          });
      });
    });
};
