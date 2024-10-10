import "./contacto.css";
import React from "react";

const Contacto = () => {
    return (
        <div className="fondo">
            <div className="contacto-container">
                <h2>Teléfono y Medios de Contacto</h2>
                <ul>
                    <li>Teléfono: <a href="tel:+123456789">+1 234 567 89</a></li>
                    <li>Correo Electrónico: <a href="mailto:info@minimercadoelrubí.com">info@minimercadoelrubí.com</a></li>
                    <li>
                        Formulario de Contacto:
                        <a href="/formulario" className="form-link"> Haz clic aquí</a>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default Contacto;
