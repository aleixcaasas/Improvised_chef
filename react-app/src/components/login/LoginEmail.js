import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";
import axios from "axios";
import { UserContext } from '../../pages/globalValue';
import { useContext } from "react";

export default function LoginEmail() {
    const navigation = useNavigate();
    const [formState, setFormState] = useState({email: "", password: ""})
    const {email, password} = formState;

    const { user, setUser } = useContext(UserContext);

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormState(prev => ({ ...prev, [name]: value }));
    }

    const login = async (e) => {
        e.preventDefault();
        try{
            if(email === "" || password === ""){
                alert("Please fill all the fields");
            }
            else{
                const result = await axios.post('http://localhost:3000/login', {email, password});
                console.log(result.data);
                if(result.data.id != null && result.data.loguejat){
                    setUser({email: result.data.email, id: result.data.id});
                    navigation("/");
                }
                else{
                    alert("Username or password incorrect");
                }
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="login_page">
            <label htmlFor="chk" aria-hidden="true">Sign In</label>
            <form className="login-form" action="react-app/src/components">
                <input type="email" placeholder="EMAIL" value={email} name="email" onChange={handleChange} /> <br />
                <input type="password" placeholder="PASSWORD" value={password} name="password" onChange={handleChange} /><br />
                <p><Link className="navegationLink" to='/accounts/forgotPassword'>Forgot your password?</Link></p>
                <button type="submit" value="LOGIN" onClick={login}>Sign In</button>
            </form>
            <LoginGoogle/>
        </div>
    );
}