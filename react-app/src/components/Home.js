import { NavLink } from "react-router-dom";
import { useState, useEffect} from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import {useAuth} from '../context/UserAuthC';
import { useNavigate } from "react-router-dom";
import './home.css';



export default function Home(){
    const[userW, setUserW] = useState({});
    const {logOut} = useAuth();
    onAuthStateChanged(auth, (currentuser) => {
        setUserW(currentuser);
    });
    const handleLogOut = async () => {
        await logOut();
    }


    /********************LOGIN PART********************/

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

    /********************END LOGIN PART ********************/

    /******************** REGISTER PART *********************/
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
            navigate("/");
        }

        try{
            console.log(user)
        } catch (error){
            console.log(error.message)
        }
    }

    /******************** END REGISTER PART ********************/
    return (
        <div className="home">
        {
            
            !userW?.email && (
            <>
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <div className="login_page">
            <label for="chk" aria-hidden="true">Sign up</label>
                <form action="react-app/src/components">
                    <input type="email" placeholder="EMAIL" value={email} name="email" onChange={handleChange}/> <br/>
                    <input type="password" placeholder="PASSWORD" value={password} name="password" onChange={handleChange}/><br/>
                    <button type="submit" value="LOGIN" onClick={login}> Log-in </button>
                </form> 
            </div>
            <div className="register_page">
            <label for="chk" aria-hidden="true">Login</label>
                <form action="react-app/src/components">
                    <input type="text" placeholder="NAME" value={user.Name} name='Name' onChange={useHandler}/> <br/>
                    <input type="text" placeholder="USER_NAME" value={user.UserName} name='UserName' onChange={useHandler} /><br/>
                    <input type="email" placeholder="EMAIL" value={user.email} name='email' onChange={useHandler}/><br/>
                    <input type="password" placeholder="PASSWORD" value={user.password} name='password' onChange={useHandler} /><br/>
                    <input type="password" placeholder="REPEAT PASSWORD" value={user.passowrdConfirm} name='passowrdConfirm' onChange={useHandler} /><br/>
                    <button type="submit" value="Create user" onClick={register}> Register </button>
                </form> 
            </div>
            </>
            )
        }
        {
            userW?.email && (
                <>
                <h1>IMPROVISED CHEFF</h1>
                <h3>User Logged In: {userW?.email}</h3>
                <button onClick={handleLogOut}>Sign Out</button>
            </>
            )
        }
        </div>    
     );
}