import React, { Component } from 'react';
import usuariosJson from './usuarios.json'
import {NavLink}  from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import './usuarios.css'

class Usuario extends Component{
    constructor(){
        super()
        var primerUsuario = usuariosJson[0]
        this.state={
            usuario : primerUsuario.user,
            compras : primerUsuario.compras,
        }
    }

    function(nuevaCompra){
        this.state.compras.concat(nuevaCompra)
    }
    
    render(){
        return(  
            <div className="dropdown">
            <button className="dropbtn">
                {this.state.usuario} 
                <Icon name='user' className="float-right"/>
            </button>
            <div className="dropdown-content">
                <NavLink to="/comprasRealizadas">Compras Realizadas</NavLink>
            </div>
            </div>
        )
    }
}
export default Usuario