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
          <p>${props.precio}</p>
        </Card.Meta>
        <Card.Description>
          <Label className="productoDescripcion">{props.marca}</Label>
          <Label className="productoDescripcion">{props.stock} en stock</Label>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          basic
          compact
          floated='right'
          onClick={props.enGuardarProducto}
          className="botonAgregar"
        >
          Agregar al carrito
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Producto
