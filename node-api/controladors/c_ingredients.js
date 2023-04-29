const { db } = require('../firebase/firebase-config');
const {query, collection, limit, getDocs, getDoc, where} = require("firebase/firestore");

const ingredientsName = async function (req, res) {
  /* S'HA DE CANVIAR L'ENDPOINT PER A FER LA BUSQUEDA SEGONS EL QUE BUSQUEM */
  let docs = [];
  const q = query(collection(db, "ingredients"), limit(10));
  const querySnapshot = await getDocs(q);
  querySnapshot.docs.forEach((doc) => {
    docs.push(getDoc(doc.ref));
  });
  return Promise.all(docs);
};

const getIngredientsSearched = async function (req, res) {
  let docs = [];
  const nameIngredient = req.body.name.toLowerCase().replace(/\s+/g, ' ').trim();
  const querySnapshot = await getDocs(query(collection(db, "ingredients")));
  try {
    querySnapshot.forEach((doc) => {
      if(doc.get('name').toLowerCase().includes(nameIngredient)){
          docs.push(doc.data().name, doc.data().id);
      }
    });
    return docs;
  } catch (error) {
    return res.status(500).send(error);
  }
  
}

module.exports = {ingredientsName, getIngredientsSearched};