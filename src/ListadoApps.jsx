import { useState } from "react";
import { AgregarTarea } from "./componentes/AgregarTarea";

const Items = ({ nombre, visto }) => {
  return (
    <li >
      {nombre} {visto ? '👍' : '💔'}
    </li>
  );
};

export const ListadoApps = () => {



  let listadoSecciones = [
    { id: 0, nombre: 'Instalaciones necesarias', visto: true },
    { id: 1, nombre: 'Uso de VITE', visto: true },
    { id: 2, nombre: 'Componentes', visto: true },
    { id: 3, nombre: 'Variables JSX', visto: true },
    { id: 4, nombre: 'Props', visto: true },
    { id: 5, nombre: 'Eventos', visto: true },
    { id: 6, nombre: 'Redux', visto: false },
    { id: 7, nombre: 'CustomHooks', visto: false },
  ]; 

   const [arreglo, setArreglo] = useState(listadoSecciones);

  const onAgregarTarea = (val) =>{
    let valor = val.trim()
    if(valor < 1) return
    const envio = {
      id: arreglo.length,
      nombre: valor,
      visto: false
    }
    setArreglo([...arreglo, envio])
  }

  return (
    <>
      <h1>Listado de temas del Curso</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map(item => (
          <Items
            key={item.id}
            nombre={item.nombre}
            visto={item.visto}
          />
        ))}
      </ol>

    </>
  );
};

//