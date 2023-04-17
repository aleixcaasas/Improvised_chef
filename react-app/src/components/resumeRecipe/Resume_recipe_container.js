import React, { useState } from "react";
import axios from "axios";
import Resume_recipe from "./Resume_recipe"
import './Resume_recipe.css'
import '../mock/MockRecipes'

export default function Resume_recipe_container({receiptsJSON}) {

    return (
        <div className="receipt_container">
            {
                receiptsJSON.map((receitp) => (<Resume_recipe key={receitp.id} singleReceipts={receitp} />))
            }
        </div>
    );
}