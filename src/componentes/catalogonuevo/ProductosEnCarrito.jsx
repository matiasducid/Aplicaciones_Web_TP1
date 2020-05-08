import React, { Component } from 'react'
import { Card, Icon, Button} from 'semantic-ui-react'

import Carrito from './Carrito'

//clase que representa a todos los productos que estan en el carrito

class ProductosEnCarrito extends Component {

  render() {
    return(
      <Card className="cardCarrito">
        <Card.Content>
          <Card.Header>
            <p>Carrito de Compras ({this.props.total})</p>
            <p>Total: ${this.props.sum} </p>
            <Icon size="large"  />
          </Card.Header>
        </Card.Content>
        <Card.Content>
        {this.props.items.map(p => {
          return (           
          <Carrito
            key={p.id}
            img={p.img}
            nombre={p.nombre}
            total={p.total}
            cantidad={p.cantidad}
            enQuitarProducto={() => this.props.enQuitarProducto(p.id)}
            enIncrementarProducto={() => this.props.enIncrementarProducto(p.id)}
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
            >Proceder al Pago de {this.props.total} productos
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default ProductosEnCarrito;
