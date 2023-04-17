import { useEffect, useState } from "react";
import { MdSearch } from 'react-icons/md';
import axios from "axios";
import './SearchBar.css';


export default function SearchBar({ onSearch }) {
    //Estat per emmagatzemar les dades obtingudes en la cerca de manera dinàmica
    const [recipes, setRecipes] = useState([]);
 
    //Estat per controlar el que s'escriu en el cercador
    const [receipt_to_search, setSearch] = useState("");
    const handleChange = async (e) => {
        setSearch(e.target.value);
        try {
            onSearch(e.target.value)
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
        <div className="searchBar-div">
            <input
                className="searchBar"
                value={receipt_to_search}
                placeholder={"Search by recipe name"}
                onChange={handleChange}
            />
            <button className="CookButton" type="submit" value="Create user"> Cook with my ingredients</button>
        </div>
    );
}

