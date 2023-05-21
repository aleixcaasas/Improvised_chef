import React from 'react'
import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import Profile from '../pages/Profile'
import MyKitchen from '../pages/MyKitchen'
import ShoppingList from '../pages/ShoppingList'
import MyIngredients from '../pages/MyIngredients'
import FavoriteRecipes from '../pages/FavoriteRecipes'
import ForgotPassword from '../components/login/ForgotPassword'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function RouterDirections() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/forgotPassword" element={<ForgotPassword />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route exact path="/MyKitchen" element={<MyKitchen />} />
				<Route exact path="/MyIngredients" element={<MyIngredients />} />
				<Route exact path="/ShoppingList" element={<ShoppingList />} />
				<Route exact path="/FavoriteRecipes" element={<FavoriteRecipes />} />
				<Route exact path="/recipe/:title" element={<Recipe />} />

				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}