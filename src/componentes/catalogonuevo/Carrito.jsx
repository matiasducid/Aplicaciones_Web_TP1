import React from 'react'
import {Feed} from 'semantic-ui-react'
import {IconButton} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Clear";
import PlusOneTwoToneIcon from '@material-ui/icons/PlusOneTwoTone';


//funcion que renderiza el carro con los productos y el precio
function Carrito(props){
  return(
    <Feed>
      <Feed.Event>
        <Feed.Label image={props.img} />
        <Feed.Content>
          <Feed.Date content={props.nombre} />
          <Feed.Summary>
            <p>Subtotal: $ {props.total} </p>
            <p>Cantidad: {props.cantidad}</p>
          </Feed.Summary>
          <IconButton edge="end" aria-label="delete" onClick={props.enQuitarProducto}>
            <RemoveIcon/>
          </IconButton>
          <IconButton edge="end" aria-label="add" onClick={props.enIncrementarProducto}>
            <PlusOneTwoToneIcon/>
          </IconButton>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  )
}

export default Carrito;