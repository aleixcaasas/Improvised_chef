
import ingredients from './ingredients.json' ;
import './MyIngredients.css';
import { GiFruitBowl } from 'react-icons/gi';
import {BsTrash} from 'react-icons/bs';

export default function MyIngredients() {
    return(
        <div className="div-myIngridients">
            <div className="div-outBox">                   
                <h2 className="ingredientsTitle">INGREDIENTS LIST</h2>          
                <button className="addButton">Add more ingredients to the list</button>   
                    <div className="div-inBox">
                        <ul>
                            {ingredients.map((ingredient) => (
                                
                                <li><GiFruitBowl></GiFruitBowl> 
                                    <label>{ingredient.name}</label>
                                    <BsTrash></BsTrash>    
                                </li>
                            ))}    
                        </ul>
                    </div>
            </div>
        </div>
    );
}