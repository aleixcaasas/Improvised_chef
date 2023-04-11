import './Receipt.css'
import { useState } from 'react';



export default function Receipt ({singleReceipts}){

    const title = singleReceipts.title; 
    const image = singleReceipts.image;
    const time = singleReceipts.time_preparation;
    const cookTime = singleReceipts.time_cooking;
    const difficulty = singleReceipts.difficulty;
    
    

    
    return (
        <div className="Receipt">
            <div className="image_receipt" style={{backgroundImage: `url("${image}")`}}></div>
            <div className="content_recepit">
                <h2>{title}</h2>
                <h4>Preparation time: {time}</h4>
                <h4>Cooking time: {cookTime}</h4>
                <h4>Difficulty: {difficulty}</h4>
                <button className = "recepit_detail_button"> + </button>
            </div>
        </div>
    );
}