import Sidebar from "../components/sideBar/SideBar";
import { useLocation } from 'react-router-dom';
import DetailRecipe from '../components/detailRecipe/DetailRecipe'

export default function Recipe() {
    const location = useLocation();
    const { infoRecipe } = location.state;

    //console.log('a', infoRecipe);

    return (
        <div className="page">
            <Sidebar/>
            <DetailRecipe/>

        </div>
    )
}


