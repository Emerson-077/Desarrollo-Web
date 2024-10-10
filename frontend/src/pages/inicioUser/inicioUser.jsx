import Navbar_user from "../../components/navbar_user/navbar_user"
import CarouselPpal from "../../components/carouselPpal/carouselPpal"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./inicioUser.css"
import { Card } from "react-bootstrap";

const inicioUser = () => {
  return (
    <>
      <Navbar_user/>
      <CarouselPpal/>
      <div className="contenedor pb-2">
        <section className="container-expand-lg my-2 text-center p-1 secciones">
            <h1>Productos Nuevos</h1>
        </section>

        <div id="carouselExampleFade2" className="carousel slide carousel-fade mx-auto m-4 p-3" data-bs-theme="dark">
          <div className="carousel-inner w-75 mx-auto">
            <div className="carousel-item active d-flex justify-content-center text-center gap-5">
              <div className="card carta">
                <img src="/src/assets/imgs/7709032858919.png" alt="" className="mx-auto my-1" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <h5 className="card-title">Marca</h5>
                  <p className="card-text fs-5">Precio</p>
                  <button className="btn btn-primary">Marcar como Favorito</button>
                </div>
              </div>

              <div className="card carta ">
                <img src="/src/assets/imgs/7709032858919.png" alt="" className="mx-auto my-1" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <h5 className="card-title">Marca</h5>
                  <p className="card-text fs-5">Precio</p>
                  <button className="btn btn-primary">Marcar como Favorito</button>
                </div>
              </div>

              <div className="card carta">
                <img src="/src/assets/imgs/7709032858919.png" alt="" className="mx-auto my-1" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <h5 className="card-title">Marca</h5>
                  <p className="card-text fs-5">Precio</p>
                  <button className="btn btn-primary">Marcar como Favorito</button>
                </div>
              </div>

            </div>
            <div className="carousel-item d-flex justify-content-center text-center gap-5">
              <div className="card carta">
                <img src="/src/assets/imgs/Salsa-rosada-200g-07706667047107_A1N1.png" alt="" className="mx-auto my-1" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <h5 className="card-title">Marca</h5>
                  <p className="card-text fs-5">Precio</p>
                  <button className="btn btn-primary">Marcar como Favorito</button>
                </div>
              </div>

              <div className="card carta">
                <img src="/src/assets/imgs/Salsa-rosada-200g-07706667047107_A1N1.png" alt="" className="mx-auto my-1" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <h5 className="card-title">Marca</h5>
                  <p className="card-text fs-5">Precio</p>
                  <button className="btn btn-primary">Marcar como Favorito</button>
                </div>
              </div>

              <div className="card carta">
                <img src="/src/assets/imgs/Salsa-rosada-200g-07706667047107_A1N1.png" alt="" className="mx-auto my-1" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <h5 className="card-title">Marca</h5>
                  <p className="card-text fs-5">Precio</p>
                  <button className="btn btn-primary">Marcar como Favorito</button>
                </div>
              </div>

            </div>
            <div className="carousel-item d-flex justify-content-center text-center gap-5">
              <div className="card carta">
                <img src="/src/assets/imgs/Aceite-Vegetal-de-Soya-250ml.png" alt="" className="mx-auto my-1" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <h5 className="card-title">Marca</h5>
                  <p className="card-text fs-5">Precio</p>
                  <button className="btn btn-primary">Marcar como Favorito</button>
                </div>
              </div>

              <div className="card carta">
                <img src="/src/assets/imgs/Aceite-Vegetal-de-Soya-250ml.png" alt="" className="mx-auto my-1" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <h5 className="card-title">Marca</h5>
                  <p className="card-text fs-5">Precio</p>
                  <button className="btn btn-primary">Marcar como Favorito</button>
                </div>
              </div>

              <div className="card carta">
                <img src="/src/assets/imgs/Aceite-Vegetal-de-Soya-250ml.png" alt="" className="mx-auto my-1" />
                <div className="card-body">
                  <h5 className="card-title">Nombre del Producto</h5>
                  <h5 className="card-title">Marca</h5>
                  <p className="card-text fs-5">Precio</p>
                  <button className="btn btn-primary">Marcar como Favorito</button>
                </div>
              </div>

            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <section className="container-expand-lg my-2 text-center p-1 secciones">
            <h1>Productos Frecuentes</h1>
        </section>

        <Carousel data-bs-theme="dark" indicators={false} className="mx-auto" interval={null}>
          <Carousel.Item>
          <div className="d-flex gap-3 justify-content-center">
              <Card style={{ width: '18rem', background: "none"}} className="text-black text-center">
                <Card.Img variant="top" src="/src/assets/imgs/Aceite-Vegetal-de-Soya-250ml.png" className="mx-auto"/>
                <Card.Body>
                  <Card.Title>Nombre del Producto</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', background: "none"}} className="text-black text-center">
                <Card.Img variant="top" src="/src/assets/imgs/Aceite-Vegetal-de-Soya-250ml.png" className="mx-auto"/>
                <Card.Body>
                  <Card.Title>Nombre del Producto</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', background: "none"}} className="text-black text-center">
                <Card.Img variant="top" src="/src/assets/imgs/Aceite-Vegetal-de-Soya-250ml.png" className="mx-auto"/>
                <Card.Body>
                  <Card.Title>Nombre del Producto</Card.Title>
                </Card.Body>
              </Card>
            </div>
        
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex gap-3 justify-content-center">
              <Card style={{ width: '18rem', background: "none"}} className="text-black text-center">
                <Card.Img variant="top" src="/src/assets/imgs/Salsa-rosada-200g-07706667047107_A1N1.png" className="mx-auto"/>
                <Card.Body>
                  <Card.Title>Nombre del Producto</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', background: "none"}} className="text-black text-center">
                <Card.Img variant="top" src="/src/assets/imgs/Salsa-rosada-200g-07706667047107_A1N1.png" className="mx-auto"/>
                <Card.Body>
                  <Card.Title>Nombre del Producto</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', background: "none"}} className="text-black text-center">
                <Card.Img variant="top" src="/src/assets/imgs/Salsa-rosada-200g-07706667047107_A1N1.png" className="mx-auto"/>
                <Card.Body>
                  <Card.Title>Nombre del Producto</Card.Title>
                </Card.Body>
              </Card>
            </div>
        
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex gap-3 justify-content-center">
              <Card style={{ width: '18rem', background: "none"}} className="text-black text-center">
                <Card.Img variant="top" src="/src/assets/imgs/7709032858919.png" className="mx-auto"/>
                <Card.Body>
                  <Card.Title>Nombre del Producto</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', background: "none"}} className="text-black text-center">
                <Card.Img variant="top" src="/src/assets/imgs/7709032858919.png" className="mx-auto"/>
                <Card.Body>
                  <Card.Title>Nombre del Producto</Card.Title>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem', background: "none"}} className="text-black text-center">
                <Card.Img variant="top" src="/src/assets/imgs/7709032858919.png" className="mx-auto"/>
                <Card.Body>
                  <Card.Title>Nombre del Producto</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
        
      </div>

    </>

  )
}

export default inicioUser