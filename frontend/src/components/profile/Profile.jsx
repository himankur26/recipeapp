//import React from 'react'

import { useAuth } from "../../store/Auth"
import {Card} from "react-bootstrap"
import Button from '@mui/material/Button';
function Profile() {
const {user} = useAuth()
const userdata = user?.userData
console.log(userdata,"aaaaaa")
  return (
    <div className="container-fluid">
    <div className="container my-5">
    <h3 className="text-center poppins text-capitalize my-3">{userdata?.name} details</h3>
        <div className="row">
           <div className="col-md-8 mx-auto">
            <Card className="shadow-md mt-3">
                <Card.Body className="p-lg-3">
                
                    <div className="row ">
                        <div className="col-md-6 ">
                            <Card.Text className="fs-16">
                                <strong>
                                    Email :- 
                                </strong>
                                {userdata?.email}
                            </Card.Text>
                        </div>
                        <div className="col-md-6 ">
                            <Card.Text className="fs-16">
                                <strong>
                                    Name :- 
                                </strong>
                                {userdata?.name}
                            </Card.Text>
                        </div>
                        <div className="col-md-6 mt-3 ">
                            <Card.Text className="fs-16">
                                <strong>
                                    Phone :- 
                                </strong>
                                {userdata?.phone}
                            </Card.Text>
                        </div>
                    </div>
                    <div className="d-flex my-3 mt-4 justify-content-center ">
                    <Button variant="outlined">Edit Details</Button>
                    </div>
                </Card.Body>
            </Card>
           </div>
        </div>
    </div>

    </div>
  )
}

export default Profile
