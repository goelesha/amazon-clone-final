// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgeKE7uGZ6gv5cJIsc8aqF9sTcnByAdUc",
  authDomain: "clone-final-8ab42.firebaseapp.com",
  projectId: "clone-final-8ab42",
  storageBucket: "clone-final-8ab42.appspot.com",
  messagingSenderId: "525279195773",
  appId: "1:525279195773:web:5f7a4bc07770d05566f714",
  measurementId: "G-7Y86KQ1M24"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };