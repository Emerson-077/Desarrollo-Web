import { useState, useEffect } from "react"
import { obtenerProductos } from "../services/productosServices"
import { Table } from "react-bootstrap";


const ListarProductos = () => {

    /*
     * Vector de los datos de respuesta de la api, y de errores
     */
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fecthProductos();
    });

    const fecthProductos = async () => {

        try {
            const listadoProductos = await obtenerProductos();
            setProductos(listadoProductos);

        } catch (e) {
            setError(e)
            console.log(error)
        }
    }


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Código del Producto</th>
                    <th>Nombre del Producto</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) =>
                    <tr key={producto.codigoProducto}>
                        <td >{producto.codigoProducto}</td>
                        <td className="text-uppercase">{producto.nombreProducto}</td>
                        <td>Eliminar</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}

export default ListarProductos