var admin = require("firebase-admin");
var serviceAccount = {
  type: "service_account",
  project_id: "samu-is-coming",
  private_key_id: process.env.FB_PKID,
  private_key: process.env.FB_PK.replace(/\\n/g, "\n"),
  client_email: process.env.FB_CLIENT,
  client_id: process.env.FB_CLID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.FB_CERTURL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://samu-is-coming.firebaseio.com"
});

var topic = "samu-test";

var message = {
  data: {},
  topic: topic
};

exports.handler = async function(event, context, callback) {
  return admin
    .messaging()
    .send(message)
    .then(res => ({
      statusCode: 200,
      body: res
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
