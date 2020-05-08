import React from 'react'
import { Card, Image, Label, Button } from 'semantic-ui-react'

//Funcion que renderiza cada producto en la pantalla
function Producto(props) {
  return(
    <Card style={{ marginTop: 15, marginLeft: 15}}>
      <Image size="small" src={props.imagen} className="imagenCatalogo" />
      <Card.Content>
        <Card.Header style={{fontSize: 15}}>{props.nombre}</Card.Header>
        <Card.Meta>
          <p>${props.precio}</p>
        </Card.Meta>
        <Card.Description>
          <Label>{props.marca}</Label>
          <Label>{props.stock} en stock</Label>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          basic
          compact
          color='pink'
          floated='right'
          onClick={props.enGuardarProducto}
        >
          Agregar al carrito
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Producto
