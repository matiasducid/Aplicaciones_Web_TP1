import React, { Component } from 'react';
import { Container, Grid} from 'semantic-ui-react'
import ProductosEnCatalogo from './ProductosEnCatalogo'
import ProductosEnCarrito from './ProductosEnCarrito'
import Compra from './Compra'
import HeaderMuebleria from '../menu/Header'
import Footer from '../footer/Footer'
import Banner from '../menu/Banner'
import style from './App.css'
import prodJson from './productos.json'

class Catalogo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      compraAbierta: false,
      total: 0, //total de la suma de un mismo producto
      sum: 0,   //total de la compra
      products: prodJson,
      carrito: [],
    }
    //Enlazo las funciones dentro del constructor
    this.handleGuardarProducto = this.handleGuardarProducto.bind(this)
    this.handlerAgregarProducto = this.handlerAgregarProducto.bind(this)
    this.handlerQuitarProducto = this.handlerQuitarProducto.bind(this)
    this.handlerCompraAbierta = this.handlerCompraAbierta.bind(this)
    this.handlerVaciarCarrito = this.handlerVaciarCarrito.bind(this)
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
    var sum = 0
    array.forEach(producto => sum += producto.total)
    this.setState({sum: sum})
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
    if(copiaState.carrito[indexCarrito].total === copiaState.carrito[indexCarrito].precio ){
      indexCarrito !== -1 && copiaState.carrito.splice( indexCarrito, 1 );
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
      this.sumProducts(copiaState.carrito)
      this.sumTotal(copiaState.carrito)
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
x

  render() {
    const divStyle = {
      background: '#DDB9B9',
    };
    return (      
      <>
      <HeaderMuebleria/>
      <Banner/>
      <Container style={style.root}>
        <Grid style={divStyle}>
          <Grid.Column width={12}>
            <ProductosEnCatalogo
              products={this.state.products}
              enGuardarProducto={this.handleGuardarProducto}
              enIncrementarProducto={this.handleGuardarProducto}
              enQuitarProducto={this.handlerQuitarProducto}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <ProductosEnCarrito
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
      </Container>
      <Footer/>
      </>
    )
  }
}

export default Catalogo;
