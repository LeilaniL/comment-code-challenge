import firebase from "firebase";
import secretAPIKey from "./apikey";

var config = {
  apiKey: { secretAPIKey },
  authDomain: "commenting-code-challenge.firebaseapp.com",
  databaseURL: "https://commenting-code-challenge.firebaseio.com",
  projectId: "commenting-code-challenge",
  storageBucket: "commenting-code-challenge.appspot.com",
  messagingSenderId: "548974158779"
};
var myFirebase = firebase.initializeApp(config);
export default myFirebase;
