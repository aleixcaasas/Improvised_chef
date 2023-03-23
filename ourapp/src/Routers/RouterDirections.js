import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import UserAuthC from '../context/UserAuthC';
import LoginGoogle from '../components/LoginGoogle';

export default function RouterDirections() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route  exact path="/register"element={<UserAuthC><Register/></UserAuthC>}/>
            <Route exact path="/loginGoogle" element={<LoginGoogle/>}/>
        </Routes>
    </BrowserRouter>
  );
}
