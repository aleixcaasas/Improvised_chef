import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../../ourapp/src/components/Login';
import Register from '../../ourapp/src/components/Register';
import Home from '../../ourapp/src/components/Home';
import UserAuthC from '../context/UserAuthC';
import ForgotPassword from '../../ourapp/src/components/ForgotPassword';

export default function RouterDirections() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<UserAuthC><Home/></UserAuthC>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/login/forgotPassword" element={<UserAuthC><ForgotPassword/></UserAuthC>}/>
            <Route exact path="/register"element={<UserAuthC><Register/></UserAuthC>}/>
            <Route path='*' element={<UserAuthC><Home/></UserAuthC>}/>
        </Routes>
    </BrowserRouter>
  );
}
