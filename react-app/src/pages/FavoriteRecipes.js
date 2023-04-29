import React from "react";
import Sidebar from "../components/sideBar/SideBar";

export default function FavouriteRecipes() {
    return (
        <div className="page">
            <Sidebar/>
            AQUESTA SERÀ LA PÀGINA DE LA LLISTA DE RECEPTES PREFERIDES
            ES MOSTRARÀ A L'ESQUERRA EL SIDEBAR I TOTA
            LA PART DRETA DE LA PANTALLA HI HAURÀ TOTES LES TARJETES DE LES RECEPTES PREFERIDES DE L'USUARI
        </div>
    );

}