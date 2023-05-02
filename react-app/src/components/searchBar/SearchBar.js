import './SearchBar.css';
import axios from "axios";
import { debounce } from 'lodash';


export default function SearchBar({handleSearch}) {
    
    const handleChange = async (value) => {
        if (value.size == 0){
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
        handleChange(e.target.value)
    }, 800);

    return (
        <div className="searchBar-div"> 
            <input
                className="searchBar1"
                //value={cercador}
                placeholder={"Search by recipe name"}
                onChange={(e) => debouncedSearch(e)}
            />
            <button className="CookButton" type="submit" value="Create user"> Cook with my ingredients</button>
            
        </div>
    );
}

