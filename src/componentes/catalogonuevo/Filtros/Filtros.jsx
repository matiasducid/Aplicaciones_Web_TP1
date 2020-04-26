import React, { Component } from 'react'
import { Segment} from 'semantic-ui-react'
import SearchForm from './FormularioDeBusqueda'
import NavItem from './NavItem'

class BarraDeFiltros extends Component {
  render() {
  
    return(
      <Segment textAlign='right' clearing style={{ marginTop: 15}}>
        <div className="row">
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Desplegar navegacion</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">CATEGORIAS</a>
            <a className="navbar-brand">Dormitorio</a>
            <a className="navbar-brand">Cocina</a>

          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
            </ul>
          </div>
        </nav>
        <SearchForm/>
      </div>

      </Segment>
    )
  }
}

export default BarraDeFiltros;