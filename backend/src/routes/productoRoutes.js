import { getAllProductos } from "../controller/productoController.js";
import express from "express";
const router = express.Router();

router.get('/listarProductos',getAllProductos);

export default router;
