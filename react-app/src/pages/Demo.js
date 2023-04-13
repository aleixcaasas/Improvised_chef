//la demo només serveix perquè un cop et registris sorti el menu...
import { UserContext } from './globalValue';
import React, { useContext } from "react";
import Register from "../components/register/Register";
import LoginEmail from "../components/login/LoginEmail";


export default function Demo() {
    return (
        <div className="container">
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <LoginEmail/>
            <Register/>
        </div>
    );

}