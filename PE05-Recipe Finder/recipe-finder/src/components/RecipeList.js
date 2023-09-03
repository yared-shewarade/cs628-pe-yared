import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const toggleRecipeDetails = (recipeId) => {
    // If the clicked recipe is already selected, deselect it. Otherwise, select it.
    setSelectedRecipe((prevSelected) => (prevSelected === recipeId ? null : recipeId));
  };

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <div onClick={() => toggleRecipeDetails(recipe.id)}>
              {recipe.name}
              {selectedRecipe === recipe.id && (
                <div>
                  <h3>Ingredients:</h3>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h3>Instructions:</h3>
                  <p>{recipe.instructions}</p>
                </div>
              )}
            </div>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;