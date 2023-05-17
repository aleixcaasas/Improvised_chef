const {initializeApp} = require('firebase/app')
const {getAuth, GoogleAuthProvider, updatePassword, updateProfile} = require('firebase/auth')
const {getDownloadURL, getStorage, ref, uploadBytesResumable} = require('firebase/storage')
const {getFirestore, collection, getDocs, getDoc, doc, query, where, limit, updateDoc, arrayUnion, arrayRemove} = require('firebase/firestore')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /*apiKey: "AIzaSyCpVw3wUH3_NWm4WUF1cLIe1_eCeZCEMGI",
  authDomain: "cheff-improvisado.firebaseapp.com",
  projectId: "cheff-improvisado",
  storageBucket: "cheff-improvisado.appspot.com",
  messagingSenderId: "785865687041",
  appId: "1:785865687041:web:1bedf6742cec76f2de4000",
  measurementId: "G-YPK6ERRE9X"*/
  apiKey: "AIzaSyCremjjBCYR7iA0wz-xl3MplYOq1ADzZ9E",
  authDomain: "prova-bd-ae518.firebaseapp.com",
  projectId: "prova-bd-ae518",
  storageBucket: "prova-bd-ae518.appspot.com",
  messagingSenderId: "780344726761",
  appId: "1:780344726761:web:a3db3603ca02a04c1c0c78",
  measurementId: "G-W9Q8ZNFBZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

module.exports = {
  db,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  limit,
  doc,
  updateDoc,
  updatePassword,
  updateProfile,
  getDownloadURL,
  storage,
  ref,
  uploadBytesResumable,
  arrayUnion,
  arrayRemove,
  auth,
  provider
}