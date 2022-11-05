import React from "react";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
//import {BrowserRouter as Router, Route , Routes } from "react-router-dom";
//import { Redirect,  Switch } from "react-router";
//import Switch from "react-js-switch";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import Header from "./componentes/Header";
import configuracion from "./Paginas/configuracion";
import editor from "./Paginas/editor";
import inicio from "./Paginas/inicio";
import vista from "./Paginas/vista";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <ToastContainer position="top-center"/>
        <Switch>
          <Route exact path="/" component ={inicio}/>
          <Route path="/añadir" component ={editor}/>
          <Route path="/actualizar/:id" component ={editor}/>
          <Route path="/vista/:id" component ={vista}/>
          <Route path="/configuracion" component ={configuracion}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
