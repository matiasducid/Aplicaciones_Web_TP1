import React, {Component} from 'react';
import './AppCatalogo.css';
//import '../Responsive.css'

import Buscador from './Buscador'
import Resultado from './Resultado'

import Header from '../menu/Header'
import Banner from '../menu/Banner'
import Footer from '../footer/Footer'
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
      <>
      <Header/>
      <Banner/>
        <div className="app container">
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
      <Footer/>
      </>
    );
  }
}

export default AppCatalogo;