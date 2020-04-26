import React from 'react'
import Format from './FormatearNumero'
import { Card, Statistic, Button } from 'semantic-ui-react'

//funcion que representa al usuario comprando (haciendo pago)
function Compra(props) {
  return(
    <Card>
      <Card.Content header='Cantidad a pagar' />
      <Card.Content extra>
        <Statistic size='mini'>
          <Statistic.Value>
            <Format number={props.sum}/>
          </Statistic.Value>
        </Statistic>
        <Button
          basic
          color='green'
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