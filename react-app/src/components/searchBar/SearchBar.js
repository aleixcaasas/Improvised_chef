import './SearchBar.css';
import axios from "axios";
import { useState } from 'react';
import { debounce } from 'lodash';
import ErrorMessage from '../errorMessages/ErrorMessage';


export default function SearchBar({handleSearch}) {
    
    const [buttonClicked, setButtonClicked] = useState(false);
    const [errorIngredients, setError] = useState({comentari: ''})
    const handleChange = async (value) => {
        if (value.size === 0){
            handleSearch([]);
        } else {
            try {
                let response = await axios.post('http://localhost:3000/recipes/name', {
                    name: value
                });
                handleSearch(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    const clicked = (message) => {
        if (message === "true") {
            setError({ commentari: '' });
        }
    };
 
    //To dealy the the call of the API 
    const debouncedSearch = debounce((e) =>{
        handleChange(e.target.value);
    }, 800);

    async function searchRecipesWithIngr(){
        if (!buttonClicked){
            try {
                const userBO = await axios.get('http://localhost:3000/user');
                let response = await axios.post('http://localhost:3000/user/searchWithIngredients', {
                    userId: userBO.data.id
                });
                handleSearch(response.data);
                setButtonClicked(true);
            }
            catch (error) {
                if (error.response.data === 'No ingredients found!'){
                    setError({comentari: 'Add ingredients to your list to search recipes with them!'})
                    console.log(errorIngredients);
                }
            }
        }else{
            setButtonClicked(false);
            handleSearch([]);
        }
    }

    return (
        <div className="searchBar-div"> 
            {errorIngredients?.comentari &&(
                <div className="errorNoIngredients">
                    <ErrorMessage errorMessage={'Add ingredients to your list for recipe search!'} clicked={clicked}/>
                </div>
            )}
            <input
                className="searchBar1"
                placeholder={"Search by recipe name"}
                onChange={(e) => debouncedSearch(e)}
            />
            <button className={`CookButton ${buttonClicked ? "clicked" : ""}`} onClick={() => searchRecipesWithIngr()} value="Create user">{buttonClicked ? "Stop searching with my ingredients" : "Cook with my ingredients"} </button>
            
        </div>
    );
}

