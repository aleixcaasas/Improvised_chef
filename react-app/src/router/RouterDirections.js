import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accounts from '../pages/Accounts';
import Home from '../pages/Home';
import ForgotPassword from '../components/login/ForgotPassword';
import MockRecipes from '../components/mock/MockRecipes';
import MockIngredients from '../components/mock/MockIngredients';
import SearchBar from '../components/searchBar/SearchBar';
import { UserProvider } from '../pages/globalValue';
import Components from '../pages/Components'
import SideBar from '../components/sideBar/SideBar'
import ResumeRecipe from '../components/resume_recipe/Resume_recipe';

export default function RouterDirections() {
  return (
    
    <BrowserRouter>
     <UserProvider>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/accounts" element={<Accounts/>}/>
            <Route exact path="/login/forgotPassword" element={<ForgotPassword/>}/>
            
            {/* TEMPORAL PATHS */}
            {/* MOCKS */}
            <Route exact path="/recipes" element={<MockRecipes></MockRecipes>}/>
            <Route exact path="/ingredients" element={<MockIngredients></MockIngredients>}/>

            {/* COMPONENTS */}
            <Route exact path="/components" element={<Components></Components>} />
            <Route exact path="/components/accounts" element={<Accounts></Accounts>} />
            <Route exact path="/components/sidebar" element={<SideBar></SideBar>} />
            <Route exact path="/components/searchbar" element={<SearchBar></SearchBar>} />
            <Route exact path="/components/resume_recipe" element={<ResumeRecipe/>} />            
            
            
            <Route path='*' element={<Home/>}/>
        </Routes>
     </UserProvider>
    </BrowserRouter>
  );
}