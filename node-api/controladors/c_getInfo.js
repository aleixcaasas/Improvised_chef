const { db } = require('../firebase/firebase-config');
const {query, collection, where, getDocs, getDoc} = require("firebase/firestore");

const getInfo = async function (req, res) {
    try{
        let result = [];
        const users = collection(db, "users");
        const userInfo = query(users, where("email", "==", req.body.user.email));
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
        console.log(result)
        return result;
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al fer fetch de random recipes!');
    }
  
};

module.exports = getInfo;
