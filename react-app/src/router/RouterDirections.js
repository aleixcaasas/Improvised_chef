import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accounts from '../pages/Accounts';
import Home from '../pages/Home';
import UserAuthC from '../components/login/UserAuthC';
import ForgotPassword from '../components/login/ForgotPassword';
import MockRecipes from '../components/mock/MockRecipes';
import MockIngredients from '../components/mock/MockIngredients';
import SearchBar from '../components/SearchBar/SearchBar';

export default function RouterDirections() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<UserAuthC><Home/></UserAuthC>}/>
            <Route exact path="/accounts" element={<Accounts/>}/>
            <Route exact path="/login/forgotPassword" element={<UserAuthC><ForgotPassword/></UserAuthC>}/>
            <Route exact path="/recipes" element={<MockRecipes></MockRecipes>}/>
            <Route exact path="/ingredients" element={<MockIngredients></MockIngredients>}/>
            <Route exact path="/searchbar" element={<SearchBar></SearchBar>}/>
            <Route path='*' element={<UserAuthC><Home/></UserAuthC>}/>
        </Routes>
    </BrowserRouter>
  );
}