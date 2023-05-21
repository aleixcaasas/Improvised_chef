import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from "../components/sideBar/SideBar";
import DetailRecipe from '../components/detailRecipe/DetailRecipe';

export default function Recipe() {
    const location = useLocation();
    const [infoRecipe] = useState(location.state ? location.state.infoRecipe : null);

    return (
        <div className="page">
            <Sidebar />
            <DetailRecipe infoRecipe={infoRecipe} />
        </div>
    )
}


