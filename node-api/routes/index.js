const { Router } = require('express');
const { db } = require('./firebase');
const bcrypt = require('bcrypt');

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

router.post('/user/register', async (req, res) => {
  if (req.body.password !== req.body.confirmpassword) {
    res.json({success: false, msg: 'La 2 contrasenyes han de coincidir'});
  }
  else{
    const docUsers = db.collection("users");
    const query = docUsers.where('name', '==', req.body.name);
    const docUser = await query.get();
    if (docUser.empty) {
        var salt = bcrypt.genSaltSync(10);
        var password = bcrypt.hashSync(req.body.password, salt);
        docUsers.doc().set({
          name: req.body.name,
          password: password
        })
        res.json({success: true, msg: 'Usuari afegit correctament'});
    } 
    else {
        return res.json({success: false, msg: 'Account already exists'});
    }
  }
}); 

module.exports = router;