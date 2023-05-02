import React from "react";
import Sidebar from "../components/sideBar/SideBar";
import MyKitchen from "../components/myKitchen/MyKitchen";


export default function MyKitchenPage() {
    return (
        <div className="page">
            <Sidebar/>
            <MyKitchen/>
        </div>
    );

}