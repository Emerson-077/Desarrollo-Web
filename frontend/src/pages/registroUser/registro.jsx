import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavbarLoginSingUp from '../../components/navbar_login_singUp/navbarLoginSingUp';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

function Example() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <NavbarLoginSingUp />
            <section className="container-fluid d-flex align-items-center justify-content-center ppal">
                <div className="login w-50 text-center">
                    <h1>Registrarse</h1>
                    <Formik
                        initialValues={{
                            idCliente: '',
                            nombreCliente: '',
                            apellidoCliente: '',
                            fechaNacimiento: '',
                            direccionResidencia: '',
                            barrioResidencia: '',
                            correoCliente: '',
                            numeroTelefono: '',
                            usuarioCliente: '',
                            contraseñaCliente: '',
                        }}

                        validate={(valores) => {
                            let errores = {};

                            // Validación idCliente (cédula colombiana)
                            if (!valores.idCliente) {
                                errores.idCliente = 'Por favor ingrese su cédula';
                            } else if (!/^\d{6,10}$/.test(valores.idCliente)) {
                                errores.idCliente = 'La cédula debe tener entre 6 y 10 dígitos';
                            }

                            // Validación nombreCliente
                            if (!valores.nombreCliente) {
                                errores.nombreCliente = 'Por favor ingrese su nombre';
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreCliente)) {
                                errores.nombreCliente = 'El nombre solo puede contener letras y espacios';
                            }

                            // Validación apellidoCliente
                            if (!valores.apellidoCliente) {
                                errores.apellidoCliente = 'Por favor ingrese su apellido';
                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidoCliente)) {
                                errores.apellidoCliente = 'El apellido solo puede contener letras y espacios';
                            }

                            // Validación fechaNacimiento
                            if (!valores.fechaNacimiento) {
                                errores.fechaNacimiento = 'Por favor ingrese su fecha de nacimiento';
                            }

                            // Validación direccionResidencia
                            if (!valores.direccionResidencia) {
                                errores.direccionResidencia = 'Por favor ingrese su dirección de residencia';
                            }

                            // Validación barrioResidencia
                            if (!valores.barrioResidencia) {
                                errores.barrioResidencia = 'Por favor ingrese su barrio de residencia';
                            }

                            // Validación correoCliente
                            if (!valores.correoCliente) {
                                errores.correoCliente = 'Por favor ingrese su correo electrónico';
                            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correoCliente)) {
                                errores.correoCliente = 'Ingrese un correo electrónico válido';
                            }

                            // Validación numeroTelefono
                            if (!valores.numeroTelefono) {
                                errores.numeroTelefono = 'Por favor ingrese su número de teléfono';
                            } else if (!/^\d{7,10}$/.test(valores.numeroTelefono)) {
                                errores.numeroTelefono = 'El número de teléfono debe tener entre 7 y 10 dígitos';
                            }

                            // Validación usuarioCliente
                            if (!valores.usuarioCliente) {
                                errores.usuarioCliente = 'Por favor ingrese un nombre de usuario';
                            } else if (!/^[a-zA-Z0-9_.+-]{4,16}$/.test(valores.usuarioCliente)) {
                                errores.usuarioCliente = 'El usuario solo puede contener letras, números y algunos caracteres especiales, y debe tener entre 4 y 16 caracteres';
                            }

                            // Validación contraseñaCliente
                            if (!valores.contraseñaCliente) {
                                errores.contraseñaCliente = 'Por favor ingrese una contraseña';
                            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(valores.contraseñaCliente)) {
                                errores.contraseñaCliente = "La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.";
                            }

                            return errores;
                        }}

                        onSubmit={(valores, { resetForm }) => {
                            resetForm();
                            handleShow
                            
                        }}
                    >
                        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                            <form
                                className="bg-white rounded p-5 row g-3 m-2 d-block needs-validation"
                                id="registro"
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="text"
                                        className={`form-control ${touched.idCliente && (errors.idCliente ? 'is-invalid' : 'is-valid')}`}
                                        id="idCliente"
                                        name="idCliente"
                                        placeholder="Cédula"
                                        value={values.idCliente}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.idCliente && errors.idCliente && <div className="invalid-feedback">{errors.idCliente}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="text"
                                        className={`form-control ${touched.nombreCliente && (errors.nombreCliente ? 'is-invalid' : 'is-valid')}`}
                                        id="nombreCliente"
                                        name="nombreCliente"
                                        placeholder="Nombre"
                                        value={values.nombreCliente}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.nombreCliente && errors.nombreCliente && <div className="invalid-feedback">{errors.nombreCliente}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="text"
                                        className={`form-control ${touched.apellidoCliente && (errors.apellidoCliente ? 'is-invalid' : 'is-valid')}`}
                                        id="apellidoCliente"
                                        name="apellidoCliente"
                                        placeholder="Apellido"
                                        value={values.apellidoCliente}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.apellidoCliente && errors.apellidoCliente && <div className="invalid-feedback">{errors.apellidoCliente}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="date"
                                        className={`form-control ${touched.fechaNacimiento && (errors.fechaNacimiento ? 'is-invalid' : 'is-valid')}`}
                                        id="fechaNacimiento"
                                        name="fechaNacimiento"
                                        value={values.fechaNacimiento}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.fechaNacimiento && errors.fechaNacimiento && <div className="invalid-feedback">{errors.fechaNacimiento}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="text"
                                        className={`form-control ${touched.direccionResidencia && (errors.direccionResidencia ? 'is-invalid' : 'is-valid')}`}
                                        id="direccionResidencia"
                                        name="direccionResidencia"
                                        placeholder="Dirección de residencia"
                                        value={values.direccionResidencia}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.direccionResidencia && errors.direccionResidencia && <div className="invalid-feedback">{errors.direccionResidencia}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="text"
                                        className={`form-control ${touched.barrioResidencia && (errors.barrioResidencia ? 'is-invalid' : 'is-valid')}`}
                                        id="barrioResidencia"
                                        name="barrioResidencia"
                                        placeholder="Barrio de residencia"
                                        value={values.barrioResidencia}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.barrioResidencia && errors.barrioResidencia && <div className="invalid-feedback">{errors.barrioResidencia}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="email"
                                        className={`form-control ${touched.correoCliente && (errors.correoCliente ? 'is-invalid' : 'is-valid')}`}
                                        id="correoCliente"
                                        name="correoCliente"
                                        placeholder="Correo electrónico"
                                        value={values.correoCliente}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.correoCliente && errors.correoCliente && <div className="invalid-feedback">{errors.correoCliente}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="text"
                                        className={`form-control ${touched.numeroTelefono && (errors.numeroTelefono ? 'is-invalid' : 'is-valid')}`}
                                        id="numeroTelefono"
                                        name="numeroTelefono"
                                        placeholder="Teléfono"
                                        value={values.numeroTelefono}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.numeroTelefono && errors.numeroTelefono && <div className="invalid-feedback">{errors.numeroTelefono}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="text"
                                        className={`form-control ${touched.usuarioCliente && (errors.usuarioCliente ? 'is-invalid' : 'is-valid')}`}
                                        id="usuarioCliente"
                                        name="usuarioCliente"
                                        placeholder="Usuario"
                                        value={values.usuarioCliente}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.usuarioCliente && errors.usuarioCliente && <div className="invalid-feedback">{errors.usuarioCliente}</div>}
                                </div>

                                <div className="col-md-6 mx-auto">
                                    <input
                                        type="password"
                                        className={`form-control ${touched.contraseñaCliente && (errors.contraseñaCliente ? 'is-invalid' : 'is-valid')}`}
                                        id="contraseñaCliente"
                                        name="contraseñaCliente"
                                        placeholder="Contraseña"
                                        value={values.contraseñaCliente}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    {touched.contraseñaCliente && errors.contraseñaCliente && <div className="invalid-feedback">{errors.contraseñaCliente}</div>}
                                </div>

                                <div className="col-md-4 mx-auto">
                                    {/* Botón para enviar el formulario */}
                                    {/* <button className="btn btn-primary" type="submit">Registrarse</button> */}
                                    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                                    Launch vertically centered modal
                                    </Button> */}
                                    <Button variant="primary" type='submit'>
                                        Registrarse
                                    </Button>

                                </div>


                            </form>
                        )}
                    </Formik>
                </div>
            </section>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje de Éxito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-success">
                        <i className="bi bi-check-circle-fill" style={{ fontSize: "3rem" }}></i>
                    </div>
                    <p>¡Se ha registrado exitosamente!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => navigate('/Login')}>
                        Ir a Iniciar Sesión
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;