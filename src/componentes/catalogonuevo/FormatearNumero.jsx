import React from 'react'

//funcion para representar el precio sin decimales

function Formato(props) {

  function redondearPrecio(monto, decimales){
    decimales = decimales || 0;
    //si el monto no es un numero o es cero devuelvo $0.00
    if (isNaN(monto) || monto === 0) return parseFloat(0).toFixed(decimales);
    monto = '' + monto.toFixed(decimales);

    var monto_dividido = monto.split('.'), expreg = /(\d+)(\d{3})/;
    
    //rendondeo el precio y saco los decimales
    while (expreg.test(monto_dividido[0]))
      monto_dividido[0] = monto_dividido[0].replace(expreg, '$1' + ',' + '$2');

    return monto_dividido.join('.');
  }
    //muestro el precio en la interfaz
    return(
      <p> $ {redondearPrecio(props.number)}</p>
    )

}

export default Formato