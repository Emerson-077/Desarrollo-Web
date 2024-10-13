import axios from "axios";

const api = "http://localhost:8082/listarProductos";

export const obtenerProductos = async () => {
  /*
   * Datos de la respuesta de la API
   */
  const productos = await axios.get(api);
  return productos.data;
};
