import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOOWewZbGuu-VncuTzba78N2a5bltCUsk",
    authDomain: "sinaglife-b6dea.firebaseapp.com",
    projectId: "sinaglife-b6dea",
    storageBucket: "sinaglife-b6dea.appspot.com",
    messagingSenderId: "151669642284",
    appId: "1:151669642284:web:8b5cef447aac099a6b2d89",
    measurementId: "G-54Y2C9YELS"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider();

  
