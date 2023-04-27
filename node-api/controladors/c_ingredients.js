const { db } = require('../firebase/firebase-config');
const {query, collection, limit, getDocs, getDoc} = require("firebase/firestore");

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

module.exports = ingredientsName;