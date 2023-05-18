import axios from "axios";
import "./DetailRecipe.css"
import { TiTick } from 'react-icons/ti'
import { TiTimes } from 'react-icons/ti'
import { MdStars } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { useEffect, useRef, useState } from "react";
import { getIngredientIcon } from "../IngredientIcons";


export default function DetailRecipe(props) {
    const { infoRecipe } = props;
    const [allIngredients, setAllIngredients] = useState('');
    const [recipeFavorite, setRecipeFavorite] = useState('');
    const [recipesList, setRecipesList] = useState('')
    const [userAPI, setUSerAPI] = useState('');


    useEffect(() => {
        function hasAllIngredients(ingredients) {
            return ingredients.every(ingredient => ingredient.hasIt === true);
        }
        setAllIngredients(hasAllIngredients(infoRecipe.ingredients));
    }, [infoRecipe]);

    useEffect(() => {
        async function isRecipeFavorite(recipeId) {
            try {
                const userBO = await axios.get('http://localhost:3000/user');
                if (userBO.data.email != '') {
                    const response = await axios.post('http://localhost:3000/user/recipes', {
                        userId: userBO.data.id
                    });
                    setUSerAPI(userBO.data);
                    setRecipesList(response.data)
                    const isFavorite = recipesList.some(recipe => recipe.id === recipeId);
                    setRecipeFavorite(isFavorite);
                }
            } catch (error) { 
                console.log(error);
            }
        }
        isRecipeFavorite(infoRecipe.id);
        console.log(recipeFavorite);
    },[infoRecipe])

    return (
        <div className="div-Recipe">
            <div className="general-div">
                <div className="detail-title-div">
                    <MdStars size={40} className="fav-icon" />
                    <h2 className="detail-title">{infoRecipe.title}</h2>
                    <div className="prepareButt-div"><button className="prepareButt" >
                        {allIngredients && ("Prepare recipe")}{!allIngredients && ("Add all ingredients to shopping list")}</button></div>
                </div>

                <div className="three-elements-div">
                    <div className="photo-ingredients-div">
                        <div className="foto-div" style={{ backgroundImage: `url("${infoRecipe.image}")` }} />

                        <div className="detail-ingredients-div">
                            {infoRecipe.ingredients.map((ingredient) =>
                                <div className="ingredient">
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                        {getIngredientIcon(ingredient.name)}
                                        <div className="ingredient-name">{ingredient.name} </div>
                                        {ingredient.hasIt && (
                                            <TiTick size={25} style={{ color: 'var(--green)' }} />
                                        )}
                                        {!ingredient.hasIt && (
                                            <TiTimes size={25} style={{ color: 'var(--red)' }} />
                                        )}
                                    </li>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="detail-description-div">
                        <p>Desctipcio de la recepta</p>
                    </div>
                </div>
            </div>
        </div>
    );

}