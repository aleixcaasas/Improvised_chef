import React from "react";
import ResumeRecipe from "./ResumeRecipe"
import './Resume_recipe.css'
import '../mock/MockRecipes'


export default function Resume_recipe_container({ receiptsJSON }) {

    return (
        <div className="receipt_container">
            {
                //TEST recepit aqui va a ser el JSON del Database
                receiptsJSON.map((receitp, index) => (
                    <ResumeRecipe
                        key={receitp.id}
                        singleReceipts={receitp}
                        index={index}
                    />))
            }
        </div>
    );


}