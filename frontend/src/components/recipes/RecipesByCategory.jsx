import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";

function RecipesByCategory() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5689/recipes/category/${category}`);
        const result = await response.json();
        setData(result.body);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]); // Removed `data` from dependencies to prevent infinite re-renders

  console.log(data, "this is data");

  return (
    <div className='d-flex flex-wrap gap-5 container mt-5'>
      {data.map((recipe) => (
        <div className='d-flex flex-wrap' key={recipe._id}>
          <Card className='' style={{ width: '18rem' }}>
            <Card.Img className='' variant="top" src={recipe.image} />
            <Card.Body>
              <Card.Title className='cardtitle'>{recipe.category}</Card.Title>
              <Button variant="primary" as={Link} to={`/singleRecipe/${recipe._id}`}>
                View Recipe
              </Button>
            </Card.Body>
          </Card> 
        </div>
      ))}
    </div>
  );
}

export default RecipesByCategory;
