import React from 'react'

//const Button = () =>{
    //return (
    //    <button>Soy un boton</button>
  //  )
//}
function manejarClic (event) {console.log(event)}

export const ContadorApps = () => {
  return (
    <h1>Contador: </h1>,
    <button onClick={(event) => manejarClic(event)  }>
        Soy un boton
    </button>
  )
}
