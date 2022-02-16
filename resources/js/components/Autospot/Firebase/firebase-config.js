import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOI311HZ6oEvH8dSkljAJBoIv211NAjDs",
    authDomain: "futbolcontratodos-850d1.firebaseapp.com",
    projectId: "futbolcontratodos-850d1",
    storageBucket: "futbolcontratodos-850d1.appspot.com",
    messagingSenderId: "431434647401",
    appId: "1:431434647401:web:c8bff5c01b3d234d325ff8",
    //measurementId: "G-FNE16K2ZV8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
