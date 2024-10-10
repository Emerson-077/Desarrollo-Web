import Navbar_ppal from "../../components/navbar_ppal/navbar_ppal"
import 'bootstrap/dist/css/bootstrap.css'
import "./estilosLandingPage.css"
import "bootstrap/js/dist/carousel.js"
import CarouselPpal from "../../components/carouselPpal/carouselPpal"

const landingPage = () => {
  return (
    <>
      <Navbar_ppal />
      <CarouselPpal/>
      <div className="pb-2 contenedor">

        <section className="container-expand-lg my-2 text-center p-1 secciones">
          <h2>Productos Más Vendidos</h2>
        </section>


        <div id="carouselExampleFade" className="carousel carousel-dark slide carousel-fade mx-auto m-4 bg-white p-3">
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
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <section className="container-expand-lg my-2 text-center p-1 secciones">
          <h2>Marcas Aliadas</h2>
        </section>

        <div id="carouselExample" className="carousel carousel-dark slide mx-auto m-4 p-3">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center gap-5 align-items-center">
                <img src="/src/assets/imgs/logo_familia.png" alt="" className="marcas" />
                <img src="/src/assets/imgs/logo-saltin-noel.png" alt="" className="marcas" />
                <img src="/src/assets/imgs/logo.png" alt="" className="marcas" />
                <img src="/src/assets/imgs/el trece.png" alt="" className="marcas" />
              </div>

            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center gap-5 align-items-center">
                <img src="/src/assets/imgs/logo_diana.png" alt="" className="marcas" />
                <img src="/src/assets/imgs/logo pag-01.png" alt="" className="marcas" />
                <img src="/src/assets/imgs/Logo-con-fondo-1-300x208.png" alt="" className="marcas" />
                <img src="/src/assets/imgs/logo-yupi.png" alt="" className="marcas" />
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <section className="container-expand-lg my-2 text-center p-1 secciones">
          <h2>Ofertas de la Semana</h2>
        </section>

        <div id="Ofertas" className="carousel slide mx-auto m-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src="/src/assets/imgs/banner_1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="/src/assets/imgs/banner_2.png" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default landingPage