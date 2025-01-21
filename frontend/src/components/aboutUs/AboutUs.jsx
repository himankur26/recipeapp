//import React from 'react'

import { useAuth } from "../../store/Auth"

function AboutUs() {
  const {user} = useAuth()
  console.log("currect user data", user)
  return (
    <div className="">
    <div className="d-flex justify-content-center">
      <img src="https://www.simplyrecipes.com/thmb/PxxkJ0Ks13GZN-wZ01JlN3JBDvo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SRAbout-a515fb4bc8724313ae51fa1d483572c6.png" className="img-fluid mx-auto h-25 w-25"/>
    </div>
      <h1 className="text-center display-6">About Simply Recipes</h1>
      <div className="container my-5">
        <div className="row justify-content-between">
          <div className="col-2">
            <button className="px-4 py-2 rounded-pill "> Who We Are ? </button>
          </div>
          <div className="col-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>

        </div>
        <hr className="my-3"></hr>
        <div className="row justify-content-between">
          <div className="col-2">
            <button className="px-4 py-2 rounded-pill "> What we do ?</button>
          </div>
          <div className="col-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>

        </div>
        <hr className="my-3"></hr>
        <div className="row justify-content-between">
          <div className="col-2">
            <button className="px-4 py-2 rounded-pill "> Our History</button>
          </div>
          <div className="col-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>

        </div>
        <div className="row my-4 gap-x-3">
        <h2>Founder</h2>
          <div className="col-lg-6"><img src="" className="img-fluid"/></div>
          <div className="col-lg-6">
          <h3>HIMANKUR SHARMA</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <h4 className="text-end signature">Himankur </h4>
                </div>

        </div>
      </div>
    </div>
  )
}

export default AboutUs
