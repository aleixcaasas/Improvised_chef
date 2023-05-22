import axios from "axios";
import "./FavoriteRecipes.css";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export default function FavoriteRecipes() {

    const [recipes, setRecipes] = useState(null)
    const [userAPI, setUserAPI] = useState('');

    const navigation = useNavigate();

    async function recipeDetails(title, id) {
        let formatedTitle = title.replace(/\s+/g, '-');
        formatedTitle = formatedTitle.toLowerCase();
        obrirRecepta({ formatedTitle, id });
    }

    const obrirRecepta = async (info) => {
        const response = await axios.post(`http://localhost:3000/recipe/detail`, { recipeId: info.id });
        const infoRecipe = response.data;
        navigation(`/recipe/${info.formatedTitle}`, { state: { infoRecipe } });
    }

    useEffect(() => {
        async function getUser(){
            if (userAPI === null) {
                const userBO = await axios.get('http://localhost:3000/user');
                setUserAPI(userBO.data);
            }
        }
        getUser();
    }, [userAPI])

    useEffect(() => {
        async function getInfo() {
            try {
                if (userAPI !== null) {
                    const response = await axios.post('http://localhost:3000/user/recipes', {});
                    setRecipes(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, []);

    async function deleteRecipt(id) {
        let newFavoriteRecipes = Object.assign({}, recipes);
        let recipeEliminated = {};
        try {
            if (userAPI !== null) {
                recipeEliminated = await axios.post('http://localhost:3000/user/removeRecipe', {
                    recipeId: id
                });
                for (let j = 0; j < recipes.data.length; j++) {
                    if (recipeEliminated.data.id === recipes.data[j].id) { //quan trobi la recepta l'elimina
                        newFavoriteRecipes.data.splice(j, 1);
                    }
                }
                setRecipes(newFavoriteRecipes);
            }

        } catch (error) {
            console.log(error)
        }
    }

    function getRecipes(recipesList) {
        if (!recipesList.data) {
            return <div>Loading...</div>;
        }

        if (recipesList.data.length === 0) {
            return (
                <div className="ingredients-no-list" id='no_list_recipes'>
                    You don't have favorite recipes yet!
                    <h5>EXPLORE NEW RECIPES</h5>
                    <Link to="/home">
                        <button id='button_round'>+</button>
                    </Link>
                </div>
            );
        } else {
            return (
                <ul className="favourites">
                    {recipesList.data.map((recipe) =>
                        <>
                            <div className="fav">
                                <div className="recipe">
                                    <div className="div-image" onClick={() => recipeDetails(recipe.title, recipe.id)}>
                                        <img className="image" src={recipe.image} alt=""></img>
                                    </div>
                                    <div className="recipe-data" onClick={() => recipeDetails(recipe.title, recipe.id)}>
                                        <li className="title">{recipe.title}</li>
                                        <li className="data">{recipe.difficulty} to make, it takes {recipe.time_cooking}</li>
                                    </div>
                                    <div className="trashButtonDiv">
                                        <button onClick={() => deleteRecipt(recipe.id)} className="trashButton"><BsTrash3></BsTrash3></button>
                                    </div>
                                </div>
                            </div>
                            {recipesList.data[recipesList.data.length - 1] !== recipe && (
                                <hr className="separador" />
                            )}
                        </>
                    )}
                </ul>
            );
        }
    }

    return (
        <div className="div-favRecipes">
            <div className="container-recipes">
                <h2 className="favouriteTitle">MY FAVORITE RECIPES</h2>
                <div className="list-container">
                    {!recipes?.data && (
                        <div className="container_list" id='no_list'>
                            Loading Recipes...
                        </div>
                    )}
                    {recipes?.data && (
                        getRecipes(recipes)
                    )}
                </div>
            </div>
        </div>
    )
}