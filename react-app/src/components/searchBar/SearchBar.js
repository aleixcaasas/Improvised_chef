import './SearchBar.css';
import axios from "axios";
import { useState } from 'react';
import { debounce } from 'lodash';


export default function SearchBar({handleSearch}) {
    
    const [buttonClicked, setButtonClicked] = useState(false);

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
                    alert('Add ingredients to your list to search recipes with them!');
                }
            }
        }else{
            setButtonClicked(false);
            handleSearch([]);
        }
    }

    return (
        <div className="searchBar-div"> 
            <input
                className="searchBar1"
                placeholder={"Search by recipe name"}
                onChange={(e) => debouncedSearch(e)}
            />
            <button className={`CookButton ${buttonClicked ? "clicked" : ""}`} onClick={() => searchRecipesWithIngr()} value="Create user">{buttonClicked ? "Stop searching with my ingredients" : "Cook with my ingredients"} </button>
            
        </div>
    );
}

