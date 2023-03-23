import React from "react";
import LoginEmail from "./LoginEmail";
import LoginGoogle from "./LoginGoogle";
import { NavLink } from "react-router-dom";

export default function Login(){
    return (      
        <div>
            <ul>
                <h3>Improvised Cheff's acount</h3>
                <LoginEmail/>
                <h3>Google's acount</h3>
                <LoginGoogle/>
            </ul>
        </div>
     );
}