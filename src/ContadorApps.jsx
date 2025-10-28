
import { useState } from "react"

export const ContadorApps = ({value}) => {

    const [ contador, setContador] = useState(value)

const  manejarClic  = () => {
    setContador(contador + 1)

    }


  return (
    <>
    <h1>Contador: </h1>
    <p>{contador}</p>
    <button onClick={manejarClic}>
        Soy un boton
    </button>
    </>
  );
};
