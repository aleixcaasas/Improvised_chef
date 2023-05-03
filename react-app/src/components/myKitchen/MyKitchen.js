import './MyKitchen.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosWater } from "react-icons/io";
import { UserContext } from '../../pages/globalValue';
import { useEffect, useContext, useState } from "react";
import ingredientCategories from './IngridientsCategories.json';
import { GiHerbsBundle, GiBroccoli, GiMilkCarton, GiChiliPepper, GiMeat, GiSlicedBread, GiOpenedFoodCan, GiDoubleFish } from "react-icons/gi"

export default function MyKitchen() {

    const { user } = useContext(UserContext);
    const [list, setList] = useState(null)

    useEffect(() => {
        const getInfo = async () => {
            try {
                console.log(user.id);
                // eslint-disable-next-line
                if (user.email != '') {
                    const response = await axios.post('http://localhost:3000/user/myKitchen', {
                        userId: user.id
                    });
                    console.log(response);
                    setList(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
        console.log(list);
    }, [user]);


    const size_icon = 20;
    const color_icon = 'rgb(150, 150, 150)'
    const ingredientGroups = {
        'spices': <GiChiliPepper size={size_icon} style={{ color: color_icon }} />,
        'herbs': <GiHerbsBundle size={size_icon} style={{ color: color_icon }} />,
        'vegetables': <GiBroccoli size={size_icon} style={{ color: color_icon }} />,
        'fruits': <GiBroccoli size={size_icon} style={{ color: color_icon }} />,
        'dairy': <GiMilkCarton size={size_icon} style={{ color: color_icon }} />,
        'meat': <GiMeat size={size_icon} style={{ color: color_icon }} />,
        'seafood': <GiDoubleFish size={size_icon} style={{ color: color_icon }} />,
        'baking': <GiSlicedBread size={size_icon} style={{ color: color_icon }} />,
        'liquids': <IoIosWater size={size_icon} style={{ color: color_icon }} />,
        'miscellaneous': <GiOpenedFoodCan size={size_icon} style={{ color: color_icon }} />
    };


    function getIngredientIcon(name) {
        const lowercaseName = name.toLowerCase();
        for (const [category, ingredients] of Object.entries(ingredientCategories)) {
            if (ingredients.some((ingredient) => lowercaseName.includes(ingredient))) {
                return ingredientGroups[category];
            }
        }
        return ingredientGroups.miscellaneous;
    }

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
        if (list.data[2].length == 0) {
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
                <div className="container_list">
                    {list.data[2].map((recipe, index) => (
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
    }

    return (
        <div className='div-my_kitchen'>
            <div className='my_kitchen'>
                <Link to="/MyIngredients">
                    <div className="containers_myKitchen">
                        <h3>MY INGREDIENTS</h3>
                        {!list?.data && (
                            <>
                                <div className="container_list" id='no_list'>
                                    Loading Ingredients...
                                </div>
                            </>
                        )}
                        {list?.data && (
                            getList(list.data[0], "/MyIngredients")
                        )}
                    </div>
                </Link>

                <Link to="/FavoriteRecipes">
                    <div className="containers_myKitchen">
                        <h3>FAVORITE RECIPES</h3>
                        {!list?.data && (
                            <div className="container_list" id='no_list'>
                                Loading Recipes...
                            </div>)}
                        {list?.data && (
                            getRecipes(list.data[2])
                        )}
                    </div>
                </Link>

                <Link to="/ShoppingList">
                    <div className="containers_myKitchen">
                        <h3>SHOPPING LIST</h3>
                        {!list?.data && (
                            <>
                                <div className="container_list" id='no_list'>
                                    Loading Ingredients...
                                </div>
                            </>
                        )}
                        {list?.data && (
                            getList(list.data[1], "/ShoppingList")
                        )}
                    </div>
                </Link>
            </div >
        </div >
    );
}      