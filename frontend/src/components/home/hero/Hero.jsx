//import React from 'react'
import "./Hero.css"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function Hero() {
  return (
    <div className="container-fluid">
   <div className="row" >
    <div className="col-lg-6 "  style = {{position:"sticky",top:"3px"}}>
    <div className=" heroCol1 d-flex justify-content-center align-items-center ">

        <div className="bg-white w-75 position-relative">
        <div className="heroBorder my-3 mx-3" ><span className="feature">Features</span>
            <p className="heroText text-center mt-2 px-2 ">For Dr. Jessica B. Harris, Kwanzaa Is a Holiday of Improvisation, Family, and Ritual</p>
            <div className="text-center px-2 mb-2"> Kwanzaa is a time of feasting, and of self-examination. It was at first celebrated mainly by cultural nationalists who wished to express their Pan-African solidarity. Yet, as word of the new holiday and its family-strengthening virtues spread, Black Americans from all walks of life began to celebrate the</div>
        </div>
        </div>
    </div>
    </div>
    <div className="col-lg-6 d-flex flex-wrap justify-content-evenly gap-3" style = {{overflow:"auto"}}>
    <Link className="text-decoration-none">
    <Card style={{ width: '18rem' }}>
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
    <Card style={{ width: '18rem' }}>
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
    <Card style={{ width: '18rem' }}>
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
    <Card style={{ width: '18rem' }}>
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
      
    </div>
  )
}

export default Hero
