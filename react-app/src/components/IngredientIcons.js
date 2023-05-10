import React from 'react';
import { IoIosWater } from "react-icons/io";
import { GiHerbsBundle, GiBroccoli, GiMilkCarton, GiChiliPepper, GiMeat, GiSlicedBread, GiOpenedFoodCan, GiDoubleFish, GiShinyApple } from "react-icons/gi"

const size_icon=30;
const ingredientGroups = {
    'spices': <GiChiliPepper size={size_icon} style={{ color: '#a51409' }} />,
    'herbs': <GiHerbsBundle size={size_icon} style={{ color: '#837f28' }} />,
    'vegetables': <GiBroccoli size={size_icon} style={{ color: '#837f28' }} />,
    'fruits': <GiShinyApple size={size_icon} style={{ color: '#97BE11' }} />,
    'dairy': <GiMilkCarton size={size_icon} style={{ color: '#fafafa' }} />,
    'meat': <GiMeat size={size_icon} style={{ color: '#AA3C3B' }} />,
    'seafood': <GiDoubleFish size={size_icon} style={{ color: '#31c4a0' }} />,
    'baking': <GiSlicedBread size={size_icon} style={{ color: '#eec07b' }} />,
    'liquids': <IoIosWater size={size_icon} style={{ color: '#CDBA99' }} />,
    'miscellaneous': <GiOpenedFoodCan size={size_icon} style={{ color: '539165' }} />
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

  
export function getIngredientIcon(name) {
    const lowercaseName = name.toLowerCase();
    for (const [category, ingredients] of Object.entries(ingredientCategories)) {
        if (ingredients.some((ingredient) => lowercaseName.includes(ingredient))) {
            return ingredientGroups[category];
        }
    }
    return ingredientGroups.miscellaneous;
}
