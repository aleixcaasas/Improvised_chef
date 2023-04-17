const admin = require("firebase-admin");
const serviceAccount = require("./firebase-private-key.json");
const dataRecipes = require("../../data/parsed_recipes.json");
const dataIngredients = require("../../data/parsed_ingredients.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const writeRecipes = () => {
    let batch = db.batch();
    let batchSizeRecipes = 0;
    dataRecipes.forEach((doc) => {
        const docId = doc.id.toString();
        const docRecipe = db.collection("recipes").doc(docId);
        batch.set(docRecipe, doc);
        batchSizeRecipes++;
        if (0 === batchSizeRecipes % 500) {
            batch.commit().then(() => {
                console.log(`Se agregaron ${batchSizeRecipes} recetas correctamente`);
            }).catch((error) => {
                console.error(`Error al agregar documentos: ${error}`);
            });
            batch = db.batch();
            batchSizeRecipes = 0;
        }
    });
    return batch.commit();
};

writeRecipes()
    .then(() => {
        let batch = db.batch();
        let batchSizeIngredients = 0;
        dataIngredients.forEach((doc) => {
            const docId = doc.id.toString();
            const docIngredient = db.collection("ingredients").doc(docId);
            batch.set(docIngredient, doc);
            batchSizeIngredients++;
            if (0 === batchSizeIngredients % 500) {
                batch.commit().then(() => {
                    console.log(`Se agregaron ${batchSizeIngredients} ingredientes correctamente`);
                }).catch((error) => {
                    console.error(`Error al agregar documentos: ${error}`);
                });
                batch = db.batch();
                batchSizeIngredients = 0;
            }
        });
        return batch.commit();
    })
    .then(async () => {
        const recetasSnapshot = await db.collection('recipes').get();
        let batch = db.batch();
        let batchSizeRecipes = 0;
        recetasSnapshot.forEach((doc) => {
            const titleLowercase = doc.get('title').toLowerCase();
            const titleWords = titleLowercase
                .replace(",", "")
                .replace("(", "")
                .replace(")", "")
                .split(" ");

            const recipe = db.collection('recipes').doc(doc.id.toString());
            batch.update(recipe, { title_words: titleWords });
            batchSizeRecipes++;
            if (0 === batchSizeRecipes % 500) {
                batch.commit().then(() => {
                    console.log(`Se han actualizado ${batchSizeRecipes} recetas correctamente`);
                }).catch((error) => {
                    console.error(`Error al agregar documentos: ${error}`);
                });
                batch = db.batch();
                batchSizeRecipes = 0;
            }
        });
        return batch.commit();
    })
    .catch((error) => {
        console.error(`Error al agregar documentos: ${error}`);
    });