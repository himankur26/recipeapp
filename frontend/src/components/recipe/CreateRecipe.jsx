import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    instructions: "",
    prepTime: "",
    // createdBy: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // Handle text input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // Handle file selection
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
      // formData.append("ingredients", recipe.ingredients);
      formData.append("instructions", recipe.instructions);
      formData.append("prepTime", recipe.prepTime);
      // formData.append("createdBy", recipe.createdBy);
      formData.append("image", selectedFile); // ✅ Ensure correct field name

      console.log("Submitting form data:", formData); // Debugging

      const response = await fetch("http://localhost:5689/recipes/createRecipe", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Response Data:", data); // Debugging

      if (response.ok) {
        alert("Recipe created successfully!");
        setRecipe({
          title: "",
          // ingredients: "",
          instructions: "",
          prepTime: "",
          // createdBy: "",
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
{/* 
        <div className="form-group">
          <label>Ingredients</label>
          <textarea
            className="form-control"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            placeholder="Enter ingredients (comma-separated)"
            required
          />
        </div> */}

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

        {/* <div className="form-group">
          <label>Created By</label>
          <input
            type="text"
            className="form-control"
            name="createdBy"
            value={recipe.createdBy}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div> */}   

        

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
