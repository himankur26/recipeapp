import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    instructions: "",
    ingredients: [{ name: "", quantity: "" }], // ✅ Ensuring ingredients is always an array
    prepTime: "",
    category: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // Handle text input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // Handle ingredients changes
  const handleIngredientChange = (index, event) => {
    const { name, value } = event.target;
    const updatedIngredients = [...recipe.ingredients];
    updatedIngredients[index][name] = value;
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  // Add a new ingredient field
  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, { name: "", quantity: "" }],
    });
  };

  // Remove an ingredient field
  const removeIngredient = (index) => {
    const updatedIngredients = recipe.ingredients.filter((_, i) => i !== index);
    setRecipe({ ...recipe, ingredients: updatedIngredients });
  };

  // Handle file selection
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!selectedFile) {
        alert("Please upload a recipe image.");
        return;
      }

      const formData = new FormData();
      formData.append("title", recipe.title);
      formData.append("instructions", recipe.instructions);
      formData.append("ingredients", JSON.stringify(recipe.ingredients)); // ✅ Send as JSON
      formData.append("prepTime", recipe.prepTime);
      formData.append("category", recipe.category);
      formData.append("image", selectedFile); // ✅ File Upload

      const response = await fetch("http://localhost:5689/recipes/createRecipe", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (response.ok) {
        alert("Recipe created successfully!");
        setRecipe({
          title: "",
          ingredients: [{ name: "", quantity: "" }], // ✅ Reset as an array
          instructions: "",
          prepTime: "",
          category: "veg",
        });
        setSelectedFile(null);
      } else {
        alert(`Failed to create recipe: ${data.message}`);
      }
    } catch (error) {
      alert("An error occurred while creating the recipe.");
      console.error("Error:", error);
    }
  };

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
            required
          />
        </div>

        <div className="form-group">
          <label>Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="d-flex mb-2">
              <input
                type="text"
                className="form-control me-2"
                name="name"
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, e)}
                placeholder="Ingredient name"
                required
              />
              <input
                type="text"
                className="form-control me-2"
                name="quantity"
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, e)}
                placeholder="Quantity"
                required
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeIngredient(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>

        <div className="form-group">
          <label>Instructions</label>
          <textarea
            className="form-control"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            placeholder="Enter instructions"
            required
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
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            className="form-control"
            value={recipe.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
            <option value="Desert">Desert</option>
          </select>
        </div>

        <div className="form-group">
          <label>Recipe Image</label>
          <input
            type="file"
            className="form-control"
            onChange={onFileChange}
            accept="image/*"
            required
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
