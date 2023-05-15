import React from "react";
import './Resume_recipe.css'
import ResumeRecipe from "./ResumeRecipe"


export default function Resume_recipe_container({ receiptsJSON, obrirRecepta }) {

    return (
        <div className="receipt_container">
            {
                //TEST recepit aqui va a ser el JSON del Database
                receiptsJSON.map((receitp, index) => (
                    <ResumeRecipe
                        obrirRecepta={obrirRecepta}
                        key={receitp.id}
                        singleReceipts={receitp}
                        index={index}
                    />))
            }
        </div>
    );


}