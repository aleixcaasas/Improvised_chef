import React, { useState } from "react";
import axios from 'axios';

export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
    const missatge = await axios.post('http://localhost:3000/resetPassword', {email});
    setMessage(missatge.data.message);
	};

  if (message === "") {
    return (
      <div className="container" id="forgot_password">
        <h1>Reset your password</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"></input>
          <button type="submit">Send email</button>
        </form>
      </div>
    );
  } else if (message === "Password reset email send correctly") {
    return (
      <h3>{message}</h3>
    );
  } else {
    return <h3>{message}</h3>;
  }
}