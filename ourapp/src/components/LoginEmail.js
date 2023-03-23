import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function LoginEmail(){

    const navigation = useNavigate();
    const [formState, setFormState] = useState({email: "", password: ""})
    const {email, password} = formState;

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setFormState(prev => ({...prev, [name]: value}))
    }


    const login = async (e) => {
        e.preventDefault();
        try{
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigation("/")
        }
        catch (error) {
            console.log(error.message);
            alert("invalid name or password")
        }
        
    }

    return ( 
        <div>
            <form action="">
                <input type="email" placeholder="EMAIL" value={email} name="email" onChange={handleChange}/> <br/>
                <input type="password" placeholder="PASSWORD" value={password} name="password" onChange={handleChange}/><br/>
                <input type="submit" value="LOGIN" onClick={login}/>
            </form>
                        
        </div>
     );
}