import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NavbarLoginSingUp from '../../components/navbar_login_singUp/navbarLoginSingUp';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import "./olvidar_contraseña.css"

function ForgotPassword() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <NavbarLoginSingUp />
            <section className="container-fluid d-flex align-items-center justify-content-center ppal">
                <div className="login w-50 text-center">
                    <h1>Recuperar Contraseña</h1>
                    <Formik
                        initialValues={{
                            correoCliente: '',
                            numeroTelefono: ''
                        }}

                        validate={(valores) => {
                            let errores = {};

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

                            return errores;
                        }}

                        onSubmit={(valores, { resetForm }) => {
                            resetForm();
                            handleShow();
                        }}
                    >
                        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                            <form
                                className="bg-white rounded p-5 row g-3 m-2 d-block needs-validation"
                                id="forgot-password"
                                onSubmit={handleSubmit}
                                noValidate
                            >
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

                                <div className="col-md-4 mx-auto">
                                    <Button variant="primary" type='submit'>
                                        Recuperar Contraseña
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
                    <p>Se han enviado las instrucciones para recuperar tu contraseña a tu correo electrónico.</p>
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

export default ForgotPassword;
