import React from "react";
import "./estilosLogin.css";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import NavbarLoginSingUp from "../../components/navbar_login_singUp/navbarLoginSingUp";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate(); // Instancia de useNavigate

    return (
        <>
            <NavbarLoginSingUp />
            <section className="container-fluid d-flex align-items-center justify-content-center ppal">
                <div className="login w-50 text-center">
                    <h1>Iniciar Sesión</h1>
                    <Formik
                        initialValues={{
                            usuario: '',
                            nombre: "",
                            password: "",
                            tipoUsuario: ""
                        }}

                        validate={(valores) => {
                            let errores = {};

                            if (!valores.nombre) {
                                errores.nombre = 'Por favor ingrese un nombre';
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                                errores.nombre = 'El nombre solo puede contener letras y espacios';
                            }

                            if (!valores.usuario) {
                                errores.usuario = 'Por favor ingrese un nombre de usuario';
                            } else if (!/^[a-zA-Z0-9_.+-]{4,16}$/.test(valores.usuarioCliente)) {
                                errores.usuario = 'El usuario solo puede contener letras, números y algunos caracteres especiales, y debe tener entre 4 y 16 caracteres';
                            }

                            if (!valores.password) {
                                errores.password = 'Por favor ingrese una contraseña';
                            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(valores.password)) {
                                errores.password = "La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.";
                            }

                            if (!valores.tipoUsuario) {
                                errores.tipoUsuario = 'Por favor selecciona tu tipo de usuario';
                            }

                            return errores;
                        }}

                        onSubmit={(valores, { resetForm }) => {
                            
                            resetForm();

                            // Redirigir a la página de inicio solo si no hay errores
                            // Asegúrate de que esto se ejecuta solo si todo está bien
                            navigate('/Inicio');
                            
                        }}
                    >
                        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                            <form
                                className="bg-white rounded p-5 row g-3 m-2 d-block needs-validation"
                                id="login"
                                onSubmit={handleSubmit} // onSubmit dispara el evento para enviar el formulario
                                noValidate
                            >
                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="text"
                                        className={`form-control ${touched.nombre && (errors.nombre ? 'is-invalid' : 'is-valid')}`}
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Ingresa tu nombre"
                                        value={values.nombre}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.nombre && errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="nombreUsuario">@</span>
                                        <input
                                            type="text"
                                            className={`form-control ${touched.usuario && (errors.usuario ? 'is-invalid' : 'is-valid')}`}
                                            id="usuario"
                                            name="usuario"
                                            aria-describedby="nombreUsuario"
                                            placeholder="Ingresa tu usuario"
                                            value={values.usuario}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required
                                        />
                                        {touched.usuario && errors.usuario && <div className="invalid-feedback">{errors.usuario}</div>}
                                    </div>
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <select
                                        id="tipoUsuario"
                                        name="tipoUsuario"
                                        className={`form-select ${touched.tipoUsuario && (errors.tipoUsuario ? 'is-invalid' : 'is-valid')}`}
                                        value={values.tipoUsuario}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    >
                                        <option value="" disabled>Selecciona tu tipo de usuario...</option>
                                        <option value="empleado">Empleado</option>
                                        <option value="cliente">Cliente</option>
                                    </select>
                                    {touched.tipoUsuario && errors.tipoUsuario && <div className="invalid-feedback">{errors.tipoUsuario}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="password"
                                        className={`form-control ${touched.password && (errors.password ? 'is-invalid' : 'is-valid')}`}
                                        id="password"
                                        name="password"
                                        placeholder="Ingresa tu contraseña"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                </div>

                                <div className="col-md-4 mx-auto">
                                    {/* Botón para enviar el formulario */}
                                    <button className="btn btn-primary" type="submit">Ingresar</button>
                                </div>

                                <div className="col-md-4 mx-auto">
                                    <Link className="enlace d-block" to="/Registro">Crear Usuario</Link>
                                    <Link className="enlace d-block" to="/Olvidar_Contraseña">¿Olvidaste tu contraseña?</Link>
                                    <Link className="enlace d-block" to="/Olvidar_usuario">¿Olvidaste tu usuario?</Link>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    );
};

export default Login;
