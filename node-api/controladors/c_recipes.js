const { db, collection, getDocs, query, where, limit} = require('../firebase/firebase-config');

const RECIPES_NUMBER = 1378;

const randomRecipe = async function (req, res) {
    try {
        let result = [];
        const numRecipes = parseInt(req.query.number) || 9;
        let randomNum = []
        while (randomNum.length < numRecipes) {
          let random = Math.floor(Math.random() * RECIPES_NUMBER)
          if (randomNum.indexOf(random) === -1) {
            randomNum.push(random)
          }
        }
        const q = query(collection(db, "recipes"), where("id", "in", randomNum));
        const querySnapshot = await getDocs(q);
        querySnapshot.docs.forEach((doc) => {
            const docData = doc.data();
            result.push(docData);
        });
        res.status(200).send(result);
    }
    catch (error) {
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
        res.status(200).send(result);
    }
    catch (error) {
        res.status(500).send('Error al cercar receptes per nom');
    }
}

module.exports = {recipesName, randomRecipe};