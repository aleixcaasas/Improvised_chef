import React, { useState, useEffect } from "react";
import axios from "axios";
import Resume_recipe from "./Resume_recipe"
import './Resume_recipe.css'
import '../mock/MockRecipes'

import test_recepit from './Receipt_totest.json'

export default function Resume_recipe_container({receiptsJSON}) {
   
    
    
    //AQUI ES EL TEST HARDCODEADO DE LAS RECEPTAS
    //PORFAVRO NO BORRAR ASTA QUE NO TENEMOS EL ENDPOINT
    //LUIGI 
    return (
        <div className="receipt_container">
            {
                //TEST recepit aqui va a ser el JSON del Database
                test_recepit.map((receitp, index ) => (
                    <Resume_recipe 
                        key={receitp.id} 
                        singleReceipts={receitp} 
                        index={index}
                        />))
            }
        </div>
    );

    //ESTO ES EL CODIGO QUE VAMOS A UTILIZAR CUANDO TENEMOS EL END POINT
    /*
    return (
        <div className="receipt_container">
            {
                receiptsJSON.map((receitp) => (<Resume_recipe key={receitp.id} singleReceipts={receitp} />))
            }
        </div>
    );*/
}