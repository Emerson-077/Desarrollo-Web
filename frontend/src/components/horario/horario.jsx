import "./horario.css"
import React from "react"

const horario = () => {
    return (
        <div className="fondo">
            <div className="horarios-container">
                <h2>Horarios de Atención</h2>
                <ul>
                    <li>Lunes a Viernes: 8:00 AM - 8:00 PM</li>
                    <li>Sábado: 9:00 AM - 9:00 PM</li>
                    <li>Domingo: Cerrado</li>
                    <li>Festivos: 9:00 AM - 6:00 PM</li>
                </ul>
            </div>
        </div>

    )

}
export default horario