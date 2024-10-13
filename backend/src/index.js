/**
 * Servidor
 */

import express from "express";
import cors from "cors";
import {obtenerConexion} from "./config/connection.js";
import router from "./routes/productoRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.get('/listarProductos', router);

app.listen(process.env.PORT, () => {
  obtenerConexion();
  console.log(`Conectado en el puerto: ${process.env.PORT}`);
});
