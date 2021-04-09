// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmW67wY_CbJSVRLnZS1eq2szZo5NHVj3A",
  authDomain: "facebook-clone-f7ff7.firebaseapp.com",
  databaseURL: "https://facebook-clone-f7ff7-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-f7ff7",
  storageBucket: "facebook-clone-f7ff7.appspot.com",
  messagingSenderId: "986485458440",
  appId: "1:986485458440:web:869ed65d85de391b0fb3bd",
  measurementId: "G-DBSGGQG3E6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth,provider };
export default  db ;
