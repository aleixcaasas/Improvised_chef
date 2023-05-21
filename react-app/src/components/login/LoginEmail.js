import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";

export default function LoginEmail(props) {

    const [formState, setFormState] = useState({ email: "", password: "" })
    const { email, password } = formState;

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormState(prev => ({ ...prev, [name]: value }));
    }

    const login = async (e) => {
        e.preventDefault();
        try {
            if (email === "" || password === "") {
                props.errorM({ error: true, comment: "Please fill all the fields" });
            }
            else {
                const result = await axios.post('http://localhost:3000/login', { email, password }, { withCredentials: true });
                if (result.data.id != null && result.data.loguejat) {
                    window.location.reload();
                }
                else {
                    props.errorM({ error: true, comment: "Username or password incorrect" });
                }
            }
        }
        catch (error) {
            props.errorM({ error: true, comment: error });
        }
    }

    return (

        <div className="login_page">
            <label htmlFor="chk" aria-hidden="true" id="titel">Sign In</label>
            <form className="login-form" action="react-app/src/components">
                <input type="email" placeholder="EMAIL" value={email} name="email" onChange={handleChange} /> <br />
                <input type="password" placeholder="PASSWORD" value={password} name="password" onChange={handleChange} /><br />
                <p><Link className="navegationLink" to='/forgotPassword'>Forgot your password?</Link></p>
                <button type="submit" value="LOGIN" onClick={login}>Sign In</button>
            </form>
            <LoginGoogle />
        </div>

    );
}