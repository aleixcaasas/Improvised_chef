const { Router } = require('express');
const { db } = require('./firebase');

const router = Router();

router.get('/', async (req, res) => {
  const querySnapshot = await db.collection("recipes").get();
  res.json(querySnapshot.docs.map(doc => doc.data()));
});

module.exports = router;
