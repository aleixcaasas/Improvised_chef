import { useEffect, useRef, useState } from "react";
import "./DetailRecipe.css"
import { MdStars } from 'react-icons/md';
import { getIngredientIcon } from "../IngredientIcons";
import { TiTick } from 'react-icons/ti'
import { TiTimes } from 'react-icons/ti'


export default function DetailRecipe(props) {
    const { infoRecipe } = props;
    const [allIngredients, setAllIngredients] = useState('');


    useEffect(() => {
        function hasAllIngredients(ingredients){
            return ingredients.every(ingredient => ingredient.hasIt === true);
        }
        setAllIngredients(hasAllIngredients(infoRecipe.ingredients));
    },[infoRecipe]); 

    return (
        <div className="div-Recipe">
            <div className="general-div">
                <div className="detail-title-div">
                    <MdStars size={40} className="fav-icon" />
                    <h2 className="detail-title">{infoRecipe.title.toUpperCase()}</h2>
                    <div className="prepareButt-div"><button className="prepareButt" >
                        {allIngredients && ("Prepare recipe")}{!allIngredients && ("Add all ingredients to shopping list")}</button></div>
                </div>

                <div className="three-elements-div">
                    <div className="photo-ingredients-div">
                        <div className="foto-div" style={{ backgroundImage: `url("${infoRecipe.image}")` }} />

                        <div className="detail-ingredients-div">
                            <h4>INGREDIENTS:</h4>
                            <hr className="separator-ingredients"></hr>
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
                        <h4>DESCRIPTION:</h4>
                        <div className="description">
                            <hr className="separator-ingredients"></hr>
                            <div className="details">
                                <p>Difficulty: </p> <a>{infoRecipe.difficulty}</a>
                                <p>Serves: </p> <a>{infoRecipe.serves}</a>
                                <p>Preparation Time: </p> <a>{infoRecipe.time_preparation}</a>
                                <p>Cooking Time: </p> <a>{infoRecipe.time_cooking}</a>
                            </div>
                            <div className="button-link-div"><a href={infoRecipe.self_url}><button className="button-link">Original recipe</button></a></div>
                            <hr className="separator-ingredients"></hr>
                            <p>{infoRecipe.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}