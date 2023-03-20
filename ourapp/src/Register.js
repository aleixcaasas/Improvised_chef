import React, { useState, useEffect } from "react";
import {useAuth} from './context/UserAuthC'
import { useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate();
    const {error, SignUp, currentuser} = useAuth()
    const[err, setError] = useState("")
    const[backError, setBackError] = useState("")
    const [user, setUser] = useState({
        Name: "",
        UserName: "",
        email: "",
        password: "",
        passowrdConfirm: ""
    })

    const useHandler = (e) => {
        const {name, value} = e.target;
        setUser((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    useEffect(() => {
        if(error) {
            setInterval(() => { 
                setBackError("")
            }, 2500)
            setBackError(error)
        }
    }, [error, currentuser])

    

    const register = async (e) =>{
        e.preventDefault()

        if(user.Name === "" || user.UserName === "" || user.email === "" || user.password ===""){
            return setError("Please fill all the fields");
        }else if (user.password !== user.passowrdConfirm){
            return setError("Passwords do not match");
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
            <input type="text" placeholder="NAME" value={user.Name} name='Name' onChange={useHandler}/>
            <input type="text" placeholder="USER_NAME" value={user.UserName} name='UserName' onChange={useHandler} />
            <input type="email" placeholder="MAIL" value={user.email} name='email' onChange={useHandler}/>
            <input type="password" placeholder="PASSWORD" value={user.password} name='password' onChange={useHandler} />
            <input type="password" placeholder="PASSWORD" value={user.passowrdConfirm} name='passowrdConfirm' onChange={useHandler} />
            <button type="submit" onClick={register}>Create User</button>
        </div>
     );
}
 
export default Register;