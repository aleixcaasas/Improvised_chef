import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import {provider, auth, db} from './firebase-config';
import { collection, addDoc, query, getDocs} from 'firebase/firestore';


export default function LoginGoogle() {

  const mailNotExists = async (email) => {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
  
    let emailNotFound = true;
  
    querySnapshot.forEach((doc) => {
      console.log(doc.data().email, email)
      if(doc.data().email === email){
        console.log('uau')
        emailNotFound = false;
      }
    });
    console.log("email added:" + emailNotFound)
    return emailNotFound;
  }

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const userName = email.split('@')[0];
      const p = await mailNotExists(email);
      if (p) {
        const docRef = await addDoc(collection(db, "users"), {
          name,
          userName,
          profilePic,
          email,
          userId: `${result.user.uid}`
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}
