const { db, query, collection, where, getDocs, getDoc, updateDoc, doc, arrayUnion, arrayRemove } = require('../firebase/firebase-config');

const getUserInfo = async function (req, res) {
    try{
        let result = [];
        const users = collection(db, "users");
        const userInfo = query(users, where("userId", "==", req.body.id));
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


const myKitchen = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            return [querySnapshot.data().myIngredients, querySnapshot.data().shoppingList, querySnapshot.data().favoriteRecipes];
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
      res.status(500).send('Error getting myIngredients: ', error);
    }
}

const getUserIngredientList = async (req, res) => {
  try {
      const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
      if (querySnapshot.exists()) {
          return querySnapshot.data().myIngredients;
      }
      else {
          res.status(500).send('User not exist');
      }
  }
  catch (error) {
    res.status(500).send('Error getting myIngredients: ', error);
  }
};

const addUserIngredient = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            if (querySnapshot.data().myIngredients.some(ingredient => {
                return Object.values(ingredient).includes(parseInt(req.body.ingredientId)) ||
                    Object.values(ingredient).includes(req.body.ingredientName) })){
                res.status(500).send('User ingredient exist');
            }
            else {
                await updateDoc(doc(db, "users", req.body.userId), {
                    myIngredients: arrayUnion({id: parseInt(req.body.ingredientId), name: req.body.ingredientName})
                });
                res.status(200).send('Ingredient "'+ req.body.ingredientName +'" added to myIngredients.');
            }
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error insert ingredients: ', error);
    }
};

const removeUserIngredient = async (req, res) => {
    try {
        const querySnapshot = await getDoc(doc(db, "users", req.body.userId));
        if (querySnapshot.exists()) {
            if (querySnapshot.data().myIngredients.some(ingredient => {
                return Object.values(ingredient).includes(parseInt(req.body.ingredientId)) &&
                    Object.values(ingredient).includes(req.body.ingredientName) })){

                await updateDoc(doc(db, "users", req.body.userId), {
                    myIngredients: arrayRemove({id: parseInt(req.body.ingredientId), name: req.body.ingredientName})
                });
                res.status(200).send('Ingredient "'+ req.body.ingredientName +'" deleted to myIngredients.');
            }
            else {
                res.status(500).send('User ingredient not exist');
            }
        }
        else {
            res.status(500).send('User not exist');
        }
    }
    catch (error) {
        res.status(500).send('Error remove ingredients: ', error);
    }
};

const getUserRecipeList = async (req, res) => {

  try {
    let result = [];
    const users = collection(db, "users");
    const userInfo = query(users, where("userId", "==", req.body.id));
    const querySnapshot = await getDocs(userInfo);
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const selectedFields = {
          favoriteRecipes: docData.favoriteRecipes
      };
      result.push(selectedFields);
    });
    let recipes = [];
    const q = query(collection(db, "recipes"), where("id", "in", result));
    const recipeSnapshot = await getDocs(q);
    recipeSnapshot.docs.forEach((doc) => {
        const docData = doc.data();
        recipes.push(docData);
    });
    return recipes;
  } catch (error) {
    console.error('Error getting favoriteRecipes: ', error);
    res.status(500).send('Error getting favoriteRecipes');
  }
};

const addUserRecipe = async (req, res) => {
  try {
      const userDoc = await getDoc(doc(db, "users", req.body.userId));
      if (userDoc.exists()) {
          if (userDoc.data().favoriteRecipes.some(recipe => {
              return Object.values(recipe).includes(parseInt(req.body.recipeId)) })){
              res.status(500).send('User recipe exist');
          }
          else {
              const recipeDoc = await getDoc(doc(db, "recipes", req.body.recipeId));
              if (recipeDoc.exists()) {
                  await updateDoc(doc(db, "users", req.body.userId), {
                      favoriteRecipes: arrayUnion({id: parseInt(recipeDoc.data().id), title: recipeDoc.data().title,
                          image: recipeDoc.data().image, difficulty: recipeDoc.data().difficulty,
                          time_preparation: recipeDoc.data().time_preparation, time_cooking: recipeDoc.data().time_cooking })
                  });
                  res.status(201).send('Recipe added successfully');
              }
              else {
                  res.status(500).send('Recipe not exist');
              }
          }
      }
      else {
          res.status(500).send('User not exist');
      }
  }
  catch (error) {
      res.status(500).send('Error adding recipe');
  }
};

module.exports = {getUserInfo, getUserRecipeList, getUserIngredientList, addUserIngredient, addUserRecipe, removeUserIngredient, myKitchen};
