import React, { Component } from 'react'
import { Segment} from 'semantic-ui-react'
import SearchForm from './FormularioDeBusqueda'

class BarraDeFiltros extends Component {

  render() {
    return(
      <Segment textAlign='right' clearing style={{ marginTop: 15}}>
        <SearchForm/>
      </Segment>
    )
  }
}

export default BarraDeFiltros;