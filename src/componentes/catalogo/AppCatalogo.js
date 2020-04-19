import React, {Component} from 'react';
import './App.css';

import Buscador from './componentes/Buscador'
import Resultado from './componentes/Resultado'
class AppCatalogo extends Component {
  
  constructor(){
    super();
    this.state={
      termino:'',
      imagenes: [],
      pagina: ''
    }

  }
  
  scroll =()=>{
    const elemento= document.querySelector('.jumbotron');
    elemento.scrollIntoView({block: "start", behavior: "smooth"});
  }

  paginaAnterior = ()=>{   
    console.log("paginaAnterior");
    let pagina= this.state.pagina; //leer el state de la pagina actual 
    if(pagina>1){ //si la pagina es uno ya no ir hacia atras
      pagina-=1; //restar uno a la pagina actual
      this.setState({pagina}, //agregar el cambio al state
        ()=>{
          this.consultarApi();
          this.scroll();
        });
    }
    
  }
  paginaSiguiente = () => {
   
    console.log("paginaSiguiente");
    let pagina= this.state.pagina; //leer el state de la pagina actual 
    pagina++; //sumar uno a la pagina actual
    this.setState({pagina}, //agregar el cambio al state
      ()=>{this.consultarApi()
        this.scroll();
      });
  }

  consultarApi = ()=>{
    const pagina= this.state.pagina;
    const termino= this.state.termino;
    const url= `https://pixabay.com/api/?key=1680832-74d43234194527aae929c2be5&q=${termino}&per_page=30&page=${pagina}`;
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes:resultado.hits}));
  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino,
      pagina:1
    },()=>{
      this.consultarApi();
    })
  }
  

  render(){
    return (
      <div className="app container">

        <header className="header">
            <div className="contenedor">
                <h1 className="logo"> Nobelie</h1>
                <span className="icon-menu" id="btn-menu"></span>
                <nav className="nav" id="nav">
                    <ul className="menu">
                        <li className="menu__item"><a href="index.html" className="menu__link select">Inicio</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Catalago</a></li>
                        <li className="menu__item"><a href="carrito.html" className="menu__link">Carrito</a></li>
                        <li className="menu__item"><a href="" className="menu__link">Contacto</a></li>
                    </ul>
                </nav>
            </div>
      </header>
      <div className="banner">
        <img src="img/banner.jpg" alt="" className="banner_img"/>
        <div className="contenedor">
            <h2 className="banner__titulo">La mejor muebleria a tu alcance</h2>
            <p className="banner__txt">Armá tu hogar con nosotros y alcanzá el hogar de tus sueños</p>
        </div>
      </div> 
        <div className="jumbotron barra-buscador">
          <p className="lead text-center">
            Buscador de Imágenes
          </p>
          <Buscador 
          datosBusqueda={this.datosBusqueda}
          />
  
          <div className="row justify-content-center">
            <Resultado 
            imagenes={this.state.imagenes} 
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
            />
          </div>
          
        </div>
      </div>
    );
  }
}

export default AppCatalogo;