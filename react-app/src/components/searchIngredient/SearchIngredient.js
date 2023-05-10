import axios from "axios";
import './searchIngredient.css';
import { debounce } from 'lodash';
import { TiTick } from 'react-icons/ti'
import { useState, useContext } from "react";
import { RiAddCircleLine } from 'react-icons/ri';
import { UserContext } from '../../pages/globalValue';
import { getIngredientIcon } from '../IngredientIcons';


export default function SearchIngredient(props) {

    const [setSearching] = useState(false);
    const [response, setResponse] = useState('');
    const { user } = useContext(UserContext);


    const handleChange = async (nomIngredient) => {
        if (nomIngredient === '') {
            setSearching(false);
            setResponse('');
        } else {
            try {
                const res = await axios.post('http://localhost:3000/user/searchIngredients', {
                    name: nomIngredient,
                    userId: user.id,
                    list: props.list
                });
                setResponse(res);
            }
            catch (error) {
                console.error(error);
            }
        }
    }

    const debouncedSearch = debounce((e) => {
        handleChange(e.target.value)
    }, 800);

    const afegirIngredient = async (name, id) => {
        try {
            if (props.list === 'ingredients'){
                const result = await axios.post('http://localhost:3000/user/addIngredient', { userId: user.id, ingredientId: id, ingredientName: name });
                let res = Object.assign({}, response);
                for (let j = 0; j < response.data.length; j++) {
                    if (result.data.name === response.data[j].name) {
                        res.data[j].repeated = true;
                    }
                }
                setResponse(res);
            }else if (props.list === 'shopping'){
                const result = await axios.post('http://localhost:3000/user/addShoppingList', { userId: user.id, ingredientId: id, ingredientName: name });
                let res = Object.assign({}, response);
                for (let j = 0; j < response.data.length; j++) {
                    if (result.data.name === response.data[j].name) {
                        res.data[j].repeated = true;
                    }
                }
                setResponse(res);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="search-ing-popup">
            <input
                className="searchIng"
                //value={cercador}
                placeholder={"Search Ingredient"}
                onChange={(e) => debouncedSearch(e)}
            />
            <div className="ingredients-div">
                {response && (  //response.data (això es el que va en comptes de ingredientsJSON) 
                    response.data.map((ingredient) =>
                        <div className="ingredient">
                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                {//<MdFastfood size={30} className="icon"></MdFastfood>
                                    getIngredientIcon(ingredient.name)}
                                <div className="ingredient-name">{ingredient.name} </div>
                                {!ingredient.repeated && (
                                    <RiAddCircleLine size={25} className="add-button" onClick={() => afegirIngredient(ingredient.name, ingredient.id, response.data)} ></RiAddCircleLine>
                                )}
                                {ingredient.repeated && (
                                    <TiTick size={25} className="add-button"></TiTick>
                                )}
                            </li>
                        </div>
                    ))
                }
                {!response && (
                    <div className="no-ingredients-searched">
                        Write an ingredient name to add into the list!
                    </div>
                )
                }
            </div>
            <button className="exitButton" onClick={() => { props.clicked("true"); props.updateScreen('update')}}>EXIT</button>
        </div>
    )
}
