import './MyKitchen.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIngredientIcon } from '../IngredientIcons';


export default function MyKitchen() {

    const [list, setList] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            try {
                // eslint-disable-next-line
                const userBO = await axios.get('http://localhost:3000/user');
                if (userBO.data.email !== '') {
                    const response = await axios.post('http://localhost:3000/user/myKitchen', {
                        userId: userBO.data.id
                    });
                    setList(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, []);

    function getList(listIngredient, path) {
        if (!listIngredient) {
            return <div>Loading...</div>;
        }

        const length = listIngredient.length;
        if (length > 0) {
            return (
                <div className="container_list">
                    {listIngredient.map((ingredientList, index) => (
                        <div className='Ingredient_Icon' key={index}>
                            {getIngredientIcon(ingredientList.name)}
                        </div>
                    ))}
                </div>
            );
        } else if (length === 0) {
            return (
                <div className="container_list" id='no_list'>
                    There are no ingredients in your list!
                    <h5>ADD SOME INGREDIENTS</h5>
                    <Link to={path}>
                        <button id='button_round'>+</button>
                    </Link>
                </div>
            );
        }
    }

    function getRecipes(recipesList) {
        if (recipesList.length === 0) {
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
                <div className="container_list_myrecepit">
                    {recipesList.map((recipe, index) =>
                        <>
                            <div className='recipe_item' key={index} >
                                <div
                                    className='recipe_image'
                                    style={{ backgroundImage: `url("${recipe.image}")` }}>
                                </div>
                                <div className="recipe_data_myKitchen">
                                    <p>{recipe.title}</p>
                                </div>

                            </div>

                            {recipesList[recipesList.length - 1] !== recipe && (
                                <hr className="separador" />
                            )}

                        </>

                    )}
                </div>
            )
        }


    };

    return (
        <div className='div-my_kitchen'>
            <div className='my_kitchen'>

                <div className="containers_myKitchen">
                    <h3>MY INGREDIENTS</h3>
                    <Link to="/MyIngredients">
                        {!list?.data && (
                            <div className="container_list" id='no_list'>
                                Loading Ingredients...
                            </div>
                        )}
                        {list?.data && (
                            getList(list.data[0], "/MyIngredients")
                        )}
                    </Link>
                </div>

                <div className="containers_myKitchen">
                    <h3>FAVORITE RECIPES</h3>
                    <Link to="/FavoriteRecipes">
                        {!list?.data && (
                            <div className="container_list" id='no_list'>
                                Loading Recipes...
                            </div>
                        )}
                        {list?.data && (
                            getRecipes(list.data[2])
                        )}
                    </Link>
                </div>

                <div className="containers_myKitchen">
                    <h3>SHOPPING LIST</h3>
                    <Link to="/ShoppingList">

                        {!list?.data && (
                            <div className="container_list" id='no_list'>
                                Loading Ingredients...
                            </div>
                        )}
                        {list?.data && (
                            getList(list.data[1], "/ShoppingList")
                        )}
                    </Link>
                </div>
            </div>
        </div>

    );


}

