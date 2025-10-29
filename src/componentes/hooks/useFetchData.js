import { useState, useEffect } from "react"
import { fetchdata } from "../helpers/fetchData"

//const getData = async () => {
//const {data, isLoading} = await fetchdata(endPoint)
//setData(data)
//setIsLoading(data)
//} --> luego se coloca en el useEffect "getData()"


export const useFetchData = (endPoint) => {

   const [data, setData] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      fetchdata(endPoint)
         .then(res => {
            setData(res.data)
            setIsLoading(res.isLoading)
         })
   }, [endPoint])

   return {
      data,
      isLoading
   }
}
