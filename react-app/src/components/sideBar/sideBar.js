import { Link } from "react-router-dom";
import { TbCheese } from 'react-icons/tb';
import { MdLogout, MdOutlineFavoriteBorder, MdOutlineShoppingCart, MdPersonOutline, MdOutlineHome, MdOutlineKitchen } from 'react-icons/md';
import { useState } from "react";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from '../login/UserAuthC';
import './sideBar.css';



const Sidebar = () => {
    const [user, setUser] = useState({});
    //const {logOut} = useAuth();
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    /*const handleLogOut = async () => {
        await logOut();
    }*/
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div className="user-div">
                    <div className="image-div">
                        <img className="user-image" src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"></img>
                    </div>
                    <h3 className="name">JUAN COCINERO</h3>
                    <a className="username">@juancocinero</a>
                </div>
                <div className="logout-div">
                    <button /*onClick={handleLogOut}*/><MdLogout size={22}></MdLogout> <label>Sign Out</label></button>
                </div>
            </div>
            <div className="sidebar-bottom">
                <ul>
                    <Link to=""><li><MdOutlineHome size={30} /><label>Home</label></li></Link>


                    <Link to=""><li><MdPersonOutline size={30} /><label>Profile</label></li></Link>


                    <Link to=""><li><MdOutlineKitchen size={30} /><label>My Kitchen</label></li></Link>


                    <Link to=""><li><TbCheese size={30} /><label>My Ingredients</label></li></Link>


                    <Link to=""><li><MdOutlineShoppingCart size={30} /><label>Shopping List</label></li></Link>


                    <Link to=""><li><MdOutlineFavoriteBorder size={30} /><label>My Favourites</label></li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar;