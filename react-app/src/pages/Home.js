import { UserContext } from './globalValue';
import React, { useContext } from "react";
import SideBar from "../components/sideBar/SideBar"
import SearchBar from "../components/searchBar/SearchBar"
import Recipes from "../components/resumeRecipe/Resume_recipe_container"


export default function Home() {

    const { user } = useContext(UserContext);

    return (
        <div className="home">
            {
                user?.email && (
                    <>
                        <SideBar />
                        <SearchBar />
                        <Recipes />
                    </>
                )
            }
        </div>
    );
}