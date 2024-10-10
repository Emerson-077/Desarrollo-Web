import { Link } from "react-router-dom"
import "./estilosNavbarPpal.css"

const navbar_ppal = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="text-decoration-none fs-1 text-reset" to={"/"}><img src="/src/assets/icons/logo.png" alt="Logo" width="80" height="80" className="d-inline-block" />
          Minimercado El Rubí</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNavAltMarkup">
          <div className="navbar-nav links">

            <Link className="nav-link mx-2 fs-5 text-center" to={"/Favoritos"}>
              <img src="/src/assets/icons/favoritos.png" alt="wishList" width="40" height="40" className="d-block mx-auto" />
              Favoritos
            </Link>



            <Link className="nav-link mx-2 fs-5 text-center" to={"/Visitanos"}>
              <img src="/src/assets/icons/visitanos.png" alt="wishList" width="40" height="40" className="d-block mx-auto" />
              Visítanos
            </Link>



            <Link className="nav-link mx-2 fs-5 text-center" to={"/Login"}>
              <img src="/src/assets/icons/micuenta.png" alt="wishList" width="40" height="40" className="d-block mx-auto" />
              Mi Cuenta
            </Link>




            <Link className="nav-link mx-2 fs-5 text-center" to={"/Corporativo"}>
              <img src="/src/assets/icons/corporativo.png" alt="wishList" width="40" height="40" className="d-block mx-auto" />
              Corporativo
            </Link>


          </div>
        </div>
      </div>
    </nav>

  )
}

export default navbar_ppal