import React from "react";
import Sidebar from "../components/sideBar/SideBar";
import UserProfile from "../components/userProfile/UserProfile";

export default function Profile() {
    return (
        <div className="page">
            <Sidebar />
            <UserProfile />
        </div>
    );

}