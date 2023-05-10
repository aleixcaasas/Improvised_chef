import React from 'react';
import { IoIosWater } from "react-icons/io";
import { GiHerbsBundle, GiBroccoli, GiMilkCarton, GiChiliPepper, GiMeat, GiSlicedBread, GiOpenedFoodCan, GiDoubleFish } from "react-icons/gi"

const color_icon = ['539165', '609966', '3C6255','3C6255'];

const size_icon=30;
const ingredientGroups = {
    'spices': <GiChiliPepper size={size_icon} />,
    'herbs': <GiHerbsBundle size={size_icon} style={{ color: color_icon[0] }} />,
    'vegetables': <GiBroccoli size={size_icon} style={{ color: color_icon[1] }} />,
    'fruits': <GiBroccoli size={size_icon} style={{ color: color_icon[2] }} />,
    'dairy': <GiMilkCarton size={size_icon} style={{ color:color_icon[3]}} />,
    'meat': <GiMeat size={size_icon} style={{ color: color_icon[0]}} />,
    'seafood': <GiDoubleFish size={size_icon} style={{ color: color_icon[1]}} />,
    'baking': <GiSlicedBread size={size_icon} style={{ color: color_icon[2] }} />,
    'liquids': <IoIosWater size={size_icon} style={{ color: color_icon[3] }} />,
    'miscellaneous': <GiOpenedFoodCan size={size_icon} style={{ color: color_icon[0] }} />
};

const ingredientCategories= {
    "spices": ["salt", "pepper", "cumin", "paprika"],
    "herbs": ["basil", "oregano", "parsley", "thyme"],
    "vegetables": ["tomato", "carrot", "onion", "celery"],
    "fruits": ["banana", "apple", "orange", "grape"],
    "dairy": ["milk", "cheese", "yogurt", "butter"],
    "meat": ["beef", "pork", "chicken", "lamb"],
    "seafood": ["shrimp", "salmon", "tuna", "crab"],
    "baking": ["flour", "sugar", "baking powder", "baking soda"],
    "liquids": ["water", "oil", "vinegar", "broth", "honey"],
    "miscellaneous": []
}

function ColoredIcon({ Icon, color }) {
    return <Icon size={30} style={{ color: `#${color}` }} />;
}


  
export function getIngredientIcon(name) {
    const lowercaseName = name.toLowerCase();
    const randomColorIndex = Math.floor(Math.random() * color_icon.length);
    const randomColor = color_icon[randomColorIndex];
   
    for (const [category, ingredients] of Object.entries(ingredientCategories)) {
        if (ingredients.some((ingredient) => lowercaseName.includes(ingredient))) {
            const Icon = ingredientGroups[category];
            return <Icon></Icon>;
        }
      }
      
    const Icon = ingredientGroups.miscellaneous;
    
    return Icon;
}


