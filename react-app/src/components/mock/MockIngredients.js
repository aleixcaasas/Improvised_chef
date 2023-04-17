import { useEffect, useState } from "react";
import axios from "axios";
import './mock.css';
export default function MockRecipes() {
    //Estat per emmagatzemar les dades obtingudes en la cerca de manera dinàmica
    const [ingredients, setIngredients] = useState([]);
    const [recipesIngredients, setRecipesIngredients] = useState([]);

    //Estat per controlar el que s'escriu en el cercador
    const [nomIngredient, setNomIngredient] = useState("");

    const handleChange = async (e) => {
        setNomIngredient(e.target.value);
        try {
            if (e.target && e.target.value !== null) {
                const response = await axios.post('http://localhost:3000/mock/ingredients/name', {
                    name: e.target.value
                });
                setIngredients(response.data);

                await axios.post("http://localhost:3000/mock/recipes/ingredients", {
                    ingredients: response.data
                })
                    .then(response => {
                        setRecipesIngredients(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                    })
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const peticionsApi = async () => {
            const response = await axios.get("http://localhost:3000/mock/ingredients");
            setIngredients(response.data);

            await axios.post("http://localhost:3000/mock/recipes/ingredients", {
                ingredients: response.data
            })
                .then(response => {
                    setRecipesIngredients(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
        };
        peticionsApi();
    }, []);

    return (
        <div id="mock-container">
            <div className="searchBar">
                <input
                    className="searchBar"
                    value={nomIngredient}
                    placeholder="Cercar ingredients per nom..."
                    onChange={handleChange}
                />
            </div>
            <br />
            <div className="table-container">
                <table className="table ingredients">
                    <thead>
                        <tr>
                            <th>Ingredients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ingredients.length === 0 && (
                                <h3>No matches found!</h3>
                            )
                        }
                        {ingredients && ingredients.map((ingredient) => (
                            <tr>
                                <td>{ingredient.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table className="table recipes">
                    <thead>
                        <tr>
                            <th>Name Recipe</th>
                            <th>Ingredients Recipe</th>
                            <th>Image Recipe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipesIngredients.length === 0 && (
                                <h3>No matches found!</h3>
                            )
                        }
                        {recipesIngredients && recipesIngredients.map((recipeIngredient) => (
                            <tr>
                                <td>{recipeIngredient.title}</td>
                                <td>
                                    {recipeIngredient && recipeIngredient.ingredients.map((ingredient) => (
                                        <div key={ingredient.id}>
                                            {ingredient.name}
                                            <br />
                                        </div>
                                    ))}
                                </td>
                                <td>
                                    <input type="image" src={recipeIngredient.image} width={200} height={200} alt="image" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}