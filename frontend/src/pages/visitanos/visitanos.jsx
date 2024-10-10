import React, { useEffect } from 'react';
import Navbar_ppal from "../../components/navbar_ppal/navbar_ppal";
import Ubicacion from '../../components/ubicacion/ubicacion';
import Horario from '../../components/horario/horario';
import Contacto from '../../components/contacto/contacto';

export const Visitamos = () => {
    return (
        <>
            <Navbar_ppal />
            <Ubicacion />
            <Horario />
            <Contacto />
        </>
    );
};

export default Visitamos;