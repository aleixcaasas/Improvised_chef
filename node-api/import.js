const admin = require("firebase-admin");
const serviceAccount = require("./firebase.json");
const data = require("./prova.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const batch = db.batch();
const collectionRef = db.collection("recipes");

data.forEach((doc) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, doc);
});

batch.commit().then(() => {
    console.log("Data imported successfully to Firestore!");
})
.catch((error) => {
    console.log("Error importing data to Firestore: " + error);
})