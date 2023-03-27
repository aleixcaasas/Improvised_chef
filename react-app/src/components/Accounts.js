import React from "react";
import UserAuthC from '../context/UserAuthC'
import Register from "./Register";
import LoginEmail from "./LoginEmail";
import './styles.css';
export default function Accounts(){
    return (
        <div className="container">
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <UserAuthC><LoginEmail/></UserAuthC>
            <UserAuthC><Register/></UserAuthC>
        </div>
    );
}