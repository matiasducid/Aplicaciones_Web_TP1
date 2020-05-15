import React from 'react'
import { Card, Statistic, Button } from 'semantic-ui-react'

//funcion que representa al usuario comprando (haciendo pago)
function Compra(props) {
  return(
    <Card>
      <Card.Content header='Cantidad a pagar' />
      <Card.Content extra>
        <Statistic size='mini'>
          <Statistic.Value>
            <p>${props.sum}</p>
          </Statistic.Value>
        </Statistic>
        <Button
          basic
          compact
          size="medium"
          floated='right'
          onClick={props.enCarritoVacio}
          >Pagar
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Compra