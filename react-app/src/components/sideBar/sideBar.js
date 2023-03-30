import { Link } from "react-router-dom";
import { HiOutlineHome } from 'react-icons/hi';
import { TbCheese } from 'react-icons/tb';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineKitchen } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from '../context/UserAuthC';



const Sidebar = () => {
    const[user, setUser] = useState({});
    const {logOut} = useAuth();
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const handleLogOut = async () => {
        await logOut();
    }
    return (
        <div className="sidebar">
            <div className="userImage">
                <img className="userImage" src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"></img>
            </div>
            <h3 className="hache">JUAN COCINERO</h3>
            <a>@juancocinero</a>
            <p className="sideBarLogOut">
                <button onClick={handleLogOut}><MdLogout></MdLogout> Log out</button>
                <hr></hr>
            </p>
            <ul>
                <li>
                    <Link to=""><HiOutlineHome></HiOutlineHome> Home</Link>
                </li>
                <li>
                    <Link to=""><BsPerson></BsPerson> Profile</Link>
                </li>
                <li>
                    <Link to=""><MdOutlineKitchen></MdOutlineKitchen> My Kitchen</Link>
                </li>
                <li>
                    <Link to=""><TbCheese></TbCheese> My Ingredients</Link>
                </li>
                <li>
                    <Link to=""><SlBasket></SlBasket> Shopping List</Link>
                </li>
                <li>
                    <Link to=""><AiOutlineHeart></AiOutlineHeart> My Favourites</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;