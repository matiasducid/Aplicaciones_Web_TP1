import React from 'react'
import { Feed } from 'semantic-ui-react'


//funcion que renderiza el carro con los productos y el precio
function Cart(props){
  return(
    <Feed>
      <Feed.Event>
        <Feed.Label image={props.img} />
        <Feed.Content>
          <Feed.Date content={props.name} />
          <Feed.Summary>
            $ {props.total} ({props.cantidad} productos)
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  )
}

export default Cart;