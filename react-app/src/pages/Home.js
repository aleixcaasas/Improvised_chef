import axios from "axios";
import { UserContext } from './globalValue';
import React, { useContext, useState, useEffect } from "react";
import SideBar from "../components/sideBar/SideBar"
import Register from "../components/register/Register";
import LoginEmail from "../components/login/LoginEmail";
import SearchBar from "../components/searchBar/SearchBar"
import ErrorMessage from '../components/errorMessages/ErrorMessage'
import Resume_recipe_container from "../components/resumeRecipe/Resume_recipe_container"
import '../components/login/login.css';

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