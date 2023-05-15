const { db, collection, getDocs, query, where, doc, getDoc } = require('../firebase/firebase-config');


const randomRecipe = async function (randomNum) {
    try {
        let result = [];
        const q = query(collection(db, "recipes"), where("id", "in", randomNum));
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach((doc) => {
            const docData = doc.data();
            result.push(docData);
        });
        return [200, result];
    }
    catch (error) {
        return [500,'Error al fer fetch de random recipes!'];
    }
};

const infoRecipe = async (recipeId, userIngredients) => {
    try {
        let ingredients = [];
        let recipe = {};
        const querySnapshot = await getDoc(doc(db, "recipes", recipeId.toString()));
        if (querySnapshot.exists()) {
            for (const [key, value] of Object.entries(querySnapshot.data())) {
                if (key !== 'ingredients') {
                    recipe[key] = value;
                }
            }
            querySnapshot.data().ingredients.forEach(ingredient => {
                ingredient.hasIt = !!userIngredients.find(userIngredient => userIngredient.id === ingredient.id);
                ingredients.push(ingredient);
            });
            recipe.ingredients = ingredients;
            return recipe;
        }
        return false;
    }
    catch (error) {
        return error;
    }
}

const recipesName = async function (nameRecipe){
    try {
        let results = [];
        const querySnapshot = await getDocs(query(collection(db, "recipes"), where('title_words', 'array-contains-any', nameRecipe.split(" "))));
        querySnapshot.forEach((doc) => {
            if(doc.get('title').toLowerCase().includes(nameRecipe)){
                results.push(doc.data());
            }
        });
        return [200,results];
    }
    catch (error) {
        return [500,'Error al cercar receptes per nom'];
    }
}

module.exports = {recipesName, infoRecipe, randomRecipe};