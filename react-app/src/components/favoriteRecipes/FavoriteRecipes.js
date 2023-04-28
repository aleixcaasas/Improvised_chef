import recipes from "./Test_receipt.json";
import "./FavoriteRecipes.css";
export default function FavoriteRecipes() {
    const name = recipes.title;
    return (
        <>
            <div className="container">
                <p>My favourite recipes</p>
                <div className="list-container">
                    <li>
                        {name}
                    </li>
                </div>
            </div>
        </>
    )    
}