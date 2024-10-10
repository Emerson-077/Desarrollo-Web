import { Container } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import "./mision_vision_valores.css"
import React from "react";

const mision_vision_valores = () => {
    return (
        <>
            <div className="pb-2 contenedor" id="frameCorp">
                <Container fluid="x-xl" className="p-2 w-75 mx-auto mt-3">
                    <h1 className="my-2 text-center">Misión</h1>
                    <p className="w-75 mx-auto bg-white rounded p-3 shadow mb-4 fs-5">
                        Nuestra misión es ofrecer a la comunidad una amplia variedad de productos de
                        alta calidad a precios competitivos, brindando un servicio cercano y eficiente
                        que facilite las compras diarias de nuestros clientes. Nos enfocamos en satisfacer
                        sus necesidades con productos frescos, accesibles y con una atención personalizada,
                        siempre buscando mejorar su experiencia de compra.
                    </p>
                </Container>
                <Container fluid="x-xl" className="p-2 w-75 mx-auto " >
                    <h1 className="my-2 text-center">Visión</h1>
                    <p className="w-75 mx-auto bg-white rounded shadow p-3 mb-4 fs-5">
                        Ser el minimercado de referencia en la comunidad, reconocido por la calidad de nuestros
                        productos y el excelente servicio al cliente. Aspiramos a crecer continuamente, ampliando
                        nuestra oferta y adoptando soluciones tecnológicas innovadoras para mejorar la experiencia
                        de nuestros clientes y optimizar nuestros procesos internos. Nos vemos como un actor clave
                        en el desarrollo del comercio local, promoviendo una cultura de confianza y lealtad.
                    </p>
                </Container>

                <Container fluid="x-xl" className="p-2 w-75 mx-auto " >
                    <h1 className="my-2 text-center">Valores</h1>
                    <ListGroup as="ol" numbered className="w-75 mx-auto bg-white rounded shadow mb-4 fs-5">
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Calidad</div>
                                Nos comprometemos a ofrecer productos que cumplan con los más altos estándares.
                            </div>

                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Servicio al Cliente</div>
                                Valoramos la atención personalizada y la satisfacción del cliente.
                            </div>

                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Innovación</div>
                                Apostamos por la mejora continua y la adopción de nuevas tecnologías.
                            </div>

                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Responsabilidad</div>
                                Fomentamos el compromiso con la comunidad y el entorno.
                            </div>

                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Transparencia</div>
                                Actuamos con honestidad en todas nuestras operaciones comerciales.
                            </div>

                        </ListGroup.Item>
                    </ListGroup>
                </Container>

            </div>

        </>
    )
}
export default mision_vision_valores