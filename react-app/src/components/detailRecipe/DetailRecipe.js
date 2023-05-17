import { useEffect, useRef } from "react";
import "./DetailRecipe.css"
import { MdStars } from 'react-icons/md';
import { getIngredientIcon } from "../IngredientIcons";
import { TiTick } from 'react-icons/ti'
import { TiTimes } from 'react-icons/ti'


export default function DetailRecipe(props) {
    const { infoRecipe } = props;
    let allIngredients = useRef(null);

    useEffect(() => {
        function hasAllIngredients(ingredients){
            return ingredients.every(ingredient => ingredient.hasIt === true);
        }
        allIngredients.current = hasAllIngredients(infoRecipe.ingredients);
    },[infoRecipe]); 

    console.log(infoRecipe)
    return (
        <div className="div-Recipe">
            <div className="general-div">
                <div className="detail-title-div">
                    <MdStars size={40} className="fav-icon" />
                    <h2 className="detail-title">{infoRecipe.title}</h2>
                    <div className="prepareButt-div"><button className="prepareButt" >
                        {allIngredients.current && ("Prepare recipe")}{!allIngredients.current && ("Add all ingredients to shopping list")}</button></div>
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