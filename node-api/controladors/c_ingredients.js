const { db } = require('../firebase/firebase-config');
const {query, collection, limit, getDocs, getDoc} = require("firebase/firestore");

const ingredients = async function () {
  let docs = [];
  const q = query(collection(db, "ingredients"), limit(10));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.docs.length)
  querySnapshot.docs.forEach((doc) => {
    docs.push(getDoc(doc.ref));
  });
  return Promise.all(docs);
};

module.exports = ingredients;