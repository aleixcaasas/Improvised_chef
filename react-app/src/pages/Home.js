import { UserContext } from './globalValue';
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar"
import SearchBar from "../components/searchBar/SearchBar"
import Recipes from "../components/resumeRecipe/Resume_recipe_container"


export default function Home(){

    const { user, setUser } = useContext(UserContext);
    const navigation = useNavigate();

    const handleLogOut = async () => {
        //await axios.post('http://localhost:3700/logout', {user});
        setUser({email:''});
        navigation("/demo");
    }

    return (
        <div className="home">
            {
                user?.email && (
                    <>
                    <SideBar/>
                    <SearchBar/>
                    <Recipes/>
                    </>
                )
            }
        </div>    
     );
}