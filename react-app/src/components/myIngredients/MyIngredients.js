import axios from 'axios';
import classNames from 'classnames';
import { BsTrash } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import '../shoppingList/CSS-IngredientsList.css';
import { getIngredientIcon } from '../IngredientIcons';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import SearchIngredient from '../searchIngredient/SearchIngredient';

export default function MyIngredients() {

    const [call, setCall] = useState({ clicked: false })
    const [ingredients, setIngredients] = useState(null)
    const [userAPI, setUSerAPI] = useState('');

    useEffect(() => {
        const getInfo = async () => {
            try {
                const userBO = await axios.get('http://localhost:3000/user');
                if (userBO.data.email !== '') {
                    const response = await axios.post('http://localhost:3000/user/ingredients', {
                    });
                    setUSerAPI(userBO.data);
                    setIngredients(response);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, []);

    async function deleteIngredient(id, name) {
        let ingEliminated = {};
        let newIngredientList = Object.assign({}, ingredients);
        try {
            if (userAPI.email !== '') {
                ingEliminated = await axios.post('http://localhost:3000/user/removeIngredient', {
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
            const response = await axios.post('http://localhost:3000/user/ingredients', {});
            setIngredients(response);
        }

    }

    function getIngredientsList(ingredientsList) {

        if (!ingredientsList.data) {
            return <div>Loading...</div>;
        }

        if (ingredientsList.data.length === 0) {
            return (
                <div className="ingredients-no-list" id='no_list_ingredients'>
                    You does not have ingredients in the list yet!
                    <h5>ADD MORE INGREDIENTS</h5>
                    <BsFillArrowDownCircleFill size={40} style={{ color: 'var(--green)' }} />
                </div>
            );
        } else {
            return (
                <ul className='ingredients-list'>
                    {ingredientsList.data.map((ingredient) => (
                        <>
                            <li className='ingredient-li'>
                                <div className='ingredientIcon'>{getIngredientIcon(ingredient.name)}</div>
                                <div className='ingredientName'>{ingredient.name}</div>
                                <div className='trashButt-div'>
                                    <BsTrash size={40} onClick={() => deleteIngredient(ingredient.id, ingredient.name)} />
                                </div>
                            </li>
                            {
                                ingredients.data[ingredients.data.length - 1] !== ingredient && (
                                    <hr className="separador" />
                                )
                            }
                        </>
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
                <h2 className="ingredientsTitle">INGREDIENTS LIST</h2>
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
                <button className="addButton" onClick={() => { clicked('false') }}>Add more ingredients to the list</button>
            </div>
            {call.clicked && (
                <div>
                    <div className='popUpIngredients'>
                        <SearchIngredient list='ingredients' clicked={clicked} updateScreen={updateScreen}></SearchIngredient>
                    </div>
                </div>
            )}
        </div>
    );
}