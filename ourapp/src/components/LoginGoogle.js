import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {provider, auth, db} from '../firebase-config';
import { collection, addDoc, query, getDocs} from 'firebase/firestore';


export default function LoginGoogle() {

  const navigation = useNavigate();

  const mailNotExists = async (email) => {
    const users = query(collection(db, "users"));
    const querySnapshot = await getDocs(users);
  
    //let emailNotFound = true;
  
    querySnapshot.forEach((doc) => {
      console.log(doc.data().email, email);
      if(doc.data().email === email){
        console.log('uau');
        return true;
      }
    });
    //console.log(emailNotFound)
    return false;
  }

  const signInWithGoogle = async () => {
    try {
      let result = await signInWithPopup(auth, provider);
      let name = result.user.displayName;
      let email = result.user.email;
      let profilePic = result.user.photoURL;
      let userName = email.split('@')[0];
      let isEmailAtBD = await mailNotExists(email);
      console.log(isEmailAtBD);
      if (!isEmailAtBD) {
        //const docRef = await addDoc(collection(db, "users"), {
        await addDoc(collection(db, "users"), {
          name,
          userName,
          profilePic,
          email,
          userId: `${result.user.uid}`
        });
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }


  const fluxSignInWithGoogle = () => {
    signInWithGoogle()
    .then((succes) => {
      if (succes){
        navigation('/');
      }else{
        return 
        <>
          <h3>Incorrect Log In. Please try again</h3>
          <button onClick={navigation('/')}>Go Home</button>
        </>
      }
    });
  }
  
  

  return (
    <div>
      <button onClick={fluxSignInWithGoogle}>Sign In With Google</button>
      <button onClick={() => {
        mailNotExists('ericsubirana444@gmail.com')
      }}>aaaaaaaaaaaaa</button>
    </div>
  )
}
