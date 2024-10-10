import { Link } from "react-router-dom"
import "./estilosNavbarLogin.css"

const navbarLoginSingUp = () => {
  return (
    <nav id="loginNav">
      <div className="container-fluid text-center">
        <Link class="navbar-brand text-decoration-none fs-1 text-reset" to={"/"}>
          <img src="/src/assets/icons/logo.png" alt="Logo" width="80" height="80" className="d-inline-block align-text-center" />
          Minimercado El Rubí
        </Link>
      </div>
    </nav>
  )
}

export default navbarLoginSingUp