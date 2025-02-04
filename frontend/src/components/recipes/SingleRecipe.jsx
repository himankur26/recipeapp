//import React from 'react'

import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

function SingleRecipe() {
  const {id} = useParams()
  const [data,setData] = useState()

  useEffect(()=>{
    const recipes = async () => {
        try {
            const res = await fetch (`http://localhost:5689/recipes/singleRecipe/${id}`)
            const data = await res.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    recipes()
  },[id])
  console.log(data)
    return (
    <div>
      
    </div>
  )
}

export default SingleRecipe
