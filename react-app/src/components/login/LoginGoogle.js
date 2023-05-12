import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase-config';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

export default function LoginGoogle() {

	const navigation = useNavigate();

	const signInWithGoogle = async () => {

		try {
			const result = await signInWithPopup(auth, provider);
			const response = await axios.post('http://localhost:3000/loginWithGoogle', result.user);
			if (response.data.loguejat === "true") {
				
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
				if (succes) {
					navigation('/');
				} else {
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
			<button id="button_google" onClick={fluxSignInWithGoogle}><FcGoogle size={25} /><p className='label_google'>Sign In With Google</p></button>
		</div>
	)
}