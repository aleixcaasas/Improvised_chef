import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAuthC, { useAuth } from "./UserAuthC";
import LoginGoogle from "./LoginGoogle";

export default function LoginEmail(){
    const navigation = useNavigate();
    const [formState, setFormState] = useState({email: "", password: ""})
    const {email, password} = formState;
    const {logInWithEmail} = useAuth();

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormState(prev => ({...prev, [name]: value}));
    }

    const login = async (e) => {
        e.preventDefault();
        try{
            const user = await logInWithEmail(email, password);
            console.log(user);
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
            <UserAuthC><LoginGoogle/></UserAuthC>
        </div>
    );
}