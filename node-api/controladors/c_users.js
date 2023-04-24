const { db } = require('../firebase/firebase-config');
const {query, collection, where, getDocs, getDoc} = require("firebase/firestore");

const getUserInfo = async function (req, res) {
    try{
        let result = [];
        const users = collection(db, "users");
        const userInfo = query(users, where("email", "==", req.body.email));
        const querySnapshot = await getDocs(userInfo);
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          const selectedFields = {
              profilePic: docData.profilePic,
              fullName: docData.fullName,
              userName: docData.userName,
          };
              result.push(selectedFields);
        });
        return result;
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al fer fetch de random recipes!');
    }
  
};


/*
const getUserIngredientList = async (req, res) => {
  const userId = req.params.userId;

  try {
    let result = [];
    const users = collection(db, "users");
    const userInfo = query(users, where("email", "==", req.body.email));
    const querySnapshot = await getDocs(userInfo);
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const selectedFields = {
          myIngredients: docData.myIngredients
      };
      result.push(selectedFields);
    });
    return result;
  } catch (error) {
    console.error('Error getting myIngredients: ', error);
    res.status(500).send([]);
  }
};
*/
const getUserRecipeList = async (req, res) => {

  try {
    let result = [];
    const users = collection(db, "users");
    const userInfo = query(users, where("email", "==", req.body.email));
    const querySnapshot = await getDocs(userInfo);
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const selectedFields = {
          favoriteRecipes: docData.favoriteRecipes
      };
      result.push(selectedFields);
    });
    return result;
  } catch (error) {
    console.error('Error getting favoriteRecipes: ', error);
    res.status(500).send('Error getting favoriteRecipes');
  }
};

module.exports = {getUserInfo, getUserRecipeList};
