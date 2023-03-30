import { NavLink } from "react-router-dom";
import '../components/styles.css';
import { UserContext } from './globalValue';
import React, { useContext } from "react";


export default function Home(){

    const { user, setUser } = useContext(UserContext);

    const handleLogOut = async () => {
        //await axios.post('http://localhost:3700/logout', {user});
        setUser({email:''});
    }

    return (
        <div className="home">
            {
            
                !user?.email && (
                <>
                <h1>IMPROVISED CHEF</h1>
                <ul>
                    <li><NavLink to="/accounts" className="navegationLink">Accounts</NavLink></li>
                    <li><NavLink to="/mock" className="navegationLink">Mock</NavLink></li>
                </ul>
                </>
                )
            }
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