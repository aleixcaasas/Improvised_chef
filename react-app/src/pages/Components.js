import React from 'react'
import { NavLink } from 'react-router-dom'

function Components() {
	return (
		<div>
			<ul>
				<li><NavLink to="/components/accounts" className="navegationLink">Login and Register</NavLink></li>
				<li><NavLink to="/components/searchbar" className="navegationLink">Search Bar</NavLink></li>
				<li><NavLink to="/components/sidebar" className="navegationLink">Side Bar</NavLink></li>
				<li><NavLink to="/components/resume_recipe" className="navegationLink">Resume Recipe</NavLink></li>
				<li><NavLink to="/components/Error_login_register" classname="navegationLink">Error mesage</NavLink></li>
				<li><NavLink to="/components/myKitchen" classname="navegationLink">My Kitchen</NavLink></li>
				<li><NavLink to="/components/myIngredients" classname="navegationLink">My Ingredients</NavLink></li>
				<li><NavLink to="/components/shoppingList" classname="navegationLink">Shopping List</NavLink></li>
				<li><NavLink to="/components/favoriteRecipes" classname="navegationLink">Favorite Recipes</NavLink></li>
			</ul>

		</div>
	)
}

export default Components