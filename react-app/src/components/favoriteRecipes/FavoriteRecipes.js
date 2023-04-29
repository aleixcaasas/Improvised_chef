import recipes from "./Test_receipt.json";
import "./FavoriteRecipes.css";
import {BsTrash3} from "react-icons/bs"
export default function FavoriteRecipes() {
    return (
        <>
            <div className="container-recipes">
                <p>MY FAVOURITE RECIPES</p>
                <div className="list-container">
                    <ul className="favourites">
                        {recipes.map((dict) => 
                        <div className="fav">
                            <div className="recipe">
                                <img className="image" src={dict.image}></img>
                                <div className="recipe-data">
                                    <li>{dict.title}</li>
                                    <li className="data">{dict.difficulty} to make, it takes {dict.time_cooking}</li>
                                </div>
                                <div className="trashButtonDiv">
                                    <button onClick="" className="trashButton"><BsTrash3></BsTrash3></button>
                                </div>
                            </div>
                        </div>   
                        )}
                    </ul>
                </div>
            </div>
        </>
    )    
}