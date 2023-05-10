import axios from "axios";
import '../components/login/login.css';
import { UserContext } from './globalValue';
import SideBar from "../components/sideBar/SideBar"
import Register from "../components/register/Register";
import LoginEmail from "../components/login/LoginEmail";
import SearchBar from "../components/searchBar/SearchBar"
import { useContext, useState, useEffect } from "react";
import ErrorMessage from '../components/errorMessages/ErrorMessage'
import ResumeRecipeContainer from "../components/resumeRecipe/ResumeRecipeContainer"


export default function Home() {

    const { setUser } = useContext(UserContext);
    const [userLOCAL, setUserLOCAL] = useState({ email: '', id: '' });

    const [recipes, setRecipes] = useState([]);
    const [loginError, setloginError] = useState({ error: false, comment: "" });

    // ERROR MESSAGES FUNCTIONS
    const clicked = (message) => {
        if (message === "true") {
            setloginError({ error: false, comment: "" });
        }
    };

    const errorM = (message) => {
        if (message.error) {
            setloginError({ error: true, comment: message.comment });
            <ErrorMessage errorMessage={message.comment} clicked={clicked}></ErrorMessage>
        }

    };


    const handleSearch = (searchedReceips) => {
        if (searchedReceips.length !== 0) {
            setRecipes(searchedReceips);
        }
        else {
            setRecipes([]);
        }
    };


    const leaveSession = (message) => {
        if (message) {
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
    }, [recipes]);

    useEffect(() => {
        const setLocalStorageUser = async () => {
            const loggedUserJSON = window.localStorage.getItem('usuariLogged')
            if (loggedUserJSON) {
                const user = await JSON.parse(loggedUserJSON)
                setUserLOCAL(user) //aquí el user conté el email i la id
                setUser(user)
            }
        }
        setLocalStorageUser()
    }, [])

    return (
        <div className="home">
            {
                userLOCAL?.email && (
                    <>
                        <SideBar leaveSession={leaveSession} />
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