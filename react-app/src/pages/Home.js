import axios from "axios";
import { UserContext } from './globalValue';
import React, { useContext, useState, useEffect } from "react";
import SideBar from "../components/sideBar/SideBar"
import SearchBar from "../components/searchBar/SearchBar"
import Resume_recipe_container from "../components/resumeRecipe/Resume_recipe_container"
import Register from "../components/register/Register";
import LoginEmail from "../components/login/LoginEmail";
import '../components/login/login.css';

import { debounce } from 'lodash';


export default function Home() {

    const { user } = useContext(UserContext);


    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    //To dealy the the call of the API 
    const debouncedSearch = debounce(handleSearch, 800);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.post('http://localhost:3000/recipes/title', {
                    title: searchTerm
                });
                setRecipes(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRecipes();
    }, [searchTerm]);


    return (
        <div className="home">
            {
                user?.email && (
                    <>
                        <SideBar />
                        <SearchBar onSearch={debouncedSearch} />
                        <Resume_recipe_container receiptsJSON={recipes} />
                    </>
                )}
            {
                !user?.email && (
                    <>
                        <div className="page_login">
                            <div className="container">
                                <input type="checkbox" id="chk" aria-hidden="true" />
                                <LoginEmail />
                                <Register />
                            </div>
                        </div>
                    </>
                )
            }


        </div>
    );
}