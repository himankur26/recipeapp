//import React from 'react'

import LogininForm from "./LogininForm"



function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-lg-6 bg-primary d-flex align-items-center justify-content-center" style = {{height:"100vh"}}>
      <div>

         <h1 className="text-white ">It is a long established fact that a reader will </h1>
         <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center" style = {{height:"100vh"}}>
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <img className="h-50 w-50" src="https://images-platform.99static.com//eMIesJY1_nsrRs-ariM0NjcU_WA=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/138/138932/attachment_138932332"/>
            </div>
            <h2 className="text-center">Register now :!</h2>
            <LogininForm/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
