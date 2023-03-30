import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";
import axios from "axios";
import { UserContext } from '../../pages/globalValue';
import { useContext } from "react";

export default function LoginEmail(){
    const navigation = useNavigate();
    const [formState, setFormState] = useState({email: "", password: ""})
    const {email, password} = formState;

    const { user, setUser } = useContext(UserContext);

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormState(prev => ({...prev, [name]: value}));
    }

    const login = async (e) => {
        e.preventDefault();
        try{
            const result = await axios.post('http://localhost:3700/login', {email, password});
            if(result.data.loguejat){
                setUser({email: result.data.email});
            }            
            navigation("/");
        }
        catch (error) {
            console.log(error.message);
            alert("Invalid name or password");
        }
    }

    return (
        <div className="login_page">
            <label htmlFor="chk" aria-hidden="true">Sign In</label>
            <form action="react-app/src/components">
                <input type="email" placeholder="EMAIL" value={email} name="email" onChange={handleChange}/> <br/>
                <input type="password" placeholder="PASSWORD" value={password} name="password" onChange={handleChange}/><br/>
                <p><Link className="navegationLink" to='/login/forgotPassword'>Forgot your password?</Link></p>
                <button type="submit" value="LOGIN" onClick={login}>Sign In</button>
            </form>
            <LoginGoogle/>
        </div>
    );
}