const { db, collection, getDocs, query, where, limit} = require('../firebase/firebase-config');
const recipes = async function () {
  let results = [];
  const querySnapshot = await getDocs(query(collection(db, "recipes"), limit(10)));
  querySnapshot.forEach((doc) => {
      results.push(doc.data());
  });
  return results;
};

const randomRecipe = async function (req, res) {
    try {
        let result = [];
        const numRecipes = parseInt(req.query.number) || 1;
        let randomNum = []
        while (randomNum.length < numRecipes) {
          let random = Math.floor(Math.random() * 3842)
          if (randomNum.indexOf(random) === -1) {
            randomNum.push(random)
          }
        }
        const q = query(collection(db, "recipes"), where("id", "in", randomNum));
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach((doc) => {
            const docData = doc.data();
            const selectedFields = {
                image: docData.image,
                difficulty: docData.difficulty,
                id: docData.id,
                time_cooking: docData.time_cooking,
                time_preparation: docData.time_preparation,
                title: docData.title
            };
            result.push(selectedFields);
        });
        return result;
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error al fer fetch de random recipes!');
    }
};

const recipesName = async function (req, res){
    try {
        let results = [];
        const nameRecipe = req.body.name.toLowerCase().replace(/\s+/g, ' ').trim();
        const querySnapshot = await getDocs(query(collection(db, "recipes"), where('title_words', 'array-contains-any', nameRecipe.split(" "))));
        querySnapshot.forEach((doc) => {
            if(doc.get('title').toLowerCase().includes(nameRecipe)){
                results.push(doc.data());
            }
        });
        return results;
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error al cercar receptes per nom');
    }
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

module.exports = {recipes, recipesName, randomRecipe};