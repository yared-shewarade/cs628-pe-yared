import React, { useState } from 'react';

const AddRecipe = ({ onAddRecipe }) => {
  // Initialize state for form fields
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    // Add more fields as needed
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddRecipe function from props to add the new recipe
    onAddRecipe(recipe);
    // Reset the form fields
    setRecipe({
      name: '',
      ingredients: '',
      instructions: '',
      // Reset other fields as needed
    });
  };

  return (
    <div className="add-recipe">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Cooking Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
            rows="6"
            required
          ></textarea>
        </div>
        {/* Add more form fields for other recipe details */}
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;