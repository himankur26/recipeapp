//import React from 'react'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function HolidayExchange() {
  return (
    <div className="container my-5">
    <h1 className="text-center my-4">The Holiday Cookie Exchange </h1>
    <div className="d-flex flex-wrap justify-content-evenly ">
   
    <Link className="text-decoration-none">
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Ae3m6WMp3hMSbfiAcbvA4UpRdv0=/300x200/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Holiday-Baking-LEAD-recirc-6fd62d7b5ccf4bf486315c0f43b70949.jpg" />
      <Card.Body>
        <Card.Title>The (Totally Easy) Holiday Baking Issue</Card.Title>
        <Card.Text>
        Now that the holidays are here, there’s no doubt our kitchen will turn into a holiday bakeshop. My helpers and I will need lots of 
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    <Link className="text-decoration-none">
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Ae3m6WMp3hMSbfiAcbvA4UpRdv0=/300x200/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Holiday-Baking-LEAD-recirc-6fd62d7b5ccf4bf486315c0f43b70949.jpg" />
      <Card.Body>
        <Card.Title>The (Totally Easy) Holiday Baking Issue</Card.Title>
        <Card.Text>
        Now that the holidays are here, there’s no doubt our kitchen will turn into a holiday bakeshop. My helpers and I will need lots of 
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    <Link className="text-decoration-none">
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://www.simplyrecipes.com/thmb/Ae3m6WMp3hMSbfiAcbvA4UpRdv0=/300x200/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Easy-Holiday-Baking-LEAD-recirc-6fd62d7b5ccf4bf486315c0f43b70949.jpg" />
      <Card.Body>
        <Card.Title>The (Totally Easy) Holiday Baking Issue</Card.Title>
        <Card.Text>
        Now that the holidays are here, there’s no doubt our kitchen will turn into a holiday bakeshop. My helpers and I will need lots of 
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>

    </div>
      
    </div>
  )
}

export default HolidayExchange