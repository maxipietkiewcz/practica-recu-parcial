const express = require("express");
const router = express.Router();
const {
  listarReservas,
  crearReserva,
  editarReserva,
  eliminarReserva,
} = require("../controllers/reservas.controller.js");

//Ruta para listar reservas
router.get("/", listarReservas);

//Ruta para crear reservas
router.post("/", crearReserva);

//Ruta para editar reservas
router.put("/:id", editarReserva);

//Ruta para eliminar reservas
router.delete("/:id", eliminarReserva);

module.exports = router;
