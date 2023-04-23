import axios from "axios";
import { UserContext } from './globalValue';
import React, { useContext, useState, useEffect } from "react";
import SideBar from "../components/sideBar/SideBar"
import Register from "../components/register/Register";
import LoginEmail from "../components/login/LoginEmail";
import SearchBar from "../components/searchBar/SearchBar"
import ErrorMessage from '../components/errorMessages/ErrorMessage'
import ResumeRecipeContainer from "../components/resumeRecipe/ResumeRecipeContainer"
import '../components/login/login.css';


export default function Home() {

    const { setUser } = useContext(UserContext);
    const [userLOCAL, setUserLOCAL] = useState({ email: '', id: '' });

    const [recipes, setRecipes] = useState([]);
    const [error2, setError2] = useState({ error: false, comment: "" });

    const handleSearch = (searchedReceips) => {
        if(searchedReceips.length !== 0){
            setRecipes(searchedReceips);
        }
        else{
            setRecipes([]);
        }
    };

    const clicked = (message) => {
        if (message === "true") {
            setError2({ error: false, comment: "" });
        }
    };

    //To dealy the the call of the API 

    const errorM = (message) => {
        if (message.error) {
            setError2({ error: true, comment: message.comment });
            <ErrorMessage errorMessage={message.comment} clicked={clicked}></ErrorMessage>
        }

    };

    const leaveSession = (message) => {
        if(message){
            setUserLOCAL(null)
        }
    };

    useEffect(() => {
        if (recipes.length === 0) {
            const fetchRecipes = async () => {
                try {
                    const response = await axios.get('http://localhost:3000/recipes/random');
                    setRecipes(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchRecipes();
        }
    },[recipes]);

    useEffect(() => {
        const setLocalStorageUser = async () => {
            const loggedUserJSON = window.localStorage.getItem('usuariLogged')
            if(loggedUserJSON){
                const user = await JSON.parse(loggedUserJSON)
                setUserLOCAL(user) //aquí el user conté el email i la id
                setUser(user)
            }
        }
        setLocalStorageUser()
    },[])

    return (
        <div className="home">
            { 
                userLOCAL?.email && (
                    <>
                        <SideBar leaveSession={leaveSession}/>
                        <SearchBar handleSearch={handleSearch} />
                        <ResumeRecipeContainer receiptsJSON={recipes} />
                    </>
                )}
            {
                !userLOCAL?.email && (
                    <>
                        <div className="page_login">
                            <div className="container">
                                <input type="checkbox" id="chk" aria-hidden="true" />
                                <LoginEmail errorM={errorM} />
                                <Register errorM={errorM} />
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