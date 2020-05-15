import React from 'react'
import { Segment, Grid} from 'semantic-ui-react'
import Producto from './Producto'

import './compra.css'

//funcion que renderiza todos los productos comprados
function ProductosComprados(props) {
    var suma=0; //variable que tendra el valor total de la compra.
    if(props.products){
    for(var i=0; i<props.products.length; i++){
            suma+=props.products[i].total;
        }
    }else{
      console.log("No hay productos en la ultima compra.");
    }
  return (
    <Segment>
      <Grid className="grillaCompra grid" style={{marginRight: 20}}>
        <Grid.Column width={11} className="titulo" style={{fontSize: 28}}>
        <p className="izquierda">Productos Comprados:</p>
        <hr/>
        </Grid.Column>
        <Grid.Column width={5} className="titulo" style={{fontSize: 26}}>
        <b className="derecha"> Total pagado: ${suma} </b>
        <hr/>
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Row className="">
          {props.products?props.products.map(p => {
            return (
              <Grid.Column key={p.id} className="producto col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Producto
                  
                  nombre={p.nombre}
                  imagen={p.img}
                  precio={p.precio}
                  cantidad={p.cantidad}
                  total={p.total}
                />
              </Grid.Column>
            )
          }):<Grid.Column width={11} className="titulo" style={{fontSize: 22}}>
                <p className="no_tan_a_la_izquierda">Sin compras.</p>
              </Grid.Column>
          }
        </Grid.Row>        
      </Grid>
    </Segment>
  )
}

export default ProductosComprados