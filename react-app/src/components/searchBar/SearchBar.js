import { useEffect, useState } from "react";
import { MdSearch } from 'react-icons/md';
import { TbIcons, TbMenu2 } from 'react-icons/tb';
import './SearchBar.css';


export default function SearchBar() {
    //Estat per emmagatzemar les dades obtingudes en la cerca de manera dinàmica
    /* const [recipes, setRecipes] = useState([]);
 
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
     }, []);*/


    return (
        <div className="searchBar-div">

            <div className="searchBar-divNo360"  /*per resolucions majors que 360px*/ > 
                <TbMenu2 className="menuIcon" size={43} />
                <input
                    className="searchBar1"
                    //value={cercador}
                    placeholder={"Search by recipe name"}
                //onChange={handleChange}
                />
                <button className="CookButton" type="submit" value="Create user"> Cook with my ingredients</button>
            </div>

            <div className="searchBar-divYes3601" /*per resolucions majors que 360px*/>
                <TbMenu2 className="menuIcon" size={43} />
                <button className="CookButton" type="submit" value="Create user"> Cook with my ingredients</button>

            </div>

            <div className="searchBar-divYes3602" /*per resolucions majors que 360px*/>
                <input
                    className="searchBar1"
                    //value={cercador}
                    placeholder={"Search by recipe name"}
                    //onChange={handleChange}
                />
            </div>
        </div>
    );
}

