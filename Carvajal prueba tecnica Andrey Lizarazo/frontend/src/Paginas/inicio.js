import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./inicio.css";
import axios from "axios";
import { toast } from "react-toastify";

const Inicio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    const response = await axios.get("http://localhost:5000/usuarios");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteUser = async (id) => {
    if (
      window.confirm("Esta seguro que desea eliminarlo")
    ) {
      const response = await axios.delete(`http://localhost:5000/usuario/${id}`);
      if (response.status === 200) {
        toast.success(response.data);
        getUsuarios();
      }
    }
  };

  console.log("data=>", data);

  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Nombre</th>
            <th style={{ textAlign: "center" }}>Correo</th>
            <th style={{ textAlign: "center" }}>Contacto</th>
            <th style={{ textAlign: "center" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.nombre}</td>
                  <td>{item.correo}</td>
                  <td>{item.contacto}</td>
                  <td>
                    <Link to={`/actualizar/${item.id}`}>
                      <button className="btn btn-edit">Editar</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteUser(item.id)}
                    >
                      Borrar
                    </button>
                    <Link to={`/vista/${item.id}`}>
                      <button className="btn btn-view">Visualizar</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Inicio;