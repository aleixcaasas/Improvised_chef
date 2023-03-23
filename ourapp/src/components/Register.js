import React, { useState, useEffect } from "react";
import {useAuth} from '../context/UserAuthC'
import { useNavigate } from "react-router-dom";


export default function Register(){

    const navigate = useNavigate();
    const {error, SignUp, currentuser} = useAuth();
    const[err, setError] = useState("");
    const[backError, setBackError] = useState("");
    const [user, setUser] = useState({
        Name: "",
        UserName: "",
        email: "",
        password: "",
        passowrdConfirm: ""
    });

    const useHandler = (e) => {
        const {name, value} = e.target;
        setUser((pre) => {
            return {
                ...pre,
                [name]: value
            }
        });
    }

    useEffect(() => {
        if(error) {
            setInterval(() => { 
                setBackError("");
            }, 2500)
            setBackError(error);
        }
    }, [error, currentuser]);

    

    const register = async (e) =>{
        e.preventDefault();

        if(user.Name === "" || user.UserName === "" || user.email === "" || user.password ===""){
            setError("Please fill all the fields")
            return err;
        }else if (user.password !== user.passowrdConfirm){
            setError("Passwords do not match")
            return err;
        }else{
            SignUp(user.Name, user.UserName, user.email, user.password)
            {
                currentuser && setUser({
                    Name: "",
                    UserName: "",
                    email: "",
                    password: "",
                    passowrdConfirm: ""
                })
            }
            navigate("/")
        }

        try{
            console.log(user)
        } catch (error){
            console.log(error.message)
        }
    }

    return ( 
        <div>
            <input type="text" placeholder="NAME" value={user.Name} name='Name' onChange={useHandler}/> <br/>
            <input type="text" placeholder="USER_NAME" value={user.UserName} name='UserName' onChange={useHandler} /><br/>
            <input type="email" placeholder="EMAIL" value={user.email} name='email' onChange={useHandler}/><br/>
            <input type="password" placeholder="PASSWORD" value={user.password} name='password' onChange={useHandler} /><br/>
            <input type="password" placeholder="REPEAT PASSWORD" value={user.passowrdConfirm} name='passowrdConfirm' onChange={useHandler} /><br/>
            <input type="submit" value="Create user" onClick={register}/>
        </div>
     );
}