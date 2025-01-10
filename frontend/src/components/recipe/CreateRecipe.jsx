import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    prepTime: '',
    // createdBy: '',
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in recipe) {
      formData.append(key, recipe[key]);
    }
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:5689/recipes/createRecipe', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert('Recipe created successfully!');
      console.log('Recipe Created:', response.data);

      // Reset form fields
      setRecipe({
        title: '',
        ingredients: '',
        instructions: '',
        prepTime: '',
        // createdBy: '',
      });
      setImage(null);
    } catch (error) {
      console.error('Error creating recipe:', error);
      alert('Failed to create recipe. Please try again.');
    }
  };
console.log(recipe)
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Recipe</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            placeholder="Enter recipe title"
          />
        </div>

        <div className="form-group">
          <label>Ingredients</label>
          <textarea
            className="form-control"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="Enter ingredients (comma-separated)"
          />
        </div>

        <div className="form-group">
          <label>Instructions</label>
          <textarea
            className="form-control"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            placeholder="Enter instructions"
          />
        </div>

        <div className="form-group">
          <label>Preparation Time (in minutes)</label>
          <input
            type="number"
            className="form-control"
            name="prepTime"
            value={recipe.prepTime}
            onChange={handleChange}
            placeholder="Enter preparation time"
          />
        </div>

        {/* <div className="form-group">
          <label>Created By</label>
          <input
            type="text"
            className="form-control"
            name="createdBy"
            value={recipe.createdBy}
            onChange={handleChange}
            placeholder="Enter creator's name"
          />
        </div> */}

        <div className="form-group">
          <label>Recipe Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Create Recipe
        </button>
      </form>
    </div>
  );
}

export default CreateRecipe;
