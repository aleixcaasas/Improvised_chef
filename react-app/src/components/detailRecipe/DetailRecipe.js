import axios from "axios";
import "./DetailRecipe.css";
import { AiFillStar } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { AiOutlineStar } from 'react-icons/ai';
import { TiTick, TiTimes } from 'react-icons/ti';
import { getIngredientIcon } from "../IngredientIcons";
import { RiEmotionLaughLine, RiEmotionNormalLine, RiEmotionUnhappyLine, RiDashboard3Line, RiRestaurant2Line } from 'react-icons/ri';

export default function DetailRecipe(props) {
    const { infoRecipe } = props;
    const [allIngredients, setAllIngredients] = useState('');
    const [recipeFavorite, setRecipeFavorite] = useState('');
    const [recipePrepared, setRecipePrepared] = useState(false);
    const [userAPI, setUserAPI] = useState(null);

    useEffect(() => {
        function hasAllIngredients(ingredients) {
            return ingredients.every(ingredient => ingredient.hasIt === true);
        }
        setAllIngredients(hasAllIngredients(infoRecipe.ingredients));
    }, [infoRecipe]);

    useEffect(() => {
        async function getUser(){
            if (userAPI === null) {
                const userBO = await axios.get('http://localhost:3000/user');
                setUserAPI(userBO.data);
            }
        }
        getUser();
    }, [userAPI])

    useEffect(() => {
        async function isRecipeFavorite(recipeId) {
            try {
                if (userAPI !== null) {
                    const response = await axios.post('http://localhost:3000/user/recipes', {
                    });
                    const recipeList = response.data;
                    for (let i = 0; i < recipeList.length; i++) {
                        if (recipeList[i].id === recipeId) {
                            setRecipeFavorite(true);
                            break;
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
        isRecipeFavorite(infoRecipe.id);
    }, [infoRecipe, recipeFavorite])

    async function addFavRecipe(idRecipe) {
        try {
            if (userAPI !== null) {
                const response = await axios.post('http://localhost:3000/user/addRecipe', {
                    recipeId: idRecipe
                });
                if (response.status === 201) {
                    setRecipeFavorite(true);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function removeFavRecipe(idRecipe) {
        try {
            if (userAPI !== null) {
                const response = await axios.post('http://localhost:3000/user/removeRecipe', {
                    recipeId: idRecipe
                });
                if (response.status === 200) {
                    setRecipeFavorite(false);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    function setFavIcon(recipeId) {
        if (recipeFavorite) {
            return <AiFillStar size={40} className="fav-icon" onClick={() => removeFavRecipe(recipeId)} />;
        } else {
            return <AiOutlineStar size={40} className="fav-icon" onClick={() => addFavRecipe(recipeId)} />;
        }
    }

    async function addIngredientsRecipe(idRecipe) {
        try {
            if (userAPI !== null) {
                const response = await axios.post('http://localhost:3000/user/addRecipeIngredients', {
                    recipeId: idRecipe
                });
                if (response.status === 200) {
                    alert("Ingredients added to the shopping list");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function removeIngredientsRecipe(idRecipe) {
        try {
            if (userAPI !== null) {
                const response = await axios.post('http://localhost:3000/user/removeRecipeIngredients', {
                    recipeId: idRecipe
                });
                if (response.status == 200) {
                    alert("Ingredients removed from the ingredients list");
                    setRecipePrepared(true);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const openRecipeLink = () => {
        window.open(infoRecipe.self_url, '_blank');
    };

    function set_difficulty(difficulty) {
        return (
            <>
                {difficulty === "Easy" ? (
                    <>
                        <RiEmotionLaughLine size={20} />
                    </>
                ) : difficulty === "More effort" ? (
                    <>
                        <RiEmotionNormalLine size={20} />
                    </>
                ) : difficulty === "A challange" ? (
                    <>
                        <RiEmotionUnhappyLine size={20} />
                    </>
                ) : null}
            </>
        );
    }

    return (
        <div className="div-Recipe">
            <div className="general-div">
                <div className={!recipePrepared ? "detail-title-div" : "detail-title-div centered"}>
                    {!recipePrepared && (
                        setFavIcon(infoRecipe.id))
                    }
                    <h2 className="detail-title">{infoRecipe.title.toUpperCase()}</h2>
                    <div className="prepareButt-div">
                        {allIngredients && !recipePrepared &&
                            <button className="prepareButt" onClick={() => removeIngredientsRecipe(infoRecipe.id)}>
                                Prepare recipe
                            </button>
                        }{!allIngredients && !recipePrepared &&
                            <button className="prepareButt" onClick={() => addIngredientsRecipe(infoRecipe.id)}>
                                Add all ingredients to shopping list
                            </button>
                        }
                    </div>
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
                        {!recipePrepared && (
                            <>
                                <h4>RECIPE DETAILS:</h4>
                                <hr className="separator-ingredients"></hr>
                                <div className="description">
                                    <div>
                                        <p className="details-p">{set_difficulty(infoRecipe.difficulty)}<a className="details">  Difficulty: </a> <a>  {infoRecipe.difficulty}</a></p>
                                        <p className="details-p"><RiRestaurant2Line size={20} /><a className="details">Serves: </a> <a>{infoRecipe.serves}</a></p>
                                        <p className="details-p"><RiDashboard3Line size={20} /><a className="details">Preparation Time: </a> <a>{infoRecipe.time_preparation}</a></p>
                                        <p className="details-p"><RiDashboard3Line size={20} /><a className="details">Cooking Time: </a> <a>{infoRecipe.time_cooking}</a></p>
                                    </div>
                                    <button className="button-link" onClick={openRecipeLink}>Original recipe</button>
                                </div>
                            </>
                        )}
                        < h4 > DESCRIPTION:</h4>
                        <hr className="separator-ingredients"></hr>
                        <div className="description">
                            <p>{infoRecipe.description}</p>
                        </div>
                        <h4>INSTRUCTIONS:</h4>
                        <hr className="separator-ingredients"></hr>
                        <div className="description">
                            <ol className="instructions-list">
                                {infoRecipe.method.map(instruction => (
                                    <li>
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}