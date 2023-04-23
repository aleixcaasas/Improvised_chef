import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../pages/globalValue';

import Home from '../pages/Home'
import Components from '../pages/Components'
import ChooseOption from '../pages/ChooseOption'
import Profile from '../pages/Profile'
import MyKitchen from '../pages/MyKitchen'
import MyIngredients from '../pages/MyIngredients'
import ShoppingList from '../pages/ShoppingList'
import FavoriteRecipes from '../pages/FavoriteRecipes'

/*S'HAURAN DE BORRAR TOTS ELS COMPONENTS ABANS D'ENTREGAR EL PROJECTE */
import ForgotPassword from '../components/login/ForgotPassword'
import SearchBar from '../components/searchBar/SearchBar'
import SideBar from '../components/sideBar/SideBar'
import ResumeRecipeContainer from '../components/resumeRecipe/ResumeRecipeContainer'
import ErrorMessage from '../components/errorMessages/ErrorMessage'
import MyKitchenComp from '../components/myKitchen/MyKitchen'
import MyIngredientsComp from '../components/myIngredients/MyIngredients';
import ShoppingListComp from '../components/shoppingList/ShoppingList'
import FavoriteRecipesComp from '../components/favoriteRecipes/FavoriteRecipes'



export default function RouterDirections() {
  return (
    
    <BrowserRouter>
     <UserProvider>
        <Routes>
            <Route exact path="/" element={<ChooseOption/>}/>
            <Route exact path="/home" element={<Home/>}/>
            {/*FINAL PAGES*/}
            <Route exact path="/forgotPassword" element={<ForgotPassword/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
            <Route exact path="/MyKitchen" element={<MyKitchen/>}/>
            <Route exact path="/MyIngredients" element={<MyIngredients/>}/>
            <Route exact path="/ShoppingList" element={<ShoppingList/>}/>
            <Route exact path="/FavouriteRecipes" element={<FavoriteRecipes/>}/>

            {/* COMPONENTS */}
            <Route exact path="/components" element={<Components></Components>} />
            <Route exact path="/components/sidebar" element={<SideBar></SideBar>} />
            <Route exact path="/components/searchbar" element={<SearchBar></SearchBar>} />
            <Route exact path="/components/resume_recipe" element={<ResumeRecipeContainer/>} />
            <Route exact path="/components/Error_login_register" element={<ErrorMessage/>} />
            <Route exact path="/components/myKitchen" element={<MyKitchenComp/>} />
            <Route exact path="/components/myIngredients" element={<MyIngredientsComp/>} />
            <Route exact path="/components/shoppingList" element={<ShoppingListComp/>} />
            <Route exact path="/components/favoriteRecipes" element={<FavoriteRecipesComp/>} />

            
            <Route path='*' element={<Home/>}/>
        </Routes>
     </UserProvider>
    </BrowserRouter>
  );
}