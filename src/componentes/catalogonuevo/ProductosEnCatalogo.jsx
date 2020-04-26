import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import Product from './Producto'

//funcion que renderiza todo el catalogo
function ProductosEnCatalogo(props) {
  return (
    <Segment>
      <Grid>
        <Grid.Row columns={4}>
          {props.products.map(p => {
            return (
              <Grid.Column key={p.id}>
                <Product
                  key={p.id}
                  name={p.name}
                  imagen={p.imagen}
                  price={p.price}
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