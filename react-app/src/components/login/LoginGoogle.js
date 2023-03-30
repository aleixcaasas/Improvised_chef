import { signInWithPopup} from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { db, auth, provider } from '../../firebase-config';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { UserContext } from '../../pages/globalValue';
import { useContext } from "react";

export default function LoginGoogle() {

  const navigation = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const signInWithGoogle = async () => {

    try {
      const result = await signInWithPopup(auth, provider);
      const response = await axios.post('http://localhost:3700/loginWithGoogle', result.user);
      console.log(response);
      if(response.data.loguejat === "true"){
        setUser({email: response.data.email});
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