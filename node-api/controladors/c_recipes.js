const { db } = require('../firebase/firebase-config');
const recipes = async function () {
    const querySnapshot = await db.collection("recipes").get();
    return querySnapshot.docs.map(doc => doc.data());
}

/*router.get('/recipes/:userIngredientsList', async (req, res) => {
    try{
        var results = [];
        const docId = req.params.userIngredientsList;
        const recipes = await db.collection("recipes").get();
        const user = await db.collection("users").doc(docId).get();
        if(!user.exists){
            return res.status(404).send('No ha trobat el document');
        }
        recipes.forEach((doc) => {
            user.data().ingredients.forEach((ingredientUser) => {
                doc.data().ingredients.forEach((ingredientRecipe) => {
                    if(ingredientRecipe.toLowerCase().includes(ingredientUser.toLowerCase())){
                        results.push(doc.data());
                    }
                })
            })
        })
        return res.json([...new Map(results.map(v => [v.title, v])).values()]);
    }
    catch(error){
        console.error(error);
        return res.status(500).send('Error al obtenir les dades');
    }
})

router.get('/recipes/:recipeId', async (req, res) => {
    try{
        const docId = req.params.recipeId;
        const docRef = db.collection("recipes").doc(docId);
        const doc = await docRef.get();

        if(!doc.exists){
            return res.status(404).send('No ha trobat el document');
        }
        return res.json(doc.data());

    }
    catch(error){
        console.error(error);
        return res.status(500).send('Error al obtenir els detalls');
    }
});*/

module.exports = recipes;