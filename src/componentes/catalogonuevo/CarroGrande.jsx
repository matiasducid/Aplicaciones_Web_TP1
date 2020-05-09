import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'
import ProductosEnCatalogo from './ProductosEnCatalogo'
import ProductosEnCarrito from './ProductosEnCarrito'
import Compra from './Compra'
import HeaderMuebleria from '../menu/Header'
import Footer from '../footer/Footer'
import Banner from '../menu/Banner'
import './App.css'
import prodJson from './productos.json'
import carritoJson from './carritoJson.json'
import { Hidden } from '@material-ui/core';
import ProductosDelCarro from './ProductosDelCarro';

import { Card, Icon, Button} from 'semantic-ui-react'

import Carrito from './Carrito'

class CarroGrande extends Component {
  constructor(props) {
    super(props)
    this.state = {
      compraAbierta: false,
      total: localStorage.getItem("total"), 
      sum:localStorage.getItem("sum") ,  
      carrito: localStorage.getItem("Carrito"),
    }
    //Enlazo las funciones dentro del constructor
    this.handleGuardarProducto = this.handleGuardarProducto.bind(this)
    this.handlerAgregarProducto = this.handlerAgregarProducto.bind(this)
    this.handlerQuitarProducto = this.handlerQuitarProducto.bind(this)
    this.handlerCompraAbierta = this.handlerCompraAbierta.bind(this)
    this.handlerVaciarCarrito = this.handlerVaciarCarrito.bind(this)

    console.log("Carrito", localStorage.getItem("Carrito"))
  }
    

  handlerVaciarCarrito() {
    this.setState({
      carrito: [],
      sum: 0,
      total: 0
    });
  }

  sumProducts(array) {
    var total = 0
    array.forEach(producto => total += producto.cantidad)
    this.setState({total: total})
  }

  sumTotal(array) {
    var suma = 0
    array.forEach(producto => suma += producto.total )
    this.setState({sum: suma})
  }

  handlerAgregarProducto(indexCarrito, indexProducto){
    var copiaState = Object.assign({}, this.state);
    if (copiaState.products[indexProducto].stock !== 0) {
      copiaState.carrito[indexCarrito].total += copiaState.carrito[indexCarrito].precio
      copiaState.carrito[indexCarrito].cantidad += 1
      copiaState.products[indexProducto].stock -= 1
      this.setState(copiaState)
      this.sumProducts(copiaState.carrito)
      this.sumTotal(copiaState.carrito)
    } else {
      alert('Producto sin stock')
    }
  }

  handlerQuitarProducto(productId) {
    let producto = this.state.products.find(elemProducto => elemProducto.id === productId);
    let indexProducto = this.state.products.findIndex(x => x.id === producto.id)
    let carrito = this.state.carrito.find(elemProducto => elemProducto.id === productId)
    let indexCarrito = this.state.carrito.findIndex(x => x.id === carrito.id)

    var copiaState = Object.assign({}, this.state);
    if(copiaState.carrito[indexCarrito].total === copiaState.carrito[indexCarrito].precio ){ //significa que es el ultimo de ese producto
      copiaState.sum -= copiaState.carrito[indexCarrito].precio
      copiaState.total -= 1
      indexCarrito !== -1 && copiaState.carrito.splice( indexCarrito, 1 ); 
      /* if(copiaState.carrito.length === 0){ //haciendolo asi siempre quedaba un producto de mas
        copiaState.total -= 1
      } */
      copiaState.products[indexProducto].stock += 1
      this.setState(copiaState)
      alert('El producto se quito del carrito de compras')
    } else {
      copiaState.carrito[indexCarrito].total -= copiaState.carrito[indexCarrito].precio
      copiaState.products[indexProducto].stock += 1
      copiaState.carrito[indexCarrito].cantidad -= 1
      copiaState.total -= 1
      copiaState.sum -= copiaState.carrito[indexCarrito].precio
      this.setState(copiaState)
    }
  }

  handleGuardarProducto(productId) {
    //busco el producto en mi lista de productos
    let producto = this.state.products.find(elemProducto => elemProducto.id === productId);
    let indexProducto = this.state.products.findIndex(x => x.id === producto.id)

    var productoCarrrito = {
      id: producto.id,
      nombre: producto.nombre,
      img: producto.imagen,
      precio: producto.precio,
      cantidad: 1,
      total: producto.precio
    }
    //verifico si el producto esta o no en el carrito
    var existe = this.state.carrito.find(elemProducto => elemProducto.id === productId)
    if (undefined !== existe && existe !== null) {
      let indexCarrito = this.state.carrito.findIndex(x => x.id === existe.id)
      this.handlerAgregarProducto(indexCarrito, indexProducto)
    }else{
      var copiaState = Object.assign({}, this.state);
      copiaState.products[indexProducto].stock -= 1
      //this.sumProducts(copiaState.carrito) funciona raro cuando llamamos a esta funcion
      //es necesario hacerlo a mano la primera vez.
      copiaState.total += 1
      this.setState({total: copiaState.total})
      //this.sumTotal(copiaState.carrito) funciona raro cuando llamamos a esta función
      //es necesario hacerlo a mano la primera vez. 
      copiaState.sum += copiaState.products[indexProducto].precio
      this.setState({sum: copiaState.sum})
      this.setState({
        carrito: this.state.carrito.concat([productoCarrrito]),
        copiaState
      })
    }
  }

  handlerCompraAbierta(event) {
    event.preventDefault()
    this.setState({ compraAbierta: true })
  }

  renderCompraAbierta() {
    if (this.state.compraAbierta) {
      return (
        <Compra
          sum={this.state.sum}
          enCarritoVacio={this.handlerVaciarCarrito}
        />
      )
    }
  }
  
  render() {
    return (      
      <>
      <HeaderMuebleria/>
      <Banner/>
        <Grid className="fondo">
            <Grid.Column className="grillaCarrito col-xs-2 col-sm-3 col-md-3 col-lg-3">
              <ProductosDelCarro
                items={this.state.carrito}
                total={this.state.total}
                sum = {this.state.sum}
                enCompraAbierta={this.handlerCompraAbierta}
                enQuitarProducto={this.handlerQuitarProducto}
                enIncrementarProducto={this.handleGuardarProducto}
              /> 
              {this.renderCompraAbierta()}
            </Grid.Column>
        </Grid> 
      <Footer/>
      </>
    )
  }
}

export default CarroGrande;
