import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./editor.css";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  nombre: "",
  correo: "",
  contacto: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { nombre, correo, contacto } = state;

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/usuario/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:5000/usuario", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/usuario/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !contacto) {
      toast.error("Por favor complete todos los campos");
    } else {
      if (!id) {
        addUser(state);
      } else {
        updateUser(state, id);
      }

      setTimeout(() => history.push("/"), 500);
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="nombre">Name</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={handleInputChange}
        />

        <label htmlFor="correo">Email</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="Ingrese su correo"
          value={correo}
          onChange={handleInputChange}
        />

        <label htmlFor="contacto">Contact</label>
        <input
          type="number"
          id="contacto"
          name="contacto"
          placeholder="Ingrese su numero de contacto"
          value={contacto}
          onChange={handleInputChange}
        />

        <input type="submit" value={id ? "Update" : "Añadir"} />
      </form>
    </div>
  );
};

export default AddEdit;