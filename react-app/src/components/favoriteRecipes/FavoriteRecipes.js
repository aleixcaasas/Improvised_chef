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
                    console.log(response);
                    setRecipes(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, [user]);

    async function deleteRecipt(id){
        try{
            if (user.email !== '') {
                const response = await axios.post('http://localhost:3000/user/removeRecipe', {
                    userId: user.id,
                    recipeId: id
                });
            }
        } catch (error){
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
                    {recipesList.data.map((dict) =>
                        <div className="fav">
                            <div className="recipe">
                                <img className="image" src={dict.image} alt=""></img>
                                <div className="recipe-data">
                                    <li>{dict.title}</li>
                                    <li className="data">{dict.difficulty} to make, it takes {dict.time_cooking}</li>
                                </div>
                                <div className="trashButtonDiv">
                                    <button onClick={() => deleteRecipt(dict.id)} className="trashButton"><BsTrash3></BsTrash3></button>
                                </div>
                            </div>
                        </div>
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