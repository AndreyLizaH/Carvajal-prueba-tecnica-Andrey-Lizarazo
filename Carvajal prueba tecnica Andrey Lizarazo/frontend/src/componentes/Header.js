import React, {useEffect, useState} from "react";
//import React from "react";
import {Link,useLocation} from "react-router-dom";
//import inicio from "../Paginas/inicio";
import "./Header.css"


const Header =() =>{
    const [activeTab,setActiveTab] = useState("Inicio");

    const direccion = useLocation();
    useEffect(() => {
        if(direccion.pathname === "/"){
            setActiveTab("Inicio")
        }else if(direccion.pathname === "/añadir"){
            setActiveTab("Usuario añadido")
        }else if(direccion.pathname === "/configuracion"){
            setActiveTab("configuracion") 
        }
    },[direccion])


    return(
        <div className="header">
            <p className="logo">
            Sistema De Manejo Del Usuario    
            </p> 
            <div className="header-right">
            <Link to ="/">
                <p className ={`${activeTab=== "Inicio" ? "active":""} `} 
                    onClick ={()=>setActiveTab("Inicio")}>
                    inicio
                </p>
            </Link>

            <Link to ="/añadir">
                <p className ={`${activeTab=== "Añadir Usuario" ? "active":""} `}
                    onClick ={()=>setActiveTab("Añadir Usuario")}>
                    Añadir Usuario
                </p>
            </Link>

            <Link to ="/configuracion">
                <p className ={`${activeTab=== "Configuracion" ? "active":""} `}
                    onClick ={()=>setActiveTab("Configuracion")}>
                    Información 
                </p>
            </Link>
            </div>

        
        </div>

    );
    

};

export default Header;