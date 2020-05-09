import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Producto from './Producto'

//funcion que renderiza todo el catalogo
function ProductosEnCatalogo(props) {
  return (
    <Segment>
      <Grid className="grid">
        <Grid.Row className="">
          {props.products.map(p => {
            return (
              <Grid.Column key={p.id} className="producto col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Producto
                  key={p.id}
                  nombre={p.nombre}
                  imagen={p.imagen}
                  precio={p.precio}
                  marca={p.marca}
                  stock={p.stock}
                  enGuardarProducto={() => props.enGuardarProducto(p.id)}
                  enIncrementarProducto={() => props.enIncrementarProducto(p.id)}
                  enQuitarProducto={() => props.enQuitarProducto(p.id)}
                />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ProductosEnCatalogo