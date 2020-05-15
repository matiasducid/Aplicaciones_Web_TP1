import React from 'react'
import { Card, Image, Label, Button } from 'semantic-ui-react'

//Funcion que renderiza cada producto en la pantalla
function Producto(props) {
  return(
    <Card style={{ marginTop: 15, marginLeft: 15}} className="cardProducto">
      <Image size="small" src={props.imagen} className="imagenCatalogo"/>
      <Card.Content >
        <Card.Header style={{fontSize: 15}}>{props.nombre}</Card.Header>
        <Card.Meta>
          <p>Precio Unitario: ${props.precio}</p>
        </Card.Meta>
        <Card.Meta>
          <p>Cantidad: {props.cantidad}</p>
        </Card.Meta>
        <Card.Description>
          <Label className="productoDescripcion">Subtotal {props.key} = {props.total}</Label>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Producto
