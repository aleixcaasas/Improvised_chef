import React from "react";
import Sidebar from "../components/sideBar/SideBar";
import FavoriteRecipes from "../components/favoriteRecipes/FavoriteRecipes";

export default function FavoriteRecipesPage() {
    return (
        <div className="page">
            <Sidebar/>
            <FavoriteRecipes/>
        </div>
    );

}