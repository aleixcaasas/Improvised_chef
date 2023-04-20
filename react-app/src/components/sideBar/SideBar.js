import { Link, useNavigate } from "react-router-dom";
import { TbCheese } from 'react-icons/tb';
import { MdLogout, MdOutlineFavoriteBorder, MdOutlineShoppingCart, MdPersonOutline, MdOutlineHome, MdOutlineKitchen } from 'react-icons/md';
import { UserContext } from '../../pages/globalValue';
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import './sideBar.css';

const Sidebar = () => {
    const { user, setUser } = useContext(UserContext);    //const {logOut} = useAuth();
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const [response, setResponse] = useState(null)

    const navigation = useNavigate();

    const handleLogOut = async () => {
        //await axios.post('http://localhost:3700/logout', {user});
        setUser({ email: '' });
        navigation("/home");
    }

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await axios.post('http://localhost:3000/user/summary', { user: user });
                setResponse(response);
            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, []);
    


    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div className="user-div">
                    {response?.data && (
                        <>
                            <div className="image-div">
                                <Link to="/Profile"><img className="user-image" src={response.data[0].profilePic}></img></Link>
                            </div>
                            <Link to="/Profile"><h3 className="name">{response.data[0].fullName}</h3></Link>
                            <Link to="/Profile"><label className="username">@{response.data[0].userName}</label></Link>
                        </>                          
                    )}
                    {!response?.data && (
                        <>
                            <h1>Loading...</h1>
                        </>                       
                    )}
                    
                </div>
                <div className="logout-div">
                    <button onClick={handleLogOut}><MdLogout size={22}></MdLogout> <label>Sign Out</label></button>
                </div>
            </div>
            <div className="sidebar-bottom">
                <ul>
                    <Link to="/home"><li><MdOutlineHome size={30} /><label>Home</label></li></Link>


                    <Link to="/Profile"><li><MdPersonOutline size={30} /><label>Profile</label></li></Link>


                    <Link to="/MyKitchen"><li><MdOutlineKitchen size={30} /><label>My Kitchen</label></li></Link>


                    <Link to="/MyIngredients"><li><TbCheese size={30} /><label>My Ingredients</label></li></Link>


                    <Link to="/ShoppingList"><li><MdOutlineShoppingCart size={30} /><label>Shopping List</label></li></Link>


                    <Link to="/FavouriteRecipes"><li><MdOutlineFavoriteBorder size={30} /><label>My Favourites</label></li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar;

