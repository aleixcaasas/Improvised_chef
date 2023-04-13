import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../pages/globalValue';

import Home from '../pages/Home'
import Components from '../pages/Components'
import ChooseOption from '../pages/ChooseOption'
import Demo from '../pages/Demo'
import Profile from '../pages/Profile'
import MyKitchen from '../pages/MyKitchen'
import MyIngredients from '../pages/MyIngredients'
import ShoppingList from '../pages/ShoppingList'
import FavouriteRecipes from '../pages/FavouriteRecipes'

import ForgotPassword from '../components/login/ForgotPassword'
import MockRecipes from '../components/mock/MockRecipes'
import MockIngredients from '../components/mock/MockIngredients'
import SearchBar from '../components/searchBar/SearchBar'
import SideBar from '../components/sideBar/SideBar'
import ResumeRecipeContainer from '../components/resumeRecipe/Resume_recipe_container'
import ErrorLoginRegister from '../components/errorMessages/Invalid-Mail-Password/ErrorLoginRegister'

export default function RouterDirections() {
  return (
    
    <BrowserRouter>
     <UserProvider>
        <Routes>
            <Route exact path="/" element={<ChooseOption/>}/>
            <Route exact path="/home" element={<Home/>}/>
            {/*FINAL PAGES*/}
            {/*SERA EL FUTUR HOME*/}<Route exact path="/demo" element={<Demo/>}/>
            <Route exact path="/forgotPassword" element={<ForgotPassword/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route exact path="/MyKitchen" element={<MyKitchen/>}/>
            <Route exact path="/MyIngredients" element={<MyIngredients/>}/>
            <Route exact path="/ShoppingList" element={<ShoppingList/>}/>
            <Route exact path="/FavouriteRecipes" element={<FavouriteRecipes/>}/>


            {/* MOCKS */}
            <Route exact path="/components/recipes" element={<MockRecipes></MockRecipes>}/>
            <Route exact path="/components/ingredients" element={<MockIngredients></MockIngredients>}/>

            {/* COMPONENTS */}
            <Route exact path="/components" element={<Components></Components>} />
            <Route exact path="/components/accounts" element={<Demo/>} />
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