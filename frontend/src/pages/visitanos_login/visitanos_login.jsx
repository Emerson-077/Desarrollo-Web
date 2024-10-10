import React, { useEffect } from 'react';
import Navbar_user from "../../components/navbar_user/navbar_user";
import Ubicacion from '../../components/ubicacion/ubicacion';
import Horario from '../../components/horario/horario';
import Contacto from '../../components/contacto/contacto';

export const Visitamos = () => {
    return (
        <>
            <Navbar_user />
            <Ubicacion />
            <Horario />
            <Contacto />
        </>
    );
};

export default Visitamos;