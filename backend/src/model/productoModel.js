import { sql } from "../config/connection.js";

const getProductos = async () => {
  try {
    const productos = await sql.query('SELECT codigoProducto, nombreProducto FROM tblProducto');
    return productos.recordset;
  } catch (error) {
    console.log("Error de consulta:", error);
  }
};

export { getProductos };
