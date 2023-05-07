import axios from 'axios';
import './ShoppingList.css';
import classNames from 'classnames';
import { BsTrash } from 'react-icons/bs';
import { UserContext } from '../../pages/globalValue';
import { useEffect, useContext, useState } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { getIngredientIcon } from '../myKitchen/MyKitchen';
import SearchIngredient from '../searchIngredient/SearchIngredient';

export default function MyIngredients() {

    const [call, setCall] = useState({ clicked: false })
    const { user } = useContext(UserContext);
    const [ingredients, setIngredients] = useState(null)

    useEffect(() => {
        const getInfo = async () => {
            try {
                // eslint-disable-next-line
                if (user.email != '') {
                    const response = await axios.post('http://localhost:3000/user/shoppingList', {
                        userId: user.id
                    });
                    setIngredients(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, []);

    async function deleteIngredient(id, name) {
        let newIngredientList = Object.assign({}, ingredients);
        let ingEliminated = {};
        try {
            if (user.email !== '') {
                ingEliminated = await axios.post('http://localhost:3000/user/removeShoppingList', {
                    userId: user.id,
                    ingredientId: id,
                    ingredientName: name
                });
                for (let j = 0; j < ingredients.data.length; j++) {
                    if (ingEliminated.data.name === ingredients.data[j].name) { //quan trobi el ingredient l'elimina
                        newIngredientList.data.splice(j, 1);
                    }
                }
                setIngredients(newIngredientList);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const clicked = async (message) => {
        if (message === 'true') {
            setCall({ clicked: false })
        }
        else {
            setCall({ clicked: true })
        }
    }

    const updateScreen = async (data) => {
        if (data === 'update') {
            const response = await axios.post('http://localhost:3000/user/shoppingList', {
                userId: user.id
            });
            setIngredients(response);
        }
    }

    function getIngredientsList(ingredientsList) {

        if (!ingredientsList.data) {
            return <div>Loading...</div>;
        }

        if (ingredientsList.data.length === 0) {
            return (
                <div className="container_list" id='no_list'>
                    You does not have ingredients in the list yet!
                    <h5>ADD MORE INGREDIENTS</h5>
                    <BsFillArrowDownCircleFill size={40} style={{ color: 'var(--green)' }} />
                </div>
            );
        } else {
            return (
                <ul className='ingredients-list'>
                    {ingredientsList.data.map((ingredient) => (
                        <li className='ingredient-li'>
                            {getIngredientIcon(ingredient.name)}
                            <div>{ingredient.name}</div>
                            <BsTrash size={30} onClick={() => deleteIngredient(ingredient.id, ingredient.name)}></BsTrash>
                        </li>
                    ))}
                </ul>
            )
        }

    }

    const myIngredientsClass = classNames('div-myIngridients', { 'dark': call.clicked });
    const outBox = classNames('div-outBox', { 'dark': call.clicked });

    return (
        <div className={myIngredientsClass}>
            <div className={outBox}>
                <h2 className="ingredientsTitle">SHOPPING LIST</h2>
                <button className="addButton" onClick={() => { clicked('false') }}>Add more ingredients to the list</button>
                <div className="div-inBox">
                    {!ingredients?.data && (
                        <div className="container_list" id='no_list'>
                            Loading Recipes...
                        </div>
                    )}
                    {ingredients?.data && (
                        getIngredientsList(ingredients)
                    )}
                </div>
            </div>
            {call.clicked && (
                <div>
                    <div className='popUpIngredients'>
                        <SearchIngredient list='shopping' clicked={clicked} updateScreen={updateScreen}></SearchIngredient>
                    </div>
                </div>
            )}
        </div>
    );
}