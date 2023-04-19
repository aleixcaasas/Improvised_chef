import axios from "axios";
import { UserContext } from './globalValue';
import React, { useContext, useState, useEffect } from "react";
import SideBar from "../components/sideBar/SideBar"
import SearchBar from "../components/searchBar/SearchBar"
import Resume_recipe_container from "../components/resumeRecipe/Resume_recipe_container"
import Register from "../components/register/Register";
import LoginEmail from "../components/login/LoginEmail";
import '../components/login/login.css';
import ErrorMessage from '../components/errorMessages/ErrorMessage'

import { debounce } from 'lodash';


export default function Home() {

    const { user } = useContext(UserContext);

    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [error2, setError2] = useState({error:false, comment:""});

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const clicked = (message) => {
        if(message === "true"){
            setError2({error:false, comment:""});
        }
      };

    //To dealy the the call of the API 
    const debouncedSearch = debounce(handleSearch, 800);

    const errorM = (message) => {
        if(message.error){
            setError2({error:true, comment:message.comment});
            <ErrorMessage errorMessage={message.comment} clicked={clicked}></ErrorMessage>
        }
        
      };

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.post('http://localhost:3000/mock/recipes/title', {
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
                                <LoginEmail errorM={errorM}/>
                                <Register errorM={errorM}/>
                            </div>
                            {error2.error && (
                                <div className="pep">
                                    <ErrorMessage errorMessage={error2.comment} clicked={clicked} ></ErrorMessage>
                                </div>
                            )}
                        </div>
                    </>
                )
            }
        

        </div>
    );
}