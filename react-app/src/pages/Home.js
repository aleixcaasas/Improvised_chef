import { UserContext } from './globalValue';
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Home(){

    const { user, setUser } = useContext(UserContext);
    const navigation = useNavigate();

    const handleLogOut = async () => {
        //await axios.post('http://localhost:3700/logout', {user});
        setUser({email:''});
        navigation("/demo");
    }

    return (
        <div className="home">
            {
                user?.email && (
                    <>
                    <h1>IMPROVISED CHEF</h1>
                    <h3>User Logged In: {user?.email}</h3>
                    <button onClick={handleLogOut}>Sign Out</button>
                    </>
                )
            }
        </div>    
     );
}