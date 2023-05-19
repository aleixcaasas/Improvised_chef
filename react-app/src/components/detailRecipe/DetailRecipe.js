import { useEffect, useRef, useState } from "react";
import "./DetailRecipe.css"
import { MdStars } from 'react-icons/md';
import { getIngredientIcon } from "../IngredientIcons";
import { TiTick, TiTimes } from 'react-icons/ti'
import { RiEmotionLaughLine, RiEmotionNormalLine, RiEmotionUnhappyLine, RiDashboard3Line, RiRestaurant2Line } from 'react-icons/ri'





export default function DetailRecipe(props) {
    const { infoRecipe } = props;
    const [allIngredients, setAllIngredients] = useState('');


    useEffect(() => {
        function hasAllIngredients(ingredients){
            return ingredients.every(ingredient => ingredient.hasIt === true);
        }
        setAllIngredients(hasAllIngredients(infoRecipe.ingredients));
    },[infoRecipe]);
    
    function set_difficulty(difficulty) {
        return (
          <>
            {difficulty === "Easy" ? (
                <>
                <RiEmotionLaughLine size={20}/>
                </>
            ) : difficulty === "More effort" ? (
                <>
                <RiEmotionNormalLine size={20}/>
                </>
            ) : difficulty === "A challange" ? (
                <>
                <RiEmotionUnhappyLine size={20}/>  
                </>
            ) :null}
          </>
        );
      }

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
                            <div>
                                <p className="details-p">{set_difficulty(infoRecipe.difficulty)}<a className="details">  Difficulty: </a> <a>  {infoRecipe.difficulty}</a></p>
                                <p className="details-p"><RiRestaurant2Line size={20}/><a className="details">Serves: </a> <a>{infoRecipe.serves}</a></p>
                                <p className="details-p"><RiDashboard3Line size={20}/><a className="details">Preparation Time: </a> <a>{infoRecipe.time_preparation}</a></p>
                                <p className="details-p"><RiDashboard3Line size={20}/><a className="details">Cooking Time: </a> <a>{infoRecipe.time_cooking}</a></p>
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