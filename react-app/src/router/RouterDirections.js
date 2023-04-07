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
import ResumeRecipeContainer from '../components/resume_recipe/Resume_recipe_container';
import ErrorLoginRegister from '../components/Error_login_register/ErrorLoginRegister';

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
            <Route exact path="/components/resume_recipe" element={<ResumeRecipeContainer/>} />
            <Route exact path="/components/Error_login_register" element={<ErrorLoginRegister />} />
            
            <Route path='*' element={<Home/>}/>
        </Routes>
     </UserProvider>
    </BrowserRouter>
  );
}