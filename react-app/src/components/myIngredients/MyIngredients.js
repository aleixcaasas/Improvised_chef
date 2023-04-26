

import './MyIngredients.css';

export default function MyIngredients() {
    return(
        <div className="div-myIngridients">
            <div className="div-outBox">                   
                <h2 className="ingredientsTitle">INGREDIENTS LIST</h2>          
                <button className="addButton">Add more ingredients to the list</button>   
                    <div className="div-inBox">
                        <ul>
                            <li>Elemento 1</li>
                            <li>Elemento 2</li>
                            <li>Elemento 3</li>
                        </ul>
                    </div>
            </div>
        </div>
    );
}