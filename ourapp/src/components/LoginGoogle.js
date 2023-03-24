import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UserAuthC';


export default function LoginGoogle() {

  const navigation = useNavigate();
  const {logInWithGoogle} = useAuth();

  
  const fluxSignInWithGoogle = async () => {
    await logInWithGoogle()
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
    </div>
  )
}
