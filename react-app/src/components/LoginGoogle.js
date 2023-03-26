import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserAuthC';
import { FcGoogle } from 'react-icons/fc';

export default function LoginGoogle() {
  const navigation = useNavigate();
  const {logInWithGoogle} = useAuth();

  const fluxSignInWithGoogle = async () => {
    await logInWithGoogle().then((success) => {
      if (success){
        navigation('/');
      }
      else{
        return (
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
      <button onClick={fluxSignInWithGoogle}><FcGoogle /> Sign In With Google</button>
    </div>
  )
}