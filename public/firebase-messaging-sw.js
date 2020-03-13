/* eslint-disable no-restricted-globals */
/* global self, importScripts, firebase, clients */

importScripts("https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.10.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBYuBVHKOnjyHq-IN6_of7HipPJyTelUVc",
  authDomain: "samu-is-coming.firebaseapp.com",
  databaseURL: "https://samu-is-coming.firebaseio.com",
  projectId: "samu-is-coming",
  storageBucket: "samu-is-coming.appspot.com",
  messagingSenderId: "714982459562",
  appId: "1:714982459562:web:bbecf8ec9d4ba1ea52a8d3",
  measurementId: "G-1ZQK9ECK53"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const now = new Date();
  const today = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  const notificationTitle = "È nato 🦄";
  const notificationOptions = {
    body: `Samuele è nato! ${today}`,
    icon: "/images/fiocco.png",
    vibrate: [200, 100, 200, 100, 200, 100, 200]
  };

  self.addEventListener(
    "notificationclick",
    function(event) {
      event.notification.close();
      clients.openWindow("/?notification");
    },
    false
  );

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
