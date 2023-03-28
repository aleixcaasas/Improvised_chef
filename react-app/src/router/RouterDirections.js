import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accounts from '../pages/Accounts';
import Home from '../pages/Home';
import UserAuthC from '../components/login/UserAuthC';
import ForgotPassword from '../components/login/ForgotPassword';
import MockComponent from '../components/mock/MockComponent';
import SearchBar from '../components/searchBar/SearchBar';

export default function RouterDirections() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<UserAuthC><Home/></UserAuthC>}/>
            <Route exact path="/accounts" element={<Accounts/>}/>
            <Route exact path="/login/forgotPassword" element={<UserAuthC><ForgotPassword/></UserAuthC>}/>
            <Route exact path="/mock" element={<MockComponent></MockComponent>}/>
            <Route exact path="/searchbar" element={<SearchBar></SearchBar>}/>
            <Route path='*' element={<UserAuthC><Home/></UserAuthC>}/>
        </Routes>
    </BrowserRouter>
  );
}