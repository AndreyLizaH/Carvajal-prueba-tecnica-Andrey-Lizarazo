import express from "express"

import {getUsuarios, crearUsuarios, getUsuario, borrarUsuario, actualizarUsuario} from "../controladores/usuarios.js"

const ruta = express.Router();
//Metodo post para un determinado usuario con su ruta
ruta.post("/usuario", crearUsuarios);

//Metodo get para un determinado usuario con su ruta 
ruta.get("/usuarios",getUsuarios);
ruta.get("/usuario/:id", getUsuario);

//Metodo para borrar un determinado usuario

ruta.delete("/usuario/:id", borrarUsuario);

// Actualizar datos de un usuario:

ruta.put("/usuario/:id", actualizarUsuario);
export default ruta;