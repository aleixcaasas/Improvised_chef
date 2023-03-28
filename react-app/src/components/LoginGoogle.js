import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { provider, auth, db } from '../firebase-config';
import { collection, addDoc, query, getDocs} from 'firebase/firestore';
import { FcGoogle } from 'react-icons/fc';

export default function LoginGoogle() {

  const navigation = useNavigate();

  const mailNotExists = async (email) => {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);

    let emailNotFound = true;

    querySnapshot.forEach((doc) => {
      console.log(doc.data().email, email)
      if(doc.data().email === email){
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
      const emailNotAtBD = await mailNotExists(email);
      if (emailNotAtBD) {
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

  const fluxSignInWithGoogle = async () => {
    await signInWithGoogle()
        .then((succes) => {
          if (succes){
            navigation('/');
          }else{
            return(
                <>
                  <h3>Incorrect Log In. Please try again</h3>
                  <button onClick={navigation('/')}>Go Home</button>
                </>
            )
          }
        });
  }

  return (
    <div>
      <button id = "button_google" onClick={fluxSignInWithGoogle}><FcGoogle size={25} /><label className='label_google'>Sign In With Google</label></button>
    </div>
  )
}