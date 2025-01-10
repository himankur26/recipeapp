//import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className='container-fluid py-5 bg-footer'>
    <div className='container'>
    <div className="row justify-content-between">
        <div className="col-lg-3 p-3">
            <h4 className="poppins text-white">Get in Touch with Us for the Best Quality Custom Prints & Supplies.</h4>
            <p className="poppins text-white mt-2">Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
        </div>
        
        <div className="col-lg-3">
        <h4 className="poppins text-white">Quick Links</h4>
        <p className="poppins text-white mt-4">Privacy Policy</p>
        <p className="poppins text-white ">Privacy Policy</p>
        <p className="poppins text-white ">Privacy Policy</p>
        

        </div>

        <div className="col-lg-3">
        <h4 className="poppins text-white">Important Links</h4>
        <p className="poppins text-white mt-4">Privacy Policy</p>
        <p className="poppins text-white ">Privacy Policy</p>
        <p className="poppins text-white ">Privacy Policy</p>
        </div>

    </div>
    </div>
    <hr className="text-white"></hr>
    <h6 className="text-white text-center">Copyright © 2024 | All rights reserved</h6>
      
    </div>
  )
}

export default Footer
