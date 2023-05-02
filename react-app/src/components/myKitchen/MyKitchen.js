import { Link } from "react-router-dom";
import recipes from './Test_receipt.json';
import myIngridients from './Test_ingridients_myIngridient.json';
import myShoppingList from './Test_ingridients_ShoppingList.json';
import ingredientCategories from './IngridientsCategories.json';
/*import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';*/

import { IoIosWater } from "react-icons/io";
import { GiHerbsBundle, GiBroccoli, GiMilkCarton, GiChiliPepper, GiMeat, GiSlicedBread, GiOpenedFoodCan, GiDoubleFish } from "react-icons/gi"


import './MyKitchen.css'

export default function MyKitchen() {

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

    function getList(listIntgridient) {

        const lenght = listIntgridient.length;
        if (lenght > 0) {
            return (
                <div className="container_list">
                    {listIntgridient.map((ingridient, index) => (
                        <div className='Ingridient_Icon'>
                            {getIngredientIcon(ingridient.name)}
                        </div>
                    ))}
                </div>
            )
        } else if (lenght === 0) {
            return (
                <div className="container_list" id='no_list'>
                    There are no ingridients in your list!
                    <h5>ADD SOME INGRIDIENTS</h5>
                    <button id='button_round'>+</button>
                </div>
            )
        }
    }



    /*<Slider dots={false} infinite={true} slidesToShow={3} slidesToScroll={1}>*/

    return (

        <div className='div-my_kitchen'>
            <div className='my_kitchen'>
                <Link to="/MyIngredients">
                    <div className="containers_myKitchen">
                        <h3>MY INGREDIENTS</h3>
                        {getList(myIngridients)}
                    </div>
                </Link>

                <Link to="/FavoriteRecipes">
                    <div className="containers_myKitchen">
                        <h3>FAVORITE RECIPES</h3>
                        <div className="container_list">
                            {recipes.map((recipe, index) => (
                                <div className='recipe_pic_item'>
                                    <div
                                        className='recipe_image'
                                        style={{ backgroundImage: `url("${recipe.image}")` }}>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Link>

                <Link to="/ShoppingList">
                    <div className="containers_myKitchen">
                        <h3>SHOPPING LIST</h3>
                        {getList(myShoppingList)}
                    </div>
                </Link>

            </div>

        </div>
    )
}