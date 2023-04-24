import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../../pages/globalValue';

export default function Register(props) {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [err] = useState("");
    const [userVar, setUserVar] = useState({
        Name: "",
        UserName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserVar((pre) => {
            return {
                ...pre,
                [name]: value
            }
        });
    }

    const register = async (e) => {
        e.preventDefault();

        if (userVar.Name === "" || userVar.UserName === "" || userVar.email === "" || userVar.password === "" || userVar.passwordConfirm === "") {
            props.errorM({error: true, comment: "Please fill all the fields"});
            return err;
        }
        else if (userVar.password !== userVar.passwordConfirm) {
            props.errorM({error: true, comment: "Passwords do not match"});
            return err;
        }
        else {
            const name = userVar.Name;
            const userName = userVar.UserName;
            const email = userVar.email;
            const password = userVar.password;
            const result = await axios.post('http://localhost:3000/register', { name, userName, email, password });
            if (result.data.loguejat === "true") {
                setUser({ email: result.data.email, id: result.data.id });
                window.localStorage.setItem('usuariLogged', JSON.stringify({ email: result.data.email, id: result.data.id }));
                navigate("/");
            }
            else {
                props.errorM({error: true, comment: "User already exist"});
            }
        }

        try {
            console.log(userVar)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="register_page">
            <label htmlFor="chk" aria-hidden="true">Sign Up</label>
            <form className="login-form" action="react-app/src/components">
                <input type="text" placeholder="NAME" value={userVar.Name} name='Name' onChange={handleChange} /> <br />
                <input type="text" placeholder="USER NAME" value={userVar.UserName} name='UserName' onChange={handleChange} /><br />
                <input type="email" placeholder="EMAIL" value={userVar.email} name='email' onChange={handleChange} /><br />
                <input type="password" placeholder="PASSWORD" value={userVar.password} name='password' onChange={handleChange} /><br />
                <input type="password" placeholder="REPEAT PASSWORD" value={userVar.passwordConfirm} name='passwordConfirm' onChange={handleChange} /><br />
                <button type="submit" value="Create user" onClick={register}> Sign Up</button>
            </form>
        </div>
    );
}