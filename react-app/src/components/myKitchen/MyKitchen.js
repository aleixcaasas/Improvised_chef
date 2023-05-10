import './MyKitchen.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from '../../pages/globalValue';
import { useEffect, useContext, useState} from "react";
import { getIngredientIcon } from '../iconsIngridients/getIconsIngridient.js';



export default function MyKitchen(){

    const { user } = useContext(UserContext);
    const [list, setList] = useState(null)
    

    useEffect(() => {
        const getInfo = async () => {
            try {
                // eslint-disable-next-line
                if (user.email !== '') {
                    const response = await axios.post('http://localhost:3000/user/myKitchen', {
                        userId: user.id
                    });
                    setList(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, [user]);

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
        } else if (recipesList.length > 0 && recipesList.length < 6 ){
            return (
                <div className="container_list">
                    {recipesList.map((recipe, index) => (
                        <div className='recipe_pic_item' key={index}>
                            <div
                                className='recipe_image'
                                style={{ backgroundImage: `url("${recipe.image}")` }}>
                            </div>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div className="container_list">
                    {recipesList.map((recipe, index) => (
                        <div className='recipe_pic_item' key={index}>
                            <div
                                className='recipe_image'
                                style={{ backgroundImage: `url("${recipe.image}")` }}>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }


    };
    
    return (
        
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
        
        );
        

}

