import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCpVw3wUH3_NWm4WUF1cLIe1_eCeZCEMGI",
	authDomain: "cheff-improvisado.firebaseapp.com",
	projectId: "cheff-improvisado",
	storageBucket: "cheff-improvisado.appspot.com",
	messagingSenderId: "785865687041",
	appId: "1:785865687041:web:1bedf6742cec76f2de4000",
	measurementId: "G-YPK6ERRE9X"
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