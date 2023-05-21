import Sidebar from "../components/sideBar/SideBar";
import { useLocation } from 'react-router-dom';
import DetailRecipe from '../components/detailRecipe/DetailRecipe'
import React, { useState } from 'react';

export default function Recipe() {
    const location = useLocation();
    const [infoRecipe, setInfoRecipe] = useState(location.state ? location.state.infoRecipe : null);

    return (
        <div className="page">
            <Sidebar/>
            <DetailRecipe infoRecipe={infoRecipe}/>
        </div>
    )
}


