import React, { useState } from "react";
import Resume_recipe from "./Resume_recipe"
import './Resume_recipe.css'

export default function Resume_recipe_container() {


    const receipts = [
        {
            "title": "Fragrant pork & lemongrass noodles",
            "description": "In just 20 minutes you can be enjoying a stir-fry heady with lemongrass, ginger and lime. If you prefer thicker noodles, they'll also work instead of vermicelliPrepare the vermicelli noodles following pack instructions, then set aside. Meanwhile, mix together the garlic, ginger, lemongrass, lime zest and chilli. Heat the olive oil in a large frying pan over a medium-high heat and fry the mixture for 2 mins until beginning to soften. Scatter in the carrots and spring onions and fry for 2 mins more, stirring frequently. Tip in the pork mince and cook for another 3 mins, then mix in the swiss chard and cook for 2 mins more until the pork is cooked through.Drizzle in the fish sauce and lime juice, then scatter in the coriander. Cook everything for 1 min, stirring to combine. Tip in the noodles, toss well and serve immediately.Use your gift card to cook our incredible Antipasti Pasta recipe!",
            "ingredients": [
                {
                    "id": 144,
                    "name": "vermicelli rice noodles",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 nests of vermicelli rice noodles"
                },
                {
                    "id": 5,
                    "name": "cloves",
                    "quantity": 3.0,
                    "unit": "g",
                    "orig": "3 garlic cloves, crushed"
                },
                {
                    "name": "thumb-sized piece of ginger, peeled and grated"
                },
                {
                    "id": 170,
                    "name": "lemongrass paste",
                    "quantity": 4.0,
                    "unit": "tbsp",
                    "orig": "4 tsp lemongrass paste"
                },
                {
                    "id": 86,
                    "name": "zested and juiced",
                    "quantity": 1.0,
                    "unit": "l",
                    "orig": "1 lime zested and juiced, plus extra wedges to serve (optional)"
                },
                {
                    "id": 84,
                    "name": "red chilli",
                    "quantity": 1.0,
                    "unit": "No unit",
                    "orig": "1 red chilli, deseeded and finely sliced"
                },
                {
                    "id": 1,
                    "name": "olive oil",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tsp olive oil"
                },
                {
                    "id": 171,
                    "name": "medium carrots",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 medium carrots, coarsely grated"
                },
                {
                    "id": 172,
                    "name": "spring onions",
                    "quantity": 8.0,
                    "unit": "No unit",
                    "orig": "8 spring onions, finely sliced"
                },
                {
                    "id": 173,
                    "name": "pork mince",
                    "quantity": 5.0,
                    "unit": "g",
                    "orig": "500g pork mince"
                },
                {
                    "id": 174,
                    "name": "swiss chard",
                    "quantity": 2.0,
                    "unit": "g",
                    "orig": "200g swiss chard, finely sliced"
                },
                {
                    "id": 175,
                    "name": "fish sauce",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tsp fish sauce"
                },
                {
                    "id": 64,
                    "name": "coriander",
                    "quantity": 0.5,
                    "unit": "No unit",
                    "orig": "\u00bd small bunch of coriander, roughly chopped"
                }
            ],
            "method": [
                "Prepare the vermicelli noodles following pack instructions, then set aside. Meanwhile, mix together the garlic, ginger, lemongrass, lime zest and chilli. Heat the olive oil in a large frying pan over a medium-high heat and fry the mixture for 2 mins until beginning to soften. Scatter in the carrots and spring onions and fry for 2 mins more, stirring frequently. Tip in the pork mince and cook for another 3 mins, then mix in the swiss chard and cook for 2 mins more until the pork is cooked through.",
                "Drizzle in the fish sauce and lime juice, then scatter in the coriander. Cook everything for 1 min, stirring to combine. Tip in the noodles, toss well and serve immediately."
            ],
            "difficulty": "Easy",
            "time_preparation": "10 mins",
            "time_cooking": "10 mins",
            "serves": "Serves 4",
            "self_url": "https://www.bbcgoodfood.com/premium/fragrant-pork-lemongrass-noodles",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2022/02/Pork-and-lemongrass-noodles-7f8644e.jpg?quality=90&resize=556,505",
            "id": 21
        },
        {
            "title": "Honey & soy chicken",
            "description": "This crowd-pleasing honey and soy chicken is great for family meals, buffets and picnics. Serve with rice and salad or steamed greensUsing a sharp knife, score the chicken thighs twice through the skin, season and transfer to a bowl.Whisk the honey with the soy, lemon juice, ketchup, ginger, garlic, chilli flakes and fennel seeds. Pour this over the chicken, making sure that each piece is coated, then cover and marinate in the fridge for at least 2-3 hrs, or overnight if you have time.Heat the oven to 200C/180C fan/ gas 6. Line a large roasting tin with foil and put in the oven to heat up for 10 mins. Gently shake the excess marinade off the chicken thighs, reserving the bowl of leftover marinade, then carefully arrange in a single layer in the hot tin. Drizzle with the oil and roast for 10 mins.Meanwhile, pour the reserved marinade into a small pan and bring to the boil over a medium-low heat, stirring often. Cook for 7-10 mins, or until thick and syrupy.Remove the chicken from the oven and carefully pour any juices from the tin into the pan with the syrupy sauce and continue to cook for 5 mins until the sauce is the consistency of double cream.Spoon the sauce over the chicken, then return the roasting tin to the oven for 10-15 mins more, or until the thighs are sticky and tender, and the juices run clear when pierced with a knife. Slice some spring onions along their length and scrape a knife along the shreds to curl them, if you like, then scatter over the chicken. Serve warm or at room temperature with rice and salad or steamed greens.Use your gift card to cook our incredible Antipasti Pasta recipe!",
            "ingredients": [
                {
                    "id": 181,
                    "name": "skinon chicken thighs",
                    "quantity": 8.0,
                    "unit": "No unit",
                    "orig": "8 skin-on chicken thighs (about 1kg)"
                },
                {
                    "id": 182,
                    "name": "honey",
                    "quantity": 4.0,
                    "unit": "tbsp",
                    "orig": "4 tbsp honey"
                },
                {
                    "id": 183,
                    "name": "dark soy sauce",
                    "quantity": 4.0,
                    "unit": "tbsp",
                    "orig": "4 tbsp dark soy sauce"
                },
                {
                    "id": 30,
                    "name": "lemon juice",
                    "quantity": 4.0,
                    "unit": "tbsp",
                    "orig": "4 tbsp lemon juice"
                },
                {
                    "id": 184,
                    "name": "tomato ketchup",
                    "quantity": 4.0,
                    "unit": "tbsp",
                    "orig": "4 tbsp tomato ketchup"
                },
                {
                    "id": 164,
                    "name": "ginger",
                    "quantity": 3.0,
                    "unit": "g",
                    "orig": "30g ginger,  peeled and finely grated"
                },
                {
                    "id": 5,
                    "name": "cloves",
                    "quantity": 4.0,
                    "unit": "g",
                    "orig": "4 garlic cloves, crushed"
                },
                {
                    "id": 185,
                    "name": "red chilli flakes",
                    "quantity": 0.5,
                    "unit": "tbsp",
                    "orig": "\u00bd tsp red chilli flakes"
                },
                {
                    "id": 8,
                    "name": "fennel seeds",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tsp fennel seeds, toasted and ground using a pestle and mortar or spice grinder"
                },
                {
                    "id": 42,
                    "name": "sunflower oil",
                    "quantity": 1.0,
                    "unit": "tbsp",
                    "orig": "1 tbsp sunflower oil"
                },
                {
                    "name": "spring onions, rice and salad or greens, to serve"
                }
            ],
            "method": [
                "Using a sharp knife, score the chicken thighs twice through the skin, season and transfer to a bowl.",
                "Whisk the honey with the soy, lemon juice, ketchup, ginger, garlic, chilli flakes and fennel seeds. Pour this over the chicken, making sure that each piece is coated, then cover and marinate in the fridge for at least 2-3 hrs, or overnight if you have time.",
                "Heat the oven to 200C/180C fan/ gas 6. Line a large roasting tin with foil and put in the oven to heat up for 10 mins. Gently shake the excess marinade off the chicken thighs, reserving the bowl of leftover marinade, then carefully arrange in a single layer in the hot tin. Drizzle with the oil and roast for 10 mins.",
                "Meanwhile, pour the reserved marinade into a small pan and bring to the boil over a medium-low heat, stirring often. Cook for 7-10 mins, or until thick and syrupy.",
                "Remove the chicken from the oven and carefully pour any juices from the tin into the pan with the syrupy sauce and continue to cook for 5 mins until the sauce is the consistency of double cream.",
                "Spoon the sauce over the chicken, then return the roasting tin to the oven for 10-15 mins more, or until the thighs are sticky and tender, and the juices run clear when pierced with a knife. Slice some spring onions along their length and scrape a knife along the shreds to curl them, if you like, then scatter over the chicken. Serve warm or at room temperature with rice and salad or steamed greens."
            ],
            "difficulty": "Easy",
            "time_preparation": "15 mins",
            "time_cooking": "30 mins",
            "serves": "Serves 4",
            "self_url": "https://www.bbcgoodfood.com/premium/honey-soy-chicken",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Honey-and-soy-chicken-9b36583.jpg?quality=90&resize=556,505",
            "id": 23
        }, {
            "title": "Leftover turkey korma",
            "description": "Make this turkey curry from your Christmas leftovers. Kids and adults will love this mildly spiced dish served with rice or naan and mango chutneyHeat the oil in a large pan, tip in the onion and cook over a medium heat for 8-10 mins until soft and starting to caramelise. Stir in the ginger and garlic, and sizzle for another minute until aromatic.Add the korma paste, cardamom pods, almonds and stock, then season and simmer for 10 mins.Stir in the turkey, 2 tsp sugar and cream, then simmer for 5 mins until the turkey is heated through. Season to taste. Scatter over the coriander and serve with rice or naan and some mango chutney, if you like.Use your gift card to cook our incredible Antipasti Pasta recipe!",
            "ingredients": [
                {
                    "id": 155,
                    "name": "vegetable oil",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tbsp vegetable oil"
                },
                {
                    "id": 12,
                    "name": "onion",
                    "quantity": 1.0,
                    "unit": "l",
                    "orig": "1 large onion, finely chopped"
                },
                {
                    "name": "thumb-sized piece of ginger, peeled and finely chopped"
                },
                {
                    "id": 5,
                    "name": "cloves",
                    "quantity": 2.0,
                    "unit": "g",
                    "orig": "2 garlic cloves"
                },
                {
                    "id": 193,
                    "name": "korma paste",
                    "quantity": 4.0,
                    "unit": "tbsp",
                    "orig": "4 tbsp korma paste"
                },
                {
                    "id": 194,
                    "name": "cardamom pods",
                    "quantity": 6.0,
                    "unit": "No unit",
                    "orig": "6 cardamom pods, gently crushed to crack the pods"
                },
                {
                    "id": 195,
                    "name": "ground almonds",
                    "quantity": 12.0,
                    "unit": "g",
                    "orig": "75g ground almonds"
                },
                {
                    "id": 196,
                    "name": "chicken or vegetable stock",
                    "quantity": 5.0,
                    "unit": "ml",
                    "orig": "500ml chicken or vegetable stock"
                },
                {
                    "id": 197,
                    "name": "cooked turkey",
                    "quantity": 3.0,
                    "unit": "No unit",
                    "orig": "300-400g cooked turkey, cut into chunks"
                },
                {
                    "id": 179,
                    "name": "double cream",
                    "quantity": 1.0,
                    "unit": "ml",
                    "orig": "100ml double cream"
                },
                {
                    "name": "handful of coriander, leaves picked"
                },
                {
                    "name": "rice or naan and mango chutney, to serve (optional)"
                }
            ],
            "method": [
                "Heat the oil in a large pan, tip in the onion and cook over a medium heat for 8-10 mins until soft and starting to caramelise. Stir in the ginger and garlic, and sizzle for another minute until aromatic.",
                "Add the korma paste, cardamom pods, almonds and stock, then season and simmer for 10 mins.",
                "Stir in the turkey, 2 tsp sugar and cream, then simmer for 5 mins until the turkey is heated through. Season to taste. Scatter over the coriander and serve with rice or naan and some mango chutney, if you like."
            ],
            "difficulty": "Easy",
            "time_preparation": "10 mins",
            "time_cooking": "25 mins",
            "serves": "Serves 4",
            "self_url": "https://www.bbcgoodfood.com/premium/leftover-turkey-korma",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/12/Leftover-turkey-korma-45b239b.jpg?quality=90&resize=556,505",
            "id": 25
        },
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
            "difficulty": "Medium",
            "time_preparation": "10 mins",
            "time_cooking": "1 hr and 15 mins",
            "serves": "Serves 4",
            "self_url": "https://www.bbcgoodfood.com/premium/aubergine-ragu",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/09/Aubergine-ragu-9e6445a.jpg?quality=90&resize=556,505",
            "id": 0
        },
        {
            "title": "Easy vegetable pie",
            "description": "Veggie guests coming for dinner? Put this pie in the middle of the table and watch them dive inMelt the butter in a saucepan, then stir in the flour and mustard powder and cook for 1 min. Gradually stir in the milk until smooth with no lumps, then keep stirring until the mixture begins to bubble and thickens to a creamy sauce. Remove from the heat, then stir in all but a handful of the grated cheese.Heat oven to 220C/200C fan/gas 7 and bring a large pan of water to the boil. Cook the potato slices for 5 mins, tip in the broccoli and cauliflower for another 3 mins, then finally add the peas for 1 more min. Drain all the veg and pat dry. Reserve enough potato slices to cover the top of the finished dish, then gently stir the rest of the vegetables into the sauce with the chives.Tip into a deep ovenproof dish, arrange over the reserved potato slices, then sprinkle with remaining cheddar. Bake for 20-25 mins until the topping is golden and crisp, then serve straight from the dish.Use your gift card to cook our incredible Antipasti Pasta recipe!",
            "ingredients": [
                {
                    "id": 41,
                    "name": "butter",
                    "quantity": 5.0,
                    "unit": "g",
                    "orig": "50g butter"
                },
                {
                    "id": 915,
                    "name": "mustard powder",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tsp mustard  powder"
                },
                {
                    "id": 40,
                    "name": "milk",
                    "quantity": 6.0,
                    "unit": "ml",
                    "orig": "600ml milk"
                },
                {
                    "id": 459,
                    "name": "mature cheddar",
                    "quantity": 2.0,
                    "unit": "g",
                    "orig": "200g mature cheddar, grated"
                },
                {
                    "id": 176,
                    "name": "potatoes",
                    "quantity": 2.0,
                    "unit": "l",
                    "orig": "2 large potatoes, sliced into rounds"
                },
                {
                    "id": 1323,
                    "name": "broccoli",
                    "quantity": 1.0,
                    "unit": "No unit",
                    "orig": "1  head of broccoli, cut into little florets"
                },
                {
                    "id": 99,
                    "name": "frozen peas",
                    "quantity": 2.0,
                    "unit": "g",
                    "orig": "200g frozen peas"
                },
                {
                    "name": "small bunch of chives, snipped"
                },
                {
                    "id": 243,
                    "name": "flour",
                    "quantity": 5.0,
                    "unit": "g",
                    "orig": "50g flour"
                },
                {
                    "id": 57,
                    "name": "cauliflower",
                    "quantity": 1.0,
                    "unit": "No unit",
                    "orig": "1 head of cauliflower, cut into little florets"
                }
            ],
            "method": [
                "Melt the butter in a saucepan, then stir in the flour and mustard powder and cook for 1 min. Gradually stir in the milk until smooth with no lumps, then keep stirring until the mixture begins to bubble and thickens to a creamy sauce. Remove from the heat, then stir in all but a handful of the grated cheese.",
                "Heat oven to 220C/200C fan/gas 7 and bring a large pan of water to the boil. Cook the potato slices for 5 mins, tip in the broccoli and cauliflower for another 3 mins, then finally add the peas for 1 more min. Drain all the veg and pat dry. Reserve enough potato slices to cover the top of the finished dish, then gently stir the rest of the vegetables into the sauce with the chives.",
                "Tip into a deep ovenproof dish, arrange over the reserved potato slices, then sprinkle with remaining cheddar. Bake for 20-25 mins until the topping is golden and crisp, then serve straight from the dish."
            ],
            "difficulty": "Easy",
            "time_preparation": "15 mins",
            "time_cooking": "35 mins",
            "serves": "Serves 4",
            "self_url": "https://www.bbcgoodfood.com/recipes/easy-vegetable-pie",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-52256_12-3a071c6.jpg?quality=90&resize=440,400",
            "id": 1275
        },
        {
            "title": "Easy vegetarian chilli",
            "description": "Rustle up our easy veggie chilli. It's a great recipe for batch-cooking \u2013 you can easily double it if you have a pan big enough, and freeze the restMake this simple vegetable chilli for a comforting, yet nutritious dinner. This healthy bean chilli provides a great way to boost your 5-a-day. For more plant-based ideas, check out our healthy vegetarian recipes..Heat the oil in a large saucepan over a low-medium heat and fry the carrots, celery, onions and mixed herbs for 10-12 mins, stirring occasionally until the veg is soft but not golden. You may need to add a splash of water if the veg starts to catch.Stir in the garlic and both peppers, and cook for a further 5 mins until the peppers begin to soften. Sprinkle in the chilli powder and paprika, turn up the heat to medium, then stir and cook for 1 min. Mix in the tomato pur\u00e9e and cook for a further 1 min, then pour in all of the beans, the tomatoes and stock.Stir well, bring to the boil, then reduce the heat to a simmer. Cook for 25-35 mins until the beans are tender and the sauce has thickened. Serve with rice, grated cheddar and soured cream, if you like.Use your gift card to cook our incredible Antipasti Pasta recipe!",
            "ingredients": [
                {
                    "id": 155,
                    "name": "vegetable oil",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tbsp vegetable oil"
                },
                {
                    "id": 3,
                    "name": "carrots",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 carrots, finely chopped"
                },
                {
                    "id": 4,
                    "name": "celery sticks",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 celery sticks, finely chopped"
                },
                {
                    "id": 54,
                    "name": "onions",
                    "quantity": 2.0,
                    "unit": "No unit",
                    "orig": "2 onions, finely chopped"
                },
                {
                    "id": 358,
                    "name": "mixed herbs",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tsp dried mixed herbs"
                },
                {
                    "id": 5,
                    "name": "cloves",
                    "quantity": 2.0,
                    "unit": "g",
                    "orig": "2 garlic cloves, crushed or finely grated"
                },
                {
                    "id": 320,
                    "name": "red pepper",
                    "quantity": 1.0,
                    "unit": "No unit",
                    "orig": "1 red pepper, sliced"
                },
                {
                    "id": 246,
                    "name": "pepper",
                    "quantity": 1.0,
                    "unit": "g",
                    "orig": "1 green pepper, sliced"
                },
                {
                    "id": 71,
                    "name": "chilli powder",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2-3 tsp chilli powder (depending on how hot you like it)"
                },
                {
                    "id": 875,
                    "name": "sweet smoked paprika",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tsp sweet smoked paprika"
                },
                {
                    "id": 9,
                    "name": "tomato pure",
                    "quantity": 2.0,
                    "unit": "tbsp",
                    "orig": "2 tbsp tomato pur\u00e9e"
                },
                {
                    "id": 882,
                    "name": "can red kidney beans",
                    "quantity": 4.0,
                    "unit": "g",
                    "orig": "400g can red kidney beans, drained"
                },
                {
                    "id": 586,
                    "name": "can black beans",
                    "quantity": 4.0,
                    "unit": "g",
                    "orig": "400g can black beans, drained"
                },
                {
                    "id": 121,
                    "name": "x cans chopped tomatoes",
                    "quantity": 2.0,
                    "unit": "g",
                    "orig": "2 x 400g cans chopped tomatoes"
                },
                {
                    "id": 93,
                    "name": "vegetable stock",
                    "quantity": 4.0,
                    "unit": "ml",
                    "orig": "400ml vegetable stock"
                },
                {
                    "name": "cooked rice, grated cheddar and soured cream, to serve"
                }
            ],
            "method": [
                "Heat the oil in a large saucepan over a low-medium heat and fry the carrots, celery, onions and mixed herbs for 10-12 mins, stirring occasionally until the veg is soft but not golden. You may need to add a splash of water if the veg starts to catch.",
                "Stir in the garlic and both peppers, and cook for a further 5 mins until the peppers begin to soften. Sprinkle in the chilli powder and paprika, turn up the heat to medium, then stir and cook for 1 min. Mix in the tomato pur\u00e9e and cook for a further 1 min, then pour in all of the beans, the tomatoes and stock.",
                "Stir well, bring to the boil, then reduce the heat to a simmer. Cook for 25-35 mins until the beans are tender and the sauce has thickened. Serve with rice, grated cheddar and soured cream, if you like."
            ],
            "difficulty": "Difficult",
            "time_preparation": "25 mins",
            "time_cooking": "55 mins",
            "serves": "Serves 8",
            "self_url": "https://www.bbcgoodfood.com/recipes/easy-vegetarian-chilli",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Vegetarian-chilli-206c469.jpg?quality=90&resize=556,505",
            "id": 1276
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
                receipts.map((receitp)=>(<Resume_recipe key={receitp.id} singleReceipts  = {receitp}/>))
            }   
        </div>
    );
}