import React from "react";
import DeleteAccountButton from '../components/login/deleteAccount';
export default function Profile() {
    return (
        <div className="page">
            AQUESTA SERÀ LA PÀGINA DEL PERFIL DE L'USUARI
            ES MOSTRARÀ A L'ESQUERRA EL SIDEBAR I TOTA LA PART DRETA DE LA PANTALLA HI HAURÀ EL PERFIL DE L'USUARI PER EDITAR LA INFO
          <DeleteAccountButton />
        </div>
    );

}