import {v4 as uuid} from "uuid";

let usuarios =[];

export const getUsuarios = (req, res) =>{
    res.send(usuarios);
};

export const crearUsuarios = (req, res) => {
    const usuario = req.body;

    usuarios.push({...usuario, id:uuid()});

    res.send("Se agregó con éxito el usuario");

};

export  const getUsuario  = (req, res)=>{
     const usuarioParticular = usuarios.filter((usuario) => usuario.id === req.params.id);
     res.send(usuarioParticular);

};

export const borrarUsuario = (req, res) =>{
    usuarios = usuarios.filter((usuario) => usuario.id !== req.params.id);
    res.send("Se borro con éxito el usuario")

};


export const  actualizarUsuario = (req, res) =>{
    const usuario = usuarios.find((usuario) => usuario.id === req.params.id);
    usuario.nombre = req.body.nombre;
    usuario.correo = req.body.correo;
    usuario.contacto = req.body.contacto;

    res.send("Usuario actulizado")
};