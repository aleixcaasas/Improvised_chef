import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accounts from '../pages/Accounts';
import Home from '../pages/Home';
import ForgotPassword from '../components/login/ForgotPassword';
import MockRecipes from '../components/mock/MockRecipes';
import MockIngredients from '../components/mock/MockIngredients';
import SearchBar from '../components/SearchBar/SearchBar';
import { UserProvider } from '../pages/globalValue';

export default function RouterDirections() {
  return (
    
    <BrowserRouter>
     <UserProvider>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/accounts" element={<Accounts/>}/>
            <Route exact path="/login/forgotPassword" element={<ForgotPassword/>}/>
            <Route exact path="/recipes" element={<MockRecipes></MockRecipes>}/>
            <Route exact path="/ingredients" element={<MockIngredients></MockIngredients>}/>
            <Route exact path="/searchbar" element={<SearchBar></SearchBar>}/>
            <Route path='*' element={<Home/>}/>
        </Routes>
     </UserProvider>
    </BrowserRouter>
  );
}