import React from 'react'
import { NavLink } from 'react-router-dom'

function Components() {
	return (
		<div>
			<ul>
				<li><NavLink to="/components/myKitchen" classname="navegationLink">My Kitchen</NavLink></li>
				<li><NavLink to="/components/detailRecipe" classname="navegationLink">Detail Recipe</NavLink></li>
				<li><NavLink to="/components/userProfile" classname="navegationLink">User Profile</NavLink></li>
			</ul>

		</div>
	)
}

export default Components