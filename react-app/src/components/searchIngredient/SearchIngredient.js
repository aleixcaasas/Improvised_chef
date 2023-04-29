import axios from "axios";
import { debounce } from 'lodash';
import './searchIngredient.css';
import { useState } from "react";



export default function SearchIngredient(props) {

    const [searching, setSearching] = useState(false);
    const [response, setResponse] = useState('')

    const handleChange = async (nomIngredient) => {
        if (nomIngredient === ''){
            //aqui podirme posar fer peticio per ingredients aleatoris
            setSearching(false);
            setResponse('');
        } else {
            setSearching(true)
            try {
                    setResponse(await axios.post('http://localhost:3000/user/searchIngredients', { //fer el endpoint de search ingredients!!
                        name: nomIngredient
                     })); 
                //handleSearch(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    const debouncedSearch = debounce((e) =>{
        handleChange(e.target.value)
    }, 800);
    
    const afegirIngredient = async (name) => {
        console.log(name)
    }

    return (
        <div className="search-ing-popup">
            <input
                className="searchBar1"
                //value={cercador}
                placeholder={"Search Ingredient"}
                onChange={(e) => debouncedSearch(e)}
            />
            <div className="ingredients-div">
                { response && (
                    response.data.map((name, id) =>
                        <li onClick={afegirIngredient}>{name}{id}</li>  
                    ))
                }
                { !response && (
                    <div className="no-ingredients-searched">
                        <h3>NO</h3>
                        <h3>INGREDIENTS</h3>
                        <h3>SEARCHED</h3>
                    </div>
                    )
                }
            </div>
            <button className="exitButton" onClick={() => {props.clicked("true");}}>EXIT</button>
        </div>
    )
}
