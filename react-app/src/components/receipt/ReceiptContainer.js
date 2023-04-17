import React, { useState } from "react";
import Receipt from "./Receipt"
import './Receipt.css'

export default function ReceiptContainer() {


    const receipts = [
        {
            "title": "Aubergine ragu",
            "description": "This veggie ragu is full of silky aubergine, spices and juicy flavour. It\u2019s great with pasta, in a lasagne or shakshukaHeat the oven to 200C/180C fan/gas 6. Put the aubergine on a large baking sheet and drizzle with the olive oil. Season well, then toss to coat. Roast for 1 hr until golden and tender. Will keep chilled for up to two days.Heat a glug of olive oil in a large saucepan or casserole, then tip in the onions, carrots and celery. Fry gently for 20 mins over a medium heat, stirring often.Add the garlic and spices, stirring for a couple of minutes. Add the tomato pur\u00e9e and mix well to combine. Pour in the wine and simmer for a couple of minutes until most of the liquid has been absorbed. Tip in the tomatoes and 400ml water (or if using canned tomatoes, use 200ml water).Bring the ragu to the boil, then reduce the heat to a gentle simmer and leave to cook over a low-medium heat for 50 mins, stirring occasionally. Mix in the roasted aubergine. Can be frozen for up to three months. Defrost in the fridge overnight before reheating.Use your gift card to cook our incredible Antipasti Pasta recipe!",
            "ingredients": [
                {
                    "id": 0,
                    "name": "aubergines",
                    "quantity": 3.0,
                    "unit": "No unit",
                    "orig": "3 aubergines, cut into 4-5cm pieces"
                },
                {
                    "id": 1,
                    "name": "olive oil",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tbsp olive oil"
                },
                {
                    "id": 2,
                    "name": "red onions",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 red onions, thinly sliced"
                },
                {
                    "id": 3,
                    "name": "carrots",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 carrots, chopped"
                },
                {
                    "id": 4,
                    "name": "celery sticks",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 celery sticks, chopped"
                },
                {
                    "id": 5,
                    "name": "cloves",
                    "quantity": 4.0,
                    "unit": "g",
                    "orig": "4 garlic cloves, thinly sliced"
                },
                {
                    "id": 6,
                    "name": "ground coriander",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tsp ground coriander"
                },
                {
                    "id": 7,
                    "name": "cumin seeds",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tbsp cumin seeds"
                },
                {
                    "id": 8,
                    "name": "fennel seeds",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tsp fennel seeds"
                },
                {
                    "id": 9,
                    "name": "tomato pure",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tbsp tomato pur\u00e9e"
                },
                {
                    "id": 10,
                    "name": "red or white wine",
                    "quantity": 4.0,
                    "unit": "ml",
                    "orig": "130ml red or white wine"
                },
                {
                    "id": 11,
                    "name": "fresh mixed tomatoes or x g cans chopped tomatoes",
                    "quantity": 12.0,
                    "unit": "g",
                    "orig": "750g fresh mixed tomatoes or 2 x 400g cans chopped tomatoes"
                }
            ],
            "method": [
                "Heat the oven to 200C/180C fan/gas 6. Put the aubergine on a large baking sheet and drizzle with the olive oil. Season well, then toss to coat. Roast for 1 hr until golden and tender. Will keep chilled for up to two days.",
                "Heat a glug of olive oil in a large saucepan or casserole, then tip in the onions, carrots and celery. Fry gently for 20 mins over a medium heat, stirring often.",
                "Add the garlic and spices, stirring for a couple of minutes. Add the tomato pur\u00e9e and mix well to combine. Pour in the wine and simmer for a couple of minutes until most of the liquid has been absorbed. Tip in the tomatoes and 400ml water (or if using canned tomatoes, use 200ml water).",
                "Bring the ragu to the boil, then reduce the heat to a gentle simmer and leave to cook over a low-medium heat for 50 mins, stirring occasionally. Mix in the roasted aubergine. Can be frozen for up to three months. Defrost in the fridge overnight before reheating."
            ],
            "difficulty": "Easy",
            "time_preparation": "10 mins",
            "time_cooking": "1 hr and 15 mins",
            "serves": "Serves 4",
            "self_url": "https://www.bbcgoodfood.com/premium/aubergine-ragu",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/09/Aubergine-ragu-9e6445a.jpg?quality=90&resize=556,505",
            "id": 0
        }, {
            "title": "Aubergine ragu",
            "description": "This veggie ragu is full of silky aubergine, spices and juicy flavour. It\u2019s great with pasta, in a lasagne or shakshukaHeat the oven to 200C/180C fan/gas 6. Put the aubergine on a large baking sheet and drizzle with the olive oil. Season well, then toss to coat. Roast for 1 hr until golden and tender. Will keep chilled for up to two days.Heat a glug of olive oil in a large saucepan or casserole, then tip in the onions, carrots and celery. Fry gently for 20 mins over a medium heat, stirring often.Add the garlic and spices, stirring for a couple of minutes. Add the tomato pur\u00e9e and mix well to combine. Pour in the wine and simmer for a couple of minutes until most of the liquid has been absorbed. Tip in the tomatoes and 400ml water (or if using canned tomatoes, use 200ml water).Bring the ragu to the boil, then reduce the heat to a gentle simmer and leave to cook over a low-medium heat for 50 mins, stirring occasionally. Mix in the roasted aubergine. Can be frozen for up to three months. Defrost in the fridge overnight before reheating.Use your gift card to cook our incredible Antipasti Pasta recipe!",
            "ingredients": [
                {
                    "id": 0,
                    "name": "aubergines",
                    "quantity": 3.0,
                    "unit": "No unit",
                    "orig": "3 aubergines, cut into 4-5cm pieces"
                },
                {
                    "id": 1,
                    "name": "olive oil",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tbsp olive oil"
                },
                {
                    "id": 2,
                    "name": "red onions",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 red onions, thinly sliced"
                },
                {
                    "id": 3,
                    "name": "carrots",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 carrots, chopped"
                },
                {
                    "id": 4,
                    "name": "celery sticks",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 celery sticks, chopped"
                },
                {
                    "id": 5,
                    "name": "cloves",
                    "quantity": 4.0,
                    "unit": "g",
                    "orig": "4 garlic cloves, thinly sliced"
                },
                {
                    "id": 6,
                    "name": "ground coriander",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tsp ground coriander"
                },
                {
                    "id": 7,
                    "name": "cumin seeds",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tbsp cumin seeds"
                },
                {
                    "id": 8,
                    "name": "fennel seeds",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tsp fennel seeds"
                },
                {
                    "id": 9,
                    "name": "tomato pure",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tbsp tomato pur\u00e9e"
                },
                {
                    "id": 10,
                    "name": "red or white wine",
                    "quantity": 4.0,
                    "unit": "ml",
                    "orig": "130ml red or white wine"
                },
                {
                    "id": 11,
                    "name": "fresh mixed tomatoes or x g cans chopped tomatoes",
                    "quantity": 12.0,
                    "unit": "g",
                    "orig": "750g fresh mixed tomatoes or 2 x 400g cans chopped tomatoes"
                }
            ],
            "method": [
                "Heat the oven to 200C/180C fan/gas 6. Put the aubergine on a large baking sheet and drizzle with the olive oil. Season well, then toss to coat. Roast for 1 hr until golden and tender. Will keep chilled for up to two days.",
                "Heat a glug of olive oil in a large saucepan or casserole, then tip in the onions, carrots and celery. Fry gently for 20 mins over a medium heat, stirring often.",
                "Add the garlic and spices, stirring for a couple of minutes. Add the tomato pur\u00e9e and mix well to combine. Pour in the wine and simmer for a couple of minutes until most of the liquid has been absorbed. Tip in the tomatoes and 400ml water (or if using canned tomatoes, use 200ml water).",
                "Bring the ragu to the boil, then reduce the heat to a gentle simmer and leave to cook over a low-medium heat for 50 mins, stirring occasionally. Mix in the roasted aubergine. Can be frozen for up to three months. Defrost in the fridge overnight before reheating."
            ],
            "difficulty": "Easy",
            "time_preparation": "10 mins",
            "time_cooking": "1 hr and 15 mins",
            "serves": "Serves 4",
            "self_url": "https://www.bbcgoodfood.com/premium/aubergine-ragu",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/09/Aubergine-ragu-9e6445a.jpg?quality=90&resize=556,505",
            "id": 3
        },
        {
            "title": "Baked cod with orzo & spicy sausage",
            "description": "Make a Friday night one-pot with red pepper, orzo, spicy nduja sausage and succulent pieces of cod. It\u2019s comforting, rich and a breeze to makeHeat the oven to 200C/180C fan/gas 6. Heat the oil in a large shallow 30cm casserole dish or large ovenproof frying pan. Tip in the onion and fry with a pinch of salt over a low heat for 10 mins or until softened and translucent. Add the garlic, paprika and oregano, and cook for 1 min. Add the orzo and tomato pur\u00e9e, then gradually stir in the hot stock. Bring to a simmer, then stir in the rosemary, peppers, olives and sausage, and season to taste. Simmer for 5 mins, stirring occasionally, then stir through the double cream or mascarpone.Sit the cod loins on top and bake in the oven, uncovered, for 12-15 mins or until the fish is cooked through. Scatter overthe parsley and serve with salad, if you like.RECIPE TIPSFor a thrifty, vegetarian midweek version of this dish simply ditch the nduja and fish, and top with mozzarella before baking.Use your gift card to cook our incredible Antipasti Pasta recipe!",
            "ingredients": [
                {
                    "id": 1,
                    "name": "olive oil",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tbsp olive oil"
                },
                {
                    "id": 12,
                    "name": "onion",
                    "quantity": 1.0,
                    "unit": "No unit",
                    "orig": "1 onion, finely chopped"
                },
                {
                    "id": 13,
                    "name": "clove",
                    "quantity": 1.0,
                    "unit": "g",
                    "orig": "1 garlic clove, crushed"
                },
                {
                    "id": 14,
                    "name": "hot smoked paprika",
                    "quantity": 0.5,
                    "unit": "tbsp",
                    "orig": "\u00bd tsp hot smoked paprika"
                },
                {
                    "id": 15,
                    "name": "oregano",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tsp dried oregano"
                },
                {
                    "id": 16,
                    "name": "orzo",
                    "quantity": 8.0,
                    "unit": "g",
                    "orig": "350g orzo"
                },
                {
                    "id": 9,
                    "name": "tomato pure",
                    "quantity": 4.0,
                    "unit": "tbsp",
                    "orig": "4 tbsp tomato pur\u00e9e"
                },
                {
                    "id": 17,
                    "name": "hot chicken or veg stock",
                    "quantity": 8.0,
                    "unit": "ml",
                    "orig": "800ml hot chicken or veg stock"
                },
                {
                    "id": 18,
                    "name": "rosemary sprig",
                    "quantity": 1.0,
                    "unit": "No unit",
                    "orig": "1 rosemary sprig"
                },
                {
                    "id": 19,
                    "name": "charred red peppers",
                    "quantity": 2.0,
                    "unit": "l",
                    "orig": "2 large charred red peppers, from a jar, sliced"
                },
                {
                    "id": 20,
                    "name": "black olives",
                    "quantity": 3.0,
                    "unit": "g",
                    "orig": "30g black olives, drained and halved"
                },
                {
                    "id": 21,
                    "name": "nduja sausage",
                    "quantity": 4.0,
                    "unit": "g",
                    "orig": "40g nduja sausage, crumbled, or spicy chorizo, finely chopped"
                },
                {
                    "id": 22,
                    "name": "double cream or mascarpone",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tbsp double cream or mascarpone"
                },
                {
                    "id": 23,
                    "name": "cod loin fillets",
                    "quantity": 4.0,
                    "unit": "No unit",
                    "orig": "4 cod loin fillets"
                },
                {
                    "id": 24,
                    "name": "parsley",
                    "quantity": 0.5,
                    "unit": "No unit",
                    "orig": "\u00bd small bunch of parsley, finely chopped"
                },
                {
                    "name": "salad, to serve (optional)"
                }
            ],
            "method": [
                "Heat the oven to 200C/180C fan/gas 6. Heat the oil in a large shallow 30cm casserole dish or large ovenproof frying pan. Tip in the onion and fry with a pinch of salt over a low heat for 10 mins or until softened and translucent. Add the garlic, paprika and oregano, and cook for 1 min. Add the orzo and tomato pur\u00e9e, then gradually stir in the hot stock. Bring to a simmer, then stir in the rosemary, peppers, olives and sausage, and season to taste. Simmer for 5 mins, stirring occasionally, then stir through the double cream or mascarpone.",
                "Sit the cod loins on top and bake in the oven, uncovered, for 12-15 mins or until the fish is cooked through. Scatter overthe parsley and serve with salad, if you like."
            ],
            "difficulty": "Easy",
            "time_preparation": "15 mins",
            "time_cooking": "35 mins",
            "serves": "Serves 4",
            "self_url": "https://www.bbcgoodfood.com/premium/baked-cod-with-orzo-spicy-sausage",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/09/Baked-cod-with-orzo-and-spicy-sausage-c623696.jpg?quality=90&resize=556,505",
            "id": 1
        },
    ]

    return (
        <div className="receipt_container">
            {
                receipts.map((receitp) => (<Receipt key={receitp.id} singleReceipts={receitp} />))
            }
        </div>
    );
}