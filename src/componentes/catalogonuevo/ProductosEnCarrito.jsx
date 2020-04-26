import React, { Component } from 'react'
import { Card, Icon, Button} from 'semantic-ui-react'

import Cart from './Carrito'

//clase que representa a todos los productos que estan en el carrito

class ProductosEnCarrito extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            Carrito de Compras
            <Icon size="large"  />
          </Card.Header>
        </Card.Content>
        <Card.Content>
        {this.props.items.map(p => {
          return (
            
          <Cart
            key={p.id}
            img={p.img}
            name={p.name}
            total={p.total}
            cantidad={p.cantidad}
          />
          )
        })}
        </Card.Content>
        <Card.Content extra>
          <Button
            basic
            color='green'
            compact
            size="medium"
            onClick={this.props.enCompraAbierta}
            >Proceder al Pago ({this.props.total} productos)
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default ProductosEnCarrito;
