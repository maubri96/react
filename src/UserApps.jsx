import {useState} from "react"
import { UserList } from "./componentes/UserList"
export const UserApps = () => {

    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = () => {
        setEndPoint('comments')
    }
  return (
    <>
    <h1>Lista de Usuarios: </h1>
    <UserList endPoint={endPoint}></UserList>
    <button onClick={handleFetch} >Aqui se llama la api</button>
    </>
  )
}
