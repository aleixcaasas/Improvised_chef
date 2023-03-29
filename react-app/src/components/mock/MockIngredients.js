import { useEffect, useState } from "react";
import axios from "axios";

export default function MockRecipes(){
    //Estat per emmagatzemar les dades obtingudes en la cerca de manera dinàmica
    const [ingredients, setIngredients] = useState([]);

    //Estat per controlar el que s'escriu en el cercador
    const [nomIngredient, setNomIngredient] = useState("");

    const handleChange = async (e) => {
        setNomIngredient(e.target.value);
        try {
            if(e.target && e.target.value !== null){
                const response = await axios.post('http://localhost:3000/ingredients/name', {
                    name: e.target.value
                });
                setIngredients(response.data);
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        const peticionsApi = async ()=>{
            await axios.get("http://localhost:3000/ingredients")
                .then(response=>{
                    setIngredients(response.data);
                })
                .catch(error=>{
                    console.error(error);
                })
        };
        peticionsApi();
    }, []);

    return (
        <div id="mock-container">
            <div className="searchBar">
                <input
                    className="searchName"
                    value={nomIngredient}
                    placeholder="Cercar ingredients per nom..."
                    onChange={handleChange}
                />
            </div>
            <br/>
            <div>
                <table className="recipesName">
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>ID</th>
                        <th>Recipes ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        ingredients.length===0 && (
                            <h3>No matches found!</h3>
                        )
                    }
                    {ingredients && ingredients.map((ingredient)=>(
                        <tr>
                            <td>{ingredient.name}</td>
                            <td>{ingredient.id}</td>
                            <td>
                                {ingredient && ingredient.recipes_in.map((recipe)=>(
                                    <div key={recipe.id}>
                                        {recipe}
                                        <br />
                                        <br />
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}