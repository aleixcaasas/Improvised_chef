const {initializeApp} = require('firebase/app')
const {getAuth, GoogleAuthProvider, updatePassword, updateProfile} = require('firebase/auth')
const {getDownloadURL, getStorage, ref, uploadBytesResumable} = require('firebase/storage')
const {getFirestore, collection, getDocs, getDoc, doc, query, where, limit, updateDoc, arrayUnion, arrayRemove} = require('firebase/firestore')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "--------------------------------------",
	authDomain: "--------------.firebaseapp.com",
	projectId: "--------------",
	storageBucket: "--------------.appspot.com",
	messagingSenderId: "--------------",
	appId: "-----------------------------------------",
	measurementId: "-----------"
  
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
