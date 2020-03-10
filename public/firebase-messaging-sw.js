importScripts("https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
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

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
