import './sideBar.css';
import axios from "axios";
import { FaBars } from 'react-icons/fa';
import { TbCheese } from 'react-icons/tb';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MdLogout, MdOutlineFavoriteBorder, MdOutlineShoppingCart, MdPersonOutline, MdOutlineHome, MdOutlineKitchen } from 'react-icons/md';

const Sidebar = (props) => {
    const [response, setResponse] = useState(null)
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    const navigation = useNavigate();
    const location = useLocation();

    const handleLogOut = async () => {
        await axios.get('http://localhost:3000/logout'); //ESBORREM LA COOKIE
        if (location.pathname === '/home') {
            window.location.reload();
        }
        else {
            navigation("/home");
        }
    }

    useEffect(() => {
        const getInfo = async () => {
            try {
                // eslint-disable-next-line
                const userBO = await axios.get('http://localhost:3000/user');
                const response = await axios.post('http://localhost:3000/user/summary', {});
                setResponse(response);

            } catch (error) {
                console.log(error);
            }
        }
        getInfo();
    }, []);



    return (
        <>
            <div className="openIconDiv">
                <Link to='#' className="openIcon">
                    <FaBars onClick={showSidebar}></FaBars>
                </Link>
            </div>
            <div className='sidebar'>
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


                        <Link to="/FavoriteRecipes"><li><MdOutlineFavoriteBorder size={30} /><label>My Favorites</label></li></Link>
                    </ul>
                </div>

            </div>
            <div className={sidebar ? 'desplegable' : 'desplegable active'}>
                <div className="closeIconDiv">
                    <Link to='#' className="closeIcon">
                        <AiOutlineClose onClick={showSidebar}></AiOutlineClose>
                    </Link>
                </div>
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


                        <Link to="/FavoriteRecipes"><li><MdOutlineFavoriteBorder size={30} /><label>My Favourites</label></li></Link>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Sidebar;

