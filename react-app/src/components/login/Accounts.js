import React from "react";
import UserAuthC from './UserAuthC'
import Register from "../register/Register";
import LoginEmail from "./LoginEmail";
import '../styles.css';
export default function Accounts(){
    return (
        <div className="container">
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <UserAuthC><LoginEmail/></UserAuthC>
            <UserAuthC><Register/></UserAuthC>
        </div>
    );
}