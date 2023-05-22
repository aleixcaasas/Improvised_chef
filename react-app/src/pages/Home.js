import axios from "axios";
import '../components/login/login.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar"
import Register from "../components/register/Register";
import LoginEmail from "../components/login/LoginEmail";
import SearchBar from "../components/searchBar/SearchBar"
import ErrorMessage from '../components/errorMessages/ErrorMessage'
import ResumeRecipeContainer from "../components/resumeRecipe/ResumeRecipeContainer"


export default function Home() {

    const [userLOCAL, setUserLOCAL] = useState({ email: '', id: '' });
    const [recipes, setRecipes] = useState([]);
    const [loginError, setloginError] = useState({ error: false, comment: "" });
    const [oldRecipes, setOldRecipes] = useState('');
    const navigation = useNavigate();

    // ERROR MESSAGES FUNCTIONS
    const clicked = (message) => {
        if (message === "true") {
            setloginError({ error: false, comment: "" });
        }
    };

    const obrirRecepta = async (info) => {
        const response = await axios.post(`http://localhost:3000/recipe/detail`, { recipeId: info.id });
        const infoRecipe = response.data;
        navigation(`/recipe/${info.formatedTitle}`, { state: { infoRecipe } });
    }

    const errorM = (message) => {
        if (message.error) {
            setloginError({ error: true, comment: message.comment });
            <ErrorMessage errorMessage={message.comment} clicked={clicked}></ErrorMessage>
        }
    };

    const handleSearch = (searchedReceips) => {
        if (searchedReceips.length !== 0) {
            setOldRecipes(recipes);
            setRecipes(searchedReceips);
        }
        else {
            setRecipes(oldRecipes)
        }
    };

    useEffect(() => {
        if (recipes.length === 0) {
            const fetchRecipes = async () => {
                try {
                    if (!recipes.data) {
                        const response = await axios.get('http://localhost:3000/recipes/random');
                        setRecipes(response.data);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            fetchRecipes();
        }
    }, [recipes]);

    useEffect(() => {
        const setLocalStorageUser = async () => {
            const userActual = await axios.get('http://localhost:3000/user');
            if (userActual) {
                setUserLOCAL(userActual.data); //aquí el user conté el email i la id
            }
        }
        setLocalStorageUser()
    }, [])

    return (
        <div className="home">
            {
                userLOCAL?.email && (
                    <>
                        <SideBar />
                        <SearchBar handleSearch={handleSearch} />
                        <ResumeRecipeContainer receiptsJSON={recipes} obrirRecepta={obrirRecepta} />
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
                            {loginError.error && (
                                <div className="pep">
                                    <ErrorMessage errorMessage={loginError.comment} clicked={clicked} ></ErrorMessage>
                                </div>
                            )}
                        </div>
                    </>
                )
            }
        </div>
    );
}