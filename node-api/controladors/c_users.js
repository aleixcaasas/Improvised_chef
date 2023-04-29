const { db, query, collection, where, getDocs, getDoc, updateDoc, doc, arrayUnion, arrayRemove } = require('../firebase/firebase-config');

const getUserInfo = async function (req, res) {
    try {
        let result = [];
        const users = collection(db, "users");
        const userInfo = query(users, where("userId", "==", req.body.id));
        const querySnapshot = await getDocs(userInfo);
        querySnapshot.forEach((doc) => {
            const docData = doc.data();
            const selectedFields = {
                profilePic: docData.profilePic,
                fullName: docData.fullName,
                userName: docData.userName,
            };
            result.push(selectedFields);
        });
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send('Error al fer fetch de dades de usuari');
    }

};

/* S'HA DE VERIFICAR L'ENDPOINT I MIRAR SI PODRIEM CANVIAR LA CONTRASENYA*/
const getUserProfile = async function (req, res) {
    try {
        let result = [];
        const users = collection(db, "users");
        const userInfo = query(users, where("userId", "==", req.body.userId));
        const querySnapshot = await getDocs(userInfo);
        querySnapshot.forEach((doc) => {
            const docData = doc.data();
            const selectedFields = {
                profilePic: docData.profilePic,
                fullName: docData.fullName,
                userName: docData.userName,
                email: docData.email,
            };
            result.push(selectedFields);
        });
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send('Error al fer fetch de dades de usuari');
    }

};


const myKitchen = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            res.status(200).send([querySnapshot.data().myIngredients, querySnapshot.data().shoppingList, querySnapshot.data().favoriteRecipes]);
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error getting myIngredients: ', error);
    }
}

const getUserIngredientList = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            res.status(200).send(querySnapshot.data().myIngredients);
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error getting myIngredients: ', error);
    }
};

const addUserIngredient = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            if (querySnapshot.data().myIngredients.some(ingredient => {
                return Object.values(ingredient).includes(parseInt(req.body.ingredientId)) ||
                    Object.values(ingredient).includes(req.body.ingredientName)
            })) {
                res.status(500).send('User ingredient exist');
            }
            else {
                await updateDoc(doc(db, "users", req.body.userId), {
                    myIngredients: arrayUnion({ id: parseInt(req.body.ingredientId), name: req.body.ingredientName })
                });
                res.status(200).send('Ingredient "' + req.body.ingredientName + '" added to myIngredients.');
            }
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error insert ingredients: ', error);
    }
};

const removeUserIngredient = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            if (querySnapshot.data().myIngredients.some(ingredient => {
                return Object.values(ingredient).includes(parseInt(req.body.ingredientId)) &&
                    Object.values(ingredient).includes(req.body.ingredientName)
            })) {

                await updateDoc(doc(db, "users", req.body.userId), {
                    myIngredients: arrayRemove({ id: parseInt(req.body.ingredientId), name: req.body.ingredientName })
                });
                res.status(200).send('Ingredient "' + req.body.ingredientName + '" deleted to myIngredients.');
            }
            else {
                res.status(500).send('User ingredient not exist');
            }
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error remove ingredients: ', error);
    }
};

const getUserShoppingList = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            res.status(200).send(querySnapshot.data().shoppingList);
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error getting shoppingList: ', error);
    }
};

const addUserShoppingList = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            if (querySnapshot.data().shoppingList.some(ingredient => {
                return Object.values(ingredient).includes(parseInt(req.body.ingredientId)) ||
                    Object.values(ingredient).includes(req.body.ingredientName)
            })) {
                res.status(500).send('Ingredient ShoppingList exist');
            }
            else {
                await updateDoc(doc(db, "users", req.body.userId), {
                    shoppingList: arrayUnion({ id: parseInt(req.body.ingredientId), name: req.body.ingredientName })
                });
                res.status(200).send('Ingredient "' + req.body.ingredientName + '" added to shoppingList.');
            }
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error insert shoppingList: ', error);
    }
};

const removeUserShoppingList = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            if (querySnapshot.data().shoppingList.some(ingredient => {
                return Object.values(ingredient).includes(parseInt(req.body.ingredientId)) &&
                    Object.values(ingredient).includes(req.body.ingredientName)
            })) {

                await updateDoc(doc(db, "users", req.body.userId), {
                    shoppingList: arrayRemove({ id: parseInt(req.body.ingredientId), name: req.body.ingredientName })
                });
                res.status(200).send('Ingredient "' + req.body.ingredientName + '" deleted to shoppingList.');
            }
            else {
                res.status(500).send('Ingredient shoppingList not exist');
            }
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error remove ingredients: ', error);
    }
};

const getUserRecipeList = async (req, res) => {

    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            res.status(200).send(querySnapshot.data().favoriteRecipes);
        }
        else {
            res.status(404).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error getting favoriteRecipes: ', error);
    }
};

const addUserRecipe = async (req, res) => {
    try {
        const userDoc = await getDoc(doc(db, "users", req.body.userId));
        if (userDoc.exists()) {
            if (userDoc.data().favoriteRecipes.some(recipe => {
                return Object.values(recipe).includes(parseInt(req.body.recipeId))
            })) {
                res.status(500).send('User recipe exist');
            }
            else {
                const recipeDoc = await getDoc(doc(db, "recipes", req.body.recipeId));
                if (recipeDoc.exists()) {
                    await updateDoc(doc(db, "users", req.body.userId), {
                        favoriteRecipes: arrayUnion({
                            id: parseInt(recipeDoc.data().id), title: recipeDoc.data().title,
                            image: recipeDoc.data().image, difficulty: recipeDoc.data().difficulty,
                            time_preparation: recipeDoc.data().time_preparation, time_cooking: recipeDoc.data().time_cooking
                        })
                    });
                    res.status(201).send('Recipe added successfully');
                }
                else {
                    res.status(404).send('Recipe not exist');
                }
            }
        }
        else {
            res.status(404).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error adding recipe');
    }
};

const removeUserRecipe = async (req, res) => {
    try {
        const userRef = doc(db, "users", req.body.userId);
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            return res.status(404).send('User not found');
        }

        const recipeId = parseInt(req.body.recipeId);
        const favoriteRecipes = userDoc.data().favoriteRecipes || [];
        if (!favoriteRecipes.some(recipe => recipe.id === recipeId)) {
            return res.status(404).send(`Recipe ${recipeId} not found in favoriteRecipes`);
        }

        const updatedRecipes = favoriteRecipes.filter(recipe => recipe.id !== recipeId);

        await updateDoc(userRef, {
            favoriteRecipes: updatedRecipes
        });


        res.status(200).send(`Recipe ${recipeId} removed from favoriteRecipes`);
    } catch (error) {
        res.status(500).send(`Error removing recipe: ${error}`);
    }
};


const searchWithIngredients = async (req, res) => {
    try {
        const userRef = doc(db, "users", req.body.userId);
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            return res.status(404).send('User not found');
        }

        const ingredientList = userDoc.data().myIngredients || [];
        if (!ingredientList.length) {
            return res.status(404).send(`No ingredients found!`);
        }

        const ingredientIDs = ingredientList.map(ingredient => ingredient.id);
        const ingredientQuerySnapshot = await getDocs(query(collection(db, 'ingredients'), where('id', 'in', ingredientIDs)));
        const ingredients = ingredientQuerySnapshot.docs.map(doc => doc.data());

        const recipesIn = [];
        for (const ingredient of ingredients) {
            const recipeIDs = ingredient.recipes_in || [];
            for (const recipeID of recipeIDs) {
                recipesIn.push(recipeID);
            }
        }
        const freqMap = recipesIn.reduce((map, num) => {
            if (!map[num]) {
                map[num] = 1;
            } else {
                map[num]++;
            }
            return map;
        }, {});

        const sortedArr = Object.keys(freqMap)
            .sort((a, b) => freqMap[b] - freqMap[a])
            .map(num => parseInt(num));
        let result = [];
        const q = query(collection(db, "recipes"), where("id", "in", sortedArr.slice(0, 10)));
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach((doc) => {
            const docData = doc.data();
            let recipeIngredients = docData.ingredients || [];
            let ingredientsToBuy = 0;
            let ingredientsBought = 0;
            for (let ingr of recipeIngredients) {
                if (ingredientIDs.includes(ingr.id)) {
                    ingr.status = 'INCLUDED';
                    ingredientsBought++;
                } else {
                    ingr.status = 'NEEDED';
                    ingredientsToBuy++;
                }
            }
            docData.ingredientsBought = ingredientsBought;
            docData.ingredientsToBuy = ingredientsToBuy;
            result.push(docData);
        });
        res.status(200).send(result);


    } catch (error) {
        res.status(500).send(`Error searching recipes with necessary ingredients recipe: ${error}`);
    }
};



module.exports = { getUserInfo, getUserProfile, getUserRecipeList, getUserIngredientList, addUserIngredient, addUserRecipe, removeUserIngredient, getUserShoppingList, addUserShoppingList, removeUserShoppingList, myKitchen, removeUserRecipe, searchWithIngredients };
