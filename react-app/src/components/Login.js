import React from "react";
import LoginEmail from "./LoginEmail";
import LoginGoogle from "./LoginGoogle";
import UserAuthC from "../context/UserAuthC";
import {Link} from "react-router-dom";

export default function Login(){
    return (      
        <div>
            <ul>
                <h3>Improvised Cheff's acount</h3>
                <UserAuthC><LoginEmail/></UserAuthC>
                <p><Link className="navegationLink"to='/login/forgotPassword'>Forgot your password?</Link></p>
                <h3>Google's acount</h3>
                <UserAuthC><LoginGoogle/></UserAuthC>
            </ul>
        </div>
     );
}