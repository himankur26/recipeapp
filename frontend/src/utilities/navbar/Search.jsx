import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle search
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a search term.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `http://localhost:5689/recipes/search?title=${searchTerm}`
      );
      setRecipes(response.data.body); // Set retrieved recipes
    } catch (error) {
        console.log(error)
      setError("No recipes found or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Search Recipes</h2>
      <input
        type="text"
        placeholder="Enter recipe name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "60%", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px 15px" }}>
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Recipes */}
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h3>{recipe.title}</h3>
              <p><strong>Category:</strong> {recipe.category}</p>
              <p><strong>Prep Time:</strong> {recipe.prepTime} mins</p>
              <img src={recipe.image} alt={recipe.title} width="150" />
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
              <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </div>
          ))
        ) : (
          !loading && <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
