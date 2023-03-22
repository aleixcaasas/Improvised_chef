import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import {provider, auth} from './firebase-config';

export default function LoginGoogle() {

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}
