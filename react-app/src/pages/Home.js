import { NavLink } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from '../components/login/UserAuthC';

export default function Home() {
    const [user, setUser] = useState({});
    const { logOut } = useAuth();
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const handleLogOut = async () => {
        await logOut();
    }

    return (
        <div className="home">
            {
                !user?.email && (
                    <>
                        <h1>IMPROVISED CHEF</h1>
                        <ul>
                            <li><NavLink to="/accounts" className="navegationLink">App Demo</NavLink></li>
                            <li><NavLink to="/mock" className="navegationLink">Mock</NavLink></li>
                            <li><NavLink to="/components" className="navegationLink">View all components</NavLink></li>
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