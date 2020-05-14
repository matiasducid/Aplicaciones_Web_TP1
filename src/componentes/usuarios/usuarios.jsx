import React, { Component } from 'react';
import usuariosJson from './usuarios.json'
import {NavLink}  from 'react-router-dom'

import { TextField } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Icon } from 'semantic-ui-react'


class Usuario extends Component{
    constructor(){
        super()
        var primerUsuario = usuariosJson[0]
        this.state={
            usuario : primerUsuario.user,
            compras : primerUsuario.compras
        }
    }
    function(nuevaCompra){
        this.state.compras.concat(nuevaCompra)
    }

    render(){
        return(
            
            <TextField id="select"  value="0" select>
            <MenuItem value="0" >{this.state.usuario}<Icon name='user' className="float-right"/></MenuItem>
            <MenuItem value="1"><NavLink to="/comprasRealizadas" className="menu__link">Compras Realizadas</NavLink></MenuItem>
          </TextField>

        )
    }
}
export default Usuario