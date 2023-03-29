import React from "react";
import UserAuthC from '../components/login/UserAuthC'
import Register from "../components/register/Register";
import LoginEmail from "../components/login/LoginEmail";
import '../components/styles.css';

export default function Accounts(){
    return (
        <div className="container">
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <UserAuthC><LoginEmail/></UserAuthC>
            <UserAuthC><Register/></UserAuthC>
        </div>
    );
}