import React from 'react'
import Formato from './FormatearNumero'
import { Card, Image, Label, Button } from 'semantic-ui-react'

//Funcion que renderiza cada producto en la pantalla
function Producto(props) {
  return(
    <Card style={{ marginTop: 15 }}>
      <Image size="small" src={props.imagen}  />
      <Card.Content>
        <Card.Header style={{fontSize: 15}}>{props.nombre}</Card.Header>
        <Card.Meta>
          <Formato number={props.precio}/>
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
      <Card.Content extra>
        <Button.Group floated='right'>
          <Button
            compact
            onClick={props.enIncrementarProducto}
            >+</Button>
          <Button
            compact
            onClick={props.enQuitarProducto}
            >-</Button>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default Producto
