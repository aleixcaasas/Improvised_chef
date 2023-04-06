import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accounts from '../pages/Accounts';
import Home from '../pages/Home';
import UserAuthC from '../components/login/UserAuthC';
import ForgotPassword from '../components/login/ForgotPassword';
import MockComponent from '../components/mock/MockComponent';
import SearchBar from '../components/SearchBar/SearchBar';
import Components from '../pages/Components'
import SideBar from '../components/sideBar/sideBar'
import ResumeRecipe from '../components/resume_recipe/Resume_recipe';
import ErrorLoginRegister from '../components/Error_login_register/ErrorLoginRegister';

export default function RouterDirections() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserAuthC><Home /></UserAuthC>} />
        <Route exact path="/accounts" element={<Accounts />} />
        <Route exact path="/accounts/forgotPassword" element={<UserAuthC><ForgotPassword /></UserAuthC>} />
        <Route exact path="/mock" element={<MockComponent></MockComponent>} />
        <Route exact path="/components" element={<Components></Components>} />
        <Route exact path="/components/accounts" element={<Accounts></Accounts>} />
        <Route exact path="/components/sidebar" element={<SideBar></SideBar>} />
        <Route exact path="/components/searchbar" element={<SearchBar></SearchBar>} />
        <Route exact path="/components/resume_recipe" element={<ResumeRecipe/>} />
        <Route exact path="/components/Error_login_register" element={<ErrorLoginRegister></ErrorLoginRegister>} />

        <Route path='*' element={<UserAuthC><Home /></UserAuthC>} />
      </Routes>
    </BrowserRouter>
  );
}