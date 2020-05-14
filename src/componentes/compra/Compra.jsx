import React, { Component } from 'react';
import HeaderMuebleria from '../menu/Header'
import Footer from '../footer/Footer'
import Banner from '../menu/Banner'
import usuariosJson from '../usuarios/usuarios.json'

import {Segment, Grid} from 'semantic-ui-react'


class Compra extends Component {

    constructor(props) {
        super(props)
        var primerUsuario = usuariosJson[0]
        
        var stringUltimaCompra = localStorage.getItem('productosEnCarrito');
        var ultimaCompra;
        var string = "";
        ultimaCompra = JSON.parse(stringUltimaCompra);
        console.log("LOG-------- ultima compra: ",ultimaCompra);
        console.log("LOG-------- primer item: ",ultimaCompra[0].cantidad);


        for (var i = 0; i < ultimaCompra.length; i++) {
            //string.concat("<td>")
            console.log("LOG------- Hey!! soy un producto: ",ultimaCompra[i]);
            //console.log("LOG------- el string al inicio es: ",string);
            var stringNombre = ultimaCompra[i].nombre;
            var stringCantidad = ultimaCompra[i].cantidad;
            var stringPrecio = ultimaCompra[i].precio;
            var stringTotal = ultimaCompra[i].total;
            string = string.concat("<tr>");
            string = string.concat("<td>");
            string = string.concat(stringNombre);
            string = string.concat("</td>");
            string = string.concat("<td>");
            string = string.concat(stringCantidad);
            string = string.concat("</td>");
            string = string.concat("<td>");
            string = string.concat(stringPrecio);
            string = string.concat("</td>");
            string = string.concat("<td>");
            string = string.concat(stringTotal);
            string = string.concat("</td>");
            string = string.concat("</tr>");
            //console.log("LOG------- el string al final es: ",string);
         }

         this.state={
            usuario : primerUsuario.user,
            compras : primerUsuario.compras,
            ultimoCarrito : ultimaCompra,
            tabla : string
        }
      }

    render() {
        return (      
            <>
            <HeaderMuebleria/>
            <Banner/>

            <Grid className="fondo">
                <Grid.Column width={11} className="catalogo">
                    <Segment>
                        <Grid>
                            {this.state.usuario}
                            
                            {this.state.tabla}
                            
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid>
            <Footer/>
            </>
        )
      }
}
export default Compra