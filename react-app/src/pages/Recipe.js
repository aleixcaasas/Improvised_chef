import Sidebar from "../components/sideBar/SideBar";
import { useLocation } from 'react-router-dom';

export default function Recipe() {
    const location = useLocation();
    const { infoRecipe } = location.state;

    //console.log('a', infoRecipe);

    return (
        <div>
            <div className="receipt_container">
                <h2>Recipe</h2>
            </div>
            <Sidebar></Sidebar>
        </div>
    )
}


