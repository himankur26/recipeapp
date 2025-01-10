//import React from 'react'

import { useAuth } from "../../store/Auth"

function AboutUs() {
  const {user} = useAuth()
  console.log("currect user data", user)
  return (
    <div>
      about

    </div>
  )
}

export default AboutUs
