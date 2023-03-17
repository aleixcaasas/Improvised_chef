const { Router } = require('express');
const { db } = require('./firebase');

const router = Router();

router.get('/recipes', async (req, res) => {
  const querySnapshot = await db.collection("recipes").get();
  res.json(querySnapshot.docs.map(doc => doc.data()));
});

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
});

module.exports = router;