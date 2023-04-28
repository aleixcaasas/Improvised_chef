import recipes from "./Test_receipt.json";
import "./FavoriteRecipes.css";
export default function FavoriteRecipes() {
    return (
        <>
            <div className="container">
                <p>My favourite recipes</p>
                <div className="list-container">
                    <ul>
                        {recipes.map((dict) => <li>{dict.title}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )    
}