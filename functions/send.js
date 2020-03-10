exports.handler = function(event, context, callback) {
  const fetch = require("node-fetch");

  var key = process.env.KEY;
  var to =
    "e0RPOD3O-DoiGz5TUAKz1r:APA91bGCGJSRuvK-kcxnrdMXPbKSqGiipSqhDP-Aa8vE0-G8peLEEnnNkBOxyHOlLdWmMJtnyEo9uhg0KiBLe77lpottlX4Xjtk4FGWsJFkGnIKxg86cRWB-asZgce2RpEj400lSN4YG";
  var notification = {
    title: "Portugal vs. Denmark",
    body: "5 to 1",
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
      to: to
    })
  })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });
};
