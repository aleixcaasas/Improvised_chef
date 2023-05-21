import axios from 'axios';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase-config';

export default function LoginGoogle() {

	const navigation = useNavigate();

	const signInWithGoogle = async () => {

		try {
			const result = await signInWithPopup(auth, provider);
			await axios.post('http://localhost:3000/loginWithGoogle', result.user);
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
					window.location.reload();
				} else {
					return (
						<>
							<h3>Incorrect Log In. Please try again</h3>
							<button onClick={navigation('/home')}>Go Home</button>
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