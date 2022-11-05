import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./vista.css";

const Vista = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  console.log("user", id);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/usuario/${id}`);
    console.log("response", response);
    if (response.status === 200) {
      setUser({ ...response.data[0] });
    }
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id} </span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{user && user.nombre} </span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{user && user.correo} </span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>{user && user.contacto} </span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vista;
