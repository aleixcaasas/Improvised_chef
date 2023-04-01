import React from "react";
import Register from "../components/register/Register";
import LoginEmail from "../components/login/LoginEmail";
import '../components/login/login.css';
export default function Accounts() {
    return (
        <div className="container">
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <LoginEmail/>
            <Register/>
        </div>
    );
}