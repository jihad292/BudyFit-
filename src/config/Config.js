import firebase from "firebase/compat";
import '@firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAhwnrPu0lnywx1Aie38rvFVJbqFwWRdpc",
  authDomain: "budyfit-2ed84.firebaseapp.com",
  projectId: "budyfit-2ed84",
  storageBucket: "budyfit-2ed84.appspot.com",
  messagingSenderId: "760131802555",
  appId: "1:760131802555:web:a4f9a7cd99097c88b0e09e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage, firebase as default }