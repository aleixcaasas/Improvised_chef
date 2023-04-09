const admin = require("firebase-admin");
const serviceAccount = require("./firebase-private-key.json");
const dataRecipes = require("../../data/parsed_recipes.json");
const dataIngredients = require("../../data/parsed_ingredients.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
let batch = db.batch();
let batchSizeRecipes = 0;
let batchSizeIngredients = 0;

dataRecipes.forEach((doc) => {
    const docId = doc.id.toString();
    const docRecipe = db.collection("recipes").doc(docId);
    batch.set(docRecipe, doc);
    batchSizeRecipes++;
    if (batchSizeRecipes === 499) {
        batch.commit().then(() => {
            console.log(`Se agregaron ${batchSizeRecipes} recetas correctamente`);
        }).catch((error) => {
            console.error(`Error al agregar documentos: ${error}`);
        });
        batch = db.batch();
        batchSizeRecipes = 0;
    }
});

dataIngredients.forEach((doc) => {
    const docId = doc.id.toString();
    const docIngredient = db.collection("ingredients").doc(docId);
    batch.set(docIngredient, doc);
    batchSizeIngredients++;
    if (batchSizeIngredients === 499) {
        batch.commit().then(() => {
            console.log(`Se agregaron ${batchSizeIngredients} ingredientes correctamente`);
        }).catch((error) => {
            console.error(`Error al agregar documentos: ${error}`);
        });
        batch = db.batch();
        batchSizeIngredients = 0;
    }
});

if (batchSizeRecipes > 0) {
    batch.commit().then(() => {
        console.log(`Se agregaron ${batchSizeRecipes} recetas correctamente`);
    }).catch((error) => {
        console.error(`Error al agregar documentos: ${error}`);
    });
}

if (batchSizeIngredients > 0) {
    batch.commit().then(() => {
        console.log(`Se agregaron ${batchSizeIngredients} ingredientes correctamente`);
    }).catch((error) => {
        console.error(`Error al agregar documentos: ${error}`);
    });
}