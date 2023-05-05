import React from "react";
import Sidebar from "../components/sideBar/SideBar";
import ShoppingList from "../components/shoppingList/ShoppingList";

export default function ShoppingListPage() {
    return (
        <div className="page">
            <Sidebar/>
            <ShoppingList/>
        </div>
    );

}