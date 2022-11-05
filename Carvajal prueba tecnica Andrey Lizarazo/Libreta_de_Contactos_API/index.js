//////////////////////////
//   Librerias a usar   //
/////////////////////////
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


//////////////////////////
//   Rutas necesarias   //
/////////////////////////

import rutasUsuarios from "./rutas/usuarios.js";


const app = express();
const puerto = 5000; //puerto donde se va a llevar acabo todo.

app.use(bodyParser.json())
app.use(cors());
app.use("/",rutasUsuarios);
// Se crea el respectivo Request–response para la creación 
//del get de la aplicación
app.get("/", (req , res)=> 
    res.send("Bienvenido")
);

app.all("*",(req,res)=>
    res.send("Esa ruta no existe")
);

app

app.listen(puerto, ()=> 
  console.log(`El servidor esta escuchando en el puerto: http://localhost:${puerto}`)

);