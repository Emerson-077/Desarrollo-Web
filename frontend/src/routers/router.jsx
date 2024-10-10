import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/landingPage/landingPage"
import Login from "../pages/login/login"
import Iniciouser from "../pages/inicioUser/inicioUser"
import Registro from "../pages/registroUser/registro"
import Corporativo from "../pages/corporativo/corporativo"
import Visitanos from "../pages/visitanos/visitanos"
import Olvidar_Contraseña from "../pages/olvidar_contraseña/olvidar_contraseña"
import Olvidar_usuario from "../pages/olvidar_usuario/olvidar_usuario"
import Visitanos_login from "../pages/visitanos_login/visitanos_login"
import Corporativo_login from "../pages/corporativo_login/corporativo_login"
import MiCuenta from "../pages/MiCuenta/MiCuenta"
import Favoritos from "../pages/Favoritos/Favoritos"
import "bootstrap"
const router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Inicio" element={<Iniciouser/>}/>
      <Route path="/Registro" element={<Registro/>}/>
      <Route path="/Corporativo" element={<Corporativo/>}/>
      <Route path="/Visitanos" element={<Visitanos/>}/>
      <Route path="/Olvidar_Contraseña" element={<Olvidar_Contraseña/>}/>
      <Route path="/Olvidar_usuario" element={<Olvidar_usuario />}/>
      <Route path="/Visitanos_login" element={<Visitanos_login/>}/>
      <Route path="/Corporativo_login" element={<Corporativo_login/>}/>
      <Route path="/MiCuenta" element={<MiCuenta/>} />
      <Route path="/Favoritos" element={<Favoritos/>} />
    </Routes>
  )
}

export default router