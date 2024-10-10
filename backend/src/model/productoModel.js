import { sql } from "../config/connection.js";

const getProductos = async () =>{
    try {
        
        const productos = await sql.query("SELECT * FROM tblproducto");
        return productos.recordset;

    } catch (error) {
        throw error;
    }
}

export{getProductos}