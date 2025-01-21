//import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Contactform from "./Contactform";
function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row my-3">
            <div className="col-lg-6 bg-contact p-3" >
            <h3>Find us on : </h3>
            <div className="d-flex my-3 gap-3">
            <h5>India</h5><p>officia officia non veniam dolor et ex ut</p>
            </div>
            <div className="d-flex my-3 gap-3">
            <h5>Canada</h5><p>officia officia non veniam dolor et ex ut</p>
            </div>
            <div className="my-4">
                <div className="d-flex gap-3 align-items-center">
                <div className="icon bg-white p-3 rounded-circle ms-2">
                <FaPhoneAlt />
                </div>
                <h4>
                    +1 437 789 5858 
                </h4>
                </div>
            </div>
            <div className="my-4">
                <div className="d-flex gap-3 align-items-center">
                <div className="icon bg-white p-3 rounded-circle ms-2">
                <MdOutlineMail />
                </div>
                <h4>
                    addnkfld@gmail.com
                </h4>
                </div>
            </div>
            <div className="my-4">
                <div className="d-flex gap-3 align-items-center">
                <div className="icon bg-white p-3 rounded-circle ms-2">
                <IoLocationOutline />
                </div>
                <h4>
                    Missisauga,Ontario,Canada
                </h4>
                </div>
            </div>
            </div>
            <div className="col-lg-6 p-3" >
            <h2>Contact Us</h2>
            <Contactform/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
