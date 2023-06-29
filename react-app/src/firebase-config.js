import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
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
const provider = new GoogleAuthProvider();

export {
	db,
	auth,
	provider
}
