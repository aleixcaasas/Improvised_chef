import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function DeleteAccountButton() {

	const navigation = useNavigate();

	async function handleDeleteAccount(){
		try {
			const response = await axios.post('http://localhost:3000/user/delete');
			if(response.status === 200){
				navigation("/home");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<button onClick={() => handleDeleteAccount()}>Delete Account</button>
	)
}

