import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function AllRecipes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5689/recipes/getRecipes')
      .then((response) => response.json())
      .then((data) => {
        setData(data.body);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run only once after initial render

  console.log(data,"this is data");

  return (
    
    <div className='d-flex flex-wrap gap-5 container mt-5'>
      {data.map((recipe) => (
        <div className='d-flex flex-wrap' key={recipe.title}>
         <Card className= '' style={{ width: '18rem' }}>
      <Card.Img  className='' variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title className='cardtitle'>{recipe.category}
        </Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="primary" as={Link} to={`/singleRecipe/${recipe._id}`}>Go somewhere</Button>
      </Card.Body>
    </Card> 
        </div>
      ))}
    </div>
  );
}

export default AllRecipes;
