import React, { Component } from 'react';
import HeaderMuebleria from '../menu/Header'
import Footer from '../footer/Footer'
import Banner from '../menu/Banner'
import usuariosJson from '../usuarios/usuarios.json'

import {Grid} from 'semantic-ui-react'
import ProductosComprados from './ProductosComprados'

class Compra extends Component {

    constructor(props) {
        super(props);
        var primerUsuario = usuariosJson[0];
        var stringUltimaCompra = localStorage.getItem('productosEnCarrito');
        var ultimaCompra;
        ultimaCompra = JSON.parse(stringUltimaCompra);
        console.log("LOG-------- ultima compra: ",ultimaCompra);
        console.log("LOG-------- primer item: ",ultimaCompra[0].cantidad);

        this.state={
            usuario : primerUsuario.user,
            compras : primerUsuario.compras,
            ultimoCarrito : ultimaCompra,
        }
      }

    render() {
        return (      
            <>
            <HeaderMuebleria/>
            <Banner/>
            <Grid className="fondo">

                <Grid.Column className="grillaCatalogo col-12" >
                    <ProductosComprados
                    products={this.state.ultimoCarrito}
                    className="grillaCatalogo"
                    />
                </Grid.Column>
            </Grid>
            <Footer/>
            </>
        )
      }
}
export default Compra