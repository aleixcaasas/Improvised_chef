import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function MockComponent(){
    //Estat per emmagatzemar les dades obtingudes en la cerca de manera dinàmica
    const [recipes, setRecipes] = useState([]);

    //Estat per controlar el que s'escriu en el cercador
    const [cercador, setCercador] = useState("");

    const handleChange = async (e) => {
        setCercador(e.target.value);
        try {
            if(e.target && e.target.value !== null){
                const response = await axios.post('http://localhost:3000/recipes/title', {
                    title: e.target.value
                });
                setRecipes(response.data);
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        const peticionsApi = async ()=>{
            await axios.get("http://localhost:3000/recipes")
                .then(response=>{
                    setRecipes(response.data);
                })
                .catch(error=>{
                    console.error(error);
                })
        };
        peticionsApi();
    }, []);

    return (
        <div>
            <div className="container">
                <input
                    className="form-control inputCercador"
                    value={cercador}
                    placeholder="Nom recepta o ingredients"
                    onChange={handleChange}
                />
            </div>

            <div className="table-responsive">
                <table className="table table-sm table-bordered">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Ingredients</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recipes && recipes.map((recipe)=>(
                        <tr>
                            <td>{recipe.title}</td>
                            <td>
                                {recipes && recipe.ingredients.map((ingredient)=>(
                                    <div key={ingredient.id}>
                                        {ingredient.name}
                                        <br />
                                    </div>
                                ))}
                            </td>
                            <td>
                                <input type="image" src={recipe.image} width={200} height={200} alt="image" />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}