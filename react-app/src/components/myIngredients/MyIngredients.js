
import ingredients from './ingredients.json' ;
import './MyIngredients.css';
import SearchIngredient from '../searchIngredient/SearchIngredient';
import { useState } from 'react';
import classNames from 'classnames';
import { GiFruitBowl } from 'react-icons/gi';
import {BsTrash} from 'react-icons/bs';

export default function MyIngredients() {
    const [call, setCall] = useState({ clicked: false })

    const clicked = async (message) => {
        if(message === 'true'){
            setCall({clicked : false})
        }
        else{
            setCall({clicked : true})
        }
    }

    const myIngredientsClass = classNames('div-myIngridients', { 'dark': call.clicked });
    const outBox = classNames('div-outBox', { 'dark': call.clicked });

    return(
        <>  
            <div className={myIngredientsClass}>   
                <div className={outBox}>                 
                    <h2 className="ingredientsTitle">INGREDIENTS LIST</h2>          
                    <button className="addButton" onClick={() => {clicked('false')}}>Add more ingredients to the list</button>   
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
                {call.clicked &&(
                        <div className='popUpIngBack'>
                            <div className='popUpIngredients'>
                                <SearchIngredient clicked={clicked}></SearchIngredient>
                            </div>
                        </div>
                        
                    )}
            </div>        
        </>
        
    );
}