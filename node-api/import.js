const admin = require("firebase-admin");
const serviceAccount = require("./firebase.json");
const dataRecipes = require("../data/parsed_recipes.json");
const dataIngredients = require("../data/parsed_ingredients.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const batch = db.batch();

const collectionRecipes = db.collection("recipes");
const collectionIngredients = db.collection("ingredients");

dataRecipes.forEach((doc) => {
    const docId = doc.id.toString();
    const docRecipe = collectionRecipes.doc(docId);
    batch.set(docRecipe, doc);
});

dataIngredients.forEach((doc) => {
    const docId = doc.id.toString();
    const docIngredient = collectionIngredients.doc(docId);
    batch.set(docIngredient, doc);
});

batch.commit().then(() => {
    console.log("Data imported successfully to Firestore!");
})
.catch((error) => {
    console.log("Error importing data to Firestore: " + error);
})