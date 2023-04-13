import { useEffect, useState } from "react";
import axios from "axios";
import './mock.css';
//import { Autocomplete } from "@mui/material";
//import SearchBarSuggestions from "./SearchBarSuggestions";
//import Data from './data.json';

export default function MockRecipes() {
    //Estat per emmagatzemar les dades obtingudes en la cerca de manera dinàmica
    const [recipes, setRecipes] = useState([]);

    //Estat per controlar el que s'escriu en el cercador
    const [nomRecepta, setNomRecepta] = useState("");
    const [ingredients, setIngredients] = useState([]);
    //const [ingredientsRecepta, setIngredientsRecepta] = useState("");

    /* const handleChange1 = async (e) => {
         setIngredients(e.target.value);
         try {
             if(e.target && e.target.value !== null){
                 const response = await axios.post('http://localhost:3000/ingredients', {
                     ingredients: e.target.value
                 });
                 console.log(response.data);
             }
         }
         catch (error) {
             console.error(error);
         }
     }
 */
    const handleChange = async (e) => {
        setNomRecepta(e.target.value);
        try {
            if (e.target && e.target.value !== null) {
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

    /*const handleChange1 = async (e) => {
        console.log(e.target.value);
        setIngredients(e.target.value);
        try {
            if(e.target && e.target.value !== null){
                //Desenvolupar un search pels ingredients
                //NOTA: Intentar que mostri suggerencies en el search i guardar-ho en un array/estat a l'hora de trucar /ingredients

                //Automaticament trucarem a localhost:3000/recipes/ingredients a partir de l'estat dels ingredients que hem cercat anteriorment
                //NOTA: Sempre i quan el estat no sigui null, trucarem sempre a localhost:3000/recipes/ingredients
                /!*else{
                    const response = await axios.post('http://localhost:3000/ingredients', {
                        name: e.target.value
                    });
                    setRecipes(response.data);
                }*!/
                const response = await axios.post('http://localhost:3000/ingredients', {
                    name: e.target.value
                });
                setIngredients(response.data);
            }
        }
        catch (error) {
            console.error(error);
        }
    }*/

    /*const handleChange1 = async (e) => {
        setIngredientsRecepta(e.target.value);
        try {
            if(e.target && e.target.value !== null){
                //Desenvolupar un search pels ingredients
                //NOTA: Intentar que mostri suggerencies en el search i guardar-ho en un array/estat a l'hora de trucar /ingredients

                //Automaticament trucarem a localhost:3000/recipes/ingredients a partir de l'estat dels ingredients que hem cercat anteriorment
                //NOTA: Sempre i quan el estat no sigui null, trucarem sempre a localhost:3000/recipes/ingredients
                else{
                    const response = await axios.post('http://localhost:3000/ingredients', {
                        name: e.target.value
                    });
                    setRecipes(response.data);
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }*/

    useEffect(() => {
        const peticionsApi = async () => {
            await axios.get("http://localhost:3000/recipes")
                .then(response => {
                    setRecipes(response.data);
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
                    value={nomRecepta}
                    placeholder="Cercar receptes per nom..."
                    onChange={handleChange}
                />
            </div>
            <br />
            {/*<SearchBarSuggestions></SearchBarSuggestions>
            <div>
                <input
                    className="searchIngredients"
                    value={ingredientsRecepta}
                    placeholder="Cercar receptes per ingredients..."
                    onChange={handleChange}
                />
            </div>*/}
            {/*<div className="searchBarSuggestions">
                <div className="searchIngredients" >
                    <Autocomplete
                        multiple
                        id="custom-input-demo"
                        options={!ingredients? "Loading..." : ingredients}
                        disableCloseOnSelect
                        getOptionLabel={(option: any) => (option) ? option.Symbol : null}
                        renderOption={(props, option) => (
                            <li {...props}>
                                {option.Symbol}
                            </li>
                        )}
                        //onChange={(event, query: any) => handleWatchlistSearch(query)}
                        //onChange={handleChange1}
                        onInputChange={handleChange1}
                        filterOptions={(x) => x}
                        renderInput={(params) => (
                            <div ref={params.InputProps.ref}>
                                <input type="text" {...params.inputProps} placeholder="Cercar receptes per ingredients..." autoFocus='true' />
                            </div>
                        )}
                    >
                    </Autocomplete>
                </div>
            </div>*/}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Ingredients</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipes.length === 0 && (
                                <h3>No matches found!</h3>
                            )
                        }
                        {recipes && recipes.map((recipe) => (
                            <tr>
                                <td>{recipe.title}</td>
                                <td>
                                    {recipes && recipe.ingredients.map((ingredient) => (
                                        <div key={ingredient.id}>
                                            {ingredient.name}
                                            <br />
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