import React, { useEffect } from 'react';
import { Container } from "react-bootstrap"
import "./ubicacion.css"

const ubicacion = () => {
    useEffect(() => {
        const loadMap = () => {
            const map = new window.google.maps.Map(document.getElementById("map"), {
                center: { lat: 6.293878, lng: -75.594894 }, // Cambia por las coordenadas deseadas
                zoom: 15,
            });

            const marker = new window.google.maps.Marker({
                position: { lat: 6.293878, lng: -75.594894 }, // Coordenadas deseadas
                map: map,
                title: "Minimercado El Rubí",
            });
        };

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDPSRyX1e3pEaoYINLldyyJ74YGUqhYLs4&callback=initMap`;
        script.async = true;
        script.onload = loadMap;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <div className='fondo pb-2'>
                <Container fluid="lg">
                    <h1 className="my-2 text-center p-1">Ubicación</h1>
                    <div className="map-container">
                        <div id="map"></div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ubicacion