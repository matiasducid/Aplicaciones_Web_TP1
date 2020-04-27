import React, { Component } from 'react';
import { Container, Grid} from 'semantic-ui-react'
import Menu from './Filtros/Filtros'
import ProductosEnCatalogo from './ProductosEnCatalogo'
import ProductosEnCarrito from './ProductosEnCarrito'
import Compra from './Compra'
import HeaderMuebleria from '../menu/Header'
import Footer from '../footer/Footer'
import Banner from '../menu/Banner'
import style from './App.css'


class Catalogo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      compraAbierta: false,
      total: 0, //total de la compra
      sum: 0,   //total de la suma de un mismo producto
      products: [
        {
          id: 1,
          nombre: 'Sillon rinconero cleopatra 3 cuerpos con puff',
          imagen: 'https://d26lpennugtm8s.cloudfront.net/stores/281/365/products/16b1-e5bfca62d9f5c58c7615132912837842-320-0.jpg',
          precio: 53887.89,
          detalles: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Corfa',
          stock: 5,
        },
        {
          id: 2,
          nombre: 'Futon Jimmy Amarillo',
          imagen: 'https://d26lpennugtm8s.cloudfront.net/stores/281/365/products/pi13656-889252-yellow5-d8e138590df90e31d615336571207705-320-0.jpg',
          precio: 13938.20,
          detalles: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Soyere',
          stock: 6,
        },
        {
          id: 3,
          nombre: 'Mesa Mykonos rectangular',
          imagen: 'https://d26lpennugtm8s.cloudfront.net/stores/281/365/products/mesa-mykonos1-a89a907071cea801c615351243853395-320-0.png',
          precio: 24725,
          detalles: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Fujifilim',
          stock: 2,
        },
        {
          id: 4,
          nombre: 'Respaldo Ottilia',
          imagen: 'https://d26lpennugtm8s.cloudfront.net/stores/281/365/products/produto-133_cabeceira_cc-alamo1-9346c668590e2f9b7d15253511322857-320-0.png',
          precio: 10000,
          detalles: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Canyio',
          stock: 6,
        },
        {
          id: 5,
          nombre: 'Desayunador Firenze ',
          imagen: 'https://amoblartecomodoro.com/wp-content/uploads/2020/04/FIRENZE.jpg',
          precio: 3285,
          marca: 'Amazon',
          stock: 10,
        },
        {
          id: 6,
          nombre: 'Leila Banqueta',
          imagen: 'https://amoblartecomodoro.com/wp-content/uploads/2018/10/LEILA-BANQUETA.jpg',
          precio: 27333,
          marca: 'Olympus',
          stock: 4,
        },
        {
          id: 7,
          nombre: 'Sofa Cama',
          imagen: 'https://cdn.shopify.com/s/files/1/0049/0330/5265/products/ODENSE1_4baef199-b9f6-44a1-90a6-e85de3894da1_700x.jpg?v=1568221467',
          precio: 32000,
          marca: 'Odense',
          stock: 2,
        },
        {
          id: 8,
          nombre: 'Esquinero ',
          imagen: 'https://cdn.shopify.com/s/files/1/0049/0330/5265/products/JACKSON_ESQ_700x.jpg?v=1568051926',
          precio: 62190,
          marca: 'Jackson',
          stock: 4,
        },
        {
          id: 9,
          nombre: 'Sofa 1 cuerpo',
          imagen: 'https://cdn.shopify.com/s/files/1/0049/0330/5265/products/JUANA_1_CPO_700x.jpg?v=1575924615',
          precio: 50399,
          marca: 'Juana',
          stock: 3,
        },
        {
          id: 10,
          nombre: 'Comoda',
          imagen: 'https://amoblartecomodoro.com/wp-content/uploads/2019/07/COMODA-DL-250.jpg',
          precio: 15200,
          marca: 'DL250',
          stock: 4,
        },
        {
          id: 11,
          nombre: 'Juego de dormitorio',
          imagen: 'https://d26lpennugtm8s.cloudfront.net/stores/281/365/products/juego-dormitorio-portofino-nogal-42447b691892da200414699122547155-1024-10241-4951650e766a5fc2c015132928286779-320-0.jpg',
          precio: 86789,
          marca: 'Olympus',
          stock: 3,
        },
        {
          id: 12,
          nombre: 'Mesa Ratona ',
          imagen: 'https://d26lpennugtm8s.cloudfront.net/stores/281/365/products/28e38da2d811d0ec1bbe6e403a672a360e5b127ffbc53ec225pimgpsh_fullsize_distr1-2b6062abf428f691c115132936255208-320-0.jpg',
          precio: 32699,
          marca: 'Narbona',
          stock: 10,
        }
      ],
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

  render() {
    return (
      <Container className={style.root}>
        <HeaderMuebleria/>
        <Banner/>
        <Menu/>
        <Grid>
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
              enCompraAbierta={this.handlerCompraAbierta}
            />
            {this.renderCompraAbierta()}
          </Grid.Column>
        </Grid>
        <Footer/>
      </Container>
    )
  }
}

export default Catalogo;
