import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import UserAuthC from './context/UserAuthC';

export default function RouterDirections() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route  exact path="/register"element={<UserAuthC><Register/></UserAuthC>}/>
        </Routes>
    </BrowserRouter>
  );
}
