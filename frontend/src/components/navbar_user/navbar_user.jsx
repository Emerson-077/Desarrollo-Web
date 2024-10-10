
import {Link} from "react-router-dom"
import "./navbar_user.css"
import "bootstrap"
const navbar_user = () => {
  return (
    <>
        <nav className="navbar">
            <div className="container-fluid d-flex justify-content-between">
                <Link className="navbar-brand text-decoration-none fs-1 text-reset" to={"/Inicio"}>
                <img src="/src/assets/icons/logo.png" alt="Logo" width="80" height="80" className="d-inline-block align-text-center" />
                Minimercado El Rubí
                </Link>
                <div className="d-flex gap-5">
                    <h1 className='text-center'>Bienvenido, <span id='nombreCliente'>Emerson Atehortua</span></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header cabecera">
                <h2 className="offcanvas-title text-center" id="offcanvasRightLabel">Menú de Navegación</h2>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body cuerpo">
                <div className="d-block">
                    <Link to={"/MiCuenta"} className="d-flex align-items-center text-reset gap-2 text-decoration-none mb-3">
                    <img src="/src/assets/icons/micuenta.png" alt="wishList" width="40" height="40"  />
                    <h3>Mi Perfil</h3>
                    </Link>
                    <Link to={"/Favoritos"} className="d-flex align-items-center text-reset gap-2 text-decoration-none mb-3">
                    <img src="/src/assets/icons/favoritos.png" alt="wishList" width="40" height="40" />
                    <h3>Mis Favoritos</h3>
                    </Link>
                    <Link to={"/Corporativo_login"} className="d-flex align-items-center text-reset gap-2 text-decoration-none mb-3">
                    <img src="/src/assets/icons/corporativo.png" alt="wishList" width="40" height="40"  />
                    <h3>Corporativo</h3>
                    </Link>
                    <Link to={"/Visitanos_login"} className="d-flex align-items-center text-reset gap-2 text-decoration-none mb-3">
                    <img src="/src/assets/icons/visitanos.png" alt="wishList" width="40" height="40"  />
                    <h3>Visítanos</h3>
                    </Link>
                    <Link to={"/"} className="d-flex align-items-center text-reset gap-2 text-decoration-none mb-3">
                    <img src="/src/assets/icons/cerrar-sesion.png" alt="wishList" width="40" height="40"  />
                    <h3>Cerrrar Sesión</h3>
                    </Link>
                </div>    
                
            </div>
        </div>
    </>
  )
}

export default navbar_user