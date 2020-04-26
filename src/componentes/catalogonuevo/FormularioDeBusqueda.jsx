import React from 'react'
import { Input } from 'semantic-ui-react'

function FormDeBusqueda (props) {
    return(
      <Input
        action={{ icon: 'search', color: 'teal' }}
        placeholder='Buscar...' />
    )
}

export default FormDeBusqueda;
