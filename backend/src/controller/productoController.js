import { getProductos } from "../model/productoModel.js";

const getAllProductos = async (req, res) =>{
    const productos =  await getProductos(); 
    res.json(productos);
}

export {getAllProductos}