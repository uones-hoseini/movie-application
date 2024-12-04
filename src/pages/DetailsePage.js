import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'

function DetailsePage() {
  const params=useParams()

  console.log("params",params)
const {data}=useFetchDetails(`${params?.explore}/${params?.id}`)
console.log("data",data)


  return (
    <div>
      DetailsePage
    </div>
  )
}

export default DetailsePage
