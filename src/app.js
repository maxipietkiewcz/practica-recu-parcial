const express = require("express");
require("dotenv").config();
const { db_connection } = require("./config/db");
const reservasRutas = require("./routes/reservas.routes.js");
const bodyParser = require("body-parser");
//Creo instancia de express
const app = express();

//Configuracion de bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Defino el puerto
const port = process.env.PORT || 3000;

//Conexion a la base de datos
db_connection();

//Configuracion de rutas
app.use("/api/reservas", reservasRutas);

//Levanto el servidor.
app.listen(port, () => {
  console.log(`Servidor escuchando en ${port}!`);
});
