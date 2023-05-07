import axios from "axios";
import "./FavoriteRecipes.css";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs"
import { UserContext } from '../../pages/globalValue';
import { useEffect, useContext, useState } from "react";

export default function FavoriteRecipes() {

    const { user } = useContext(UserContext);
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        const getInfo = async () => {
            try {
                // eslint-disable-next-line
                if (user.email != '') {
                    const response = await axios.post('http://localhost:3000/user/recipes', {
                        userId: user.id
                    });
                    setRecipes(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, []);

    async function deleteRecipt(id) {
        let recipeEiminated = {};
        let newRecipeList = Object.assign({}, recipes);
        try {
            if (user.email !== '') {
                recipeEiminated = await axios.post('http://localhost:3000/user/removeRecipe', {
                    userId: user.id,
                    recipeId: id
                });
            }
            for (let j = 0; j < recipes.data.length; j++) {
                if (recipeEiminated.data.id === recipes.data[j].id) { //quan trobi el ingredient l'elimina
                    newRecipeList.data.splice(j,1);
                }
            }
            setRecipes(newRecipeList)
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
                <div className="container_list" id='no_list'>
                    You does not have favorite recipes yet!
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
                                    <img className="image" src={recipe.image} alt=""></img>
                                    <div className="recipe-data">
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
                <p>MY FAVOURITE RECIPES</p>
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