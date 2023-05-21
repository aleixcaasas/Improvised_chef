import React from "react";
import Sidebar from "../components/sideBar/SideBar";
import MyIngredients from "../components/myIngredients/MyIngredients";

export default function MyIngredientsPage() {
    return (
        <div className="page">
            <Sidebar />
            <MyIngredients />
        </div>
    );

}