import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDLGGyc28KLTb4ctfjLZPHNqx9Or5JKZyE",
  authDomain: "crwn-db-b8da6.firebaseapp.com",
  projectId: "crwn-db-b8da6",
  storageBucket: "crwn-db-b8da6.appspot.com",
  messagingSenderId: "1048624836164",
  appId: "1:1048624836164:web:99064c572d8dd389599611",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
