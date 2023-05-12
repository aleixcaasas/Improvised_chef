import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function ChooseOption() {

    const navigation = useNavigate();

    const [userAPI, setUserAPI] = useState('');

    const move = async (e) => {
        navigation("/home");
    }

    useEffect(() => {
        async function getUser() {
            const userBO = await axios.get('http://localhost:3000/user');
            setUserAPI(userBO.data);
            if (userBO.data?.email) {
                move();
            }
        }
        getUser();
    }, []);

    return (
        <div className="home">
            {
                !userAPI?.email && (
                    <>
                        <h1>IMPROVISED CHEF</h1>
                        <ul>
                            <li><NavLink to="/home" className="navegaitionLink">DEMO</NavLink></li>
                            <li><NavLink to="/components" className="navegationLink">View all components</NavLink></li>
                        </ul>
                    </>
                )
            }
        </div>
    );
}