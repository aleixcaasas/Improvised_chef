import React, { useState, useEffect } from "react";
import { useAuth } from '../login/UserAuthC'
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const { error, SignUp, currentUser } = useAuth();
    const [err, setError] = useState("");
    const [backError, setBackError] = useState("");
    const [user, setUser] = useState({
        Name: "",
        UserName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((pre) => {
            return {
                ...pre,
                [name]: value
            }
        });
    }

    useEffect(() => {
        if (error) {
            setInterval(() => {
                setBackError("");
            }, 2500)
            setBackError(error);
        }
    }, [error, currentUser]);

    const register = async (e) => {
        e.preventDefault();

        if (user.Name === "" || user.UserName === "" || user.email === "" || user.password === "" || user.passwordConfirm === "") {
            setError("Please fill all the fields")
            alert("Please fill all the fields");
            return err;
        } else if (user.password !== user.passwordConfirm) {
            setError("Passwords do not match")
            alert("Passwords do not match");
            return err;
        } else {
            SignUp(user.Name, user.UserName, user.email, user.password)
            {
                currentUser && setUser({
                    Name: "",
                    UserName: "",
                    email: "",
                    password: "",
                    passwordConfirm: ""
                })
            }
            navigate("/");
        }

        try {
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="register_page">
            <label htmlFor="chk" aria-hidden="true">Sign Up</label>
            <form className="login-form" action="react-app/src/components">
                <input type="text" placeholder="NAME" value={user.Name} name='Name' onChange={handleChange} /> <br />
                <input type="text" placeholder="USER NAME" value={user.UserName} name='UserName' onChange={handleChange} /><br />
                <input type="email" placeholder="EMAIL" value={user.email} name='email' onChange={handleChange} /><br />
                <input type="password" placeholder="PASSWORD" value={user.password} name='password' onChange={handleChange} /><br />
                <input type="password" placeholder="REPEAT PASSWORD" value={user.passwordConfirm} name='passwordConfirm' onChange={handleChange} /><br />
                <button type="submit" value="Create user" onClick={register}> Sign Up</button>
            </form>
        </div>
    );
}