import React, { useState } from "react";
import UserAuthC from '../context/UserAuthC'
import Register from "./Register";
import LoginEmail from "./LoginEmail";
import './styles.css';


export default function Accounts(){

    const [show, setShow] = useState(true);

    return (
        <div className ={show ? "container container_show" : "container"}>
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <UserAuthC><LoginEmail/></UserAuthC>
            <UserAuthC><Register/></UserAuthC>
        </div>
    );
}