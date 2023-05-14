const { db } = require('../firebase/firebase-config');
const { query, collection, limit, getDocs, getDoc, where, doc } = require("firebase/firestore");
const { getUserIngredientList } = require('./c_users');


const ingredientsName = async function () {
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
  const querySnapshot2 = await getDoc(doc(db, "users", req.body.userId));
  
  let userIngredients = ''
  if (req.body.list === 'ingredients') {
    userIngredients = querySnapshot2.data().myIngredients;
  } else if (req.body.list === 'shopping') {
    userIngredients = querySnapshot2.data().shoppingList;
  }

  try {
    querySnapshot.forEach((doc) => {
      if (doc.get('name').toLowerCase().includes(nameIngredient)) {
        docs.push({ name: doc.data().name, id: doc.data().id, repeated: false });
      }
    });
    for (let i = 0; i < userIngredients.length; i++) {
      for (let j = 0; j < docs.length; j++) {
        if (userIngredients[i].name === docs[j].name) {
          docs[j].repeated = true;
        }
      }
    }
    return docs;
  } catch (error) {
    return res.status(500).send(error);
  }

}

module.exports = { ingredientsName, getIngredientsSearched };