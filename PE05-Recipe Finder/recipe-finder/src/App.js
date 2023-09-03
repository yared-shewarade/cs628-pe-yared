import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';
import UpdateRecipe from './components/UpdateRecipe';


import './index.css';

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      ingredients: 'Pasta, eggs, pancetta, cheese',
      instructions: 'Cook pasta, fry pancetta, mix eggs and cheese, combine all ingredients.',
    },
    {
      id: 2,
      name: 'Chicken Alfredo',
      ingredients: 'Chicken, fettuccine, cream sauce, parmesan',
      instructions: 'Cook chicken, boil fettuccine, make cream sauce, mix.',
    },
    {
      id: 3,
      name: 'Spaghetti Carbonara',
      ingredients: [
        '200g spaghetti',
        '150g pancetta or guanciale, diced',
        '2 large eggs',
        '50g pecorino cheese, grated',
        '50g Parmesan cheese, grated',
        '2 cloves garlic, minced',
        'Salt and black pepper to taste',
        'Fresh parsley, chopped (for garnish)',
      ],
      instructions: `
        1. Bring a large pot of salted water to a boil. Add spaghetti and cook until al dente.
        2. In a separate bowl, whisk together eggs, grated pecorino cheese, and grated Parmesan cheese.
        3. In a pan, sauté the diced pancetta or guanciale until it's crispy. Add minced garlic and cook for another minute.
        4. Drain the cooked pasta, and while it's still hot, add it to the pan with the pancetta.
        5. Remove the pan from heat and quickly stir in the egg and cheese mixture. The heat from the pasta will cook the eggs and create a creamy sauce.
        6. Season with salt and black pepper to taste. Garnish with chopped fresh parsley.
        7. Serve immediately.
      `,
    },
    {
      id: 4,
      name: 'Chicken Alfredo',
      ingredients: [
        '2 boneless, skinless chicken breasts',
        '250g fettuccine pasta',
        '2 cups heavy cream',
        '1/2 cup unsalted butter',
        '1 cup grated Parmesan cheese',
        '2 cloves garlic, minced',
        'Salt and black pepper to taste',
        'Fresh parsley, chopped (for garnish)',
      ],
      instructions: `
        1. Season chicken breasts with salt and black pepper. Grill or cook in a pan until fully cooked, then slice into thin strips.
        2. Cook fettuccine pasta according to package instructions until al dente. Drain and set aside.
        3. In a large saucepan, melt the butter over medium heat. Add minced garlic and sauté for about 1 minute.
        4. Pour in the heavy cream and bring to a simmer. Reduce heat and let it simmer for about 2 minutes.
        5. Stir in the grated Parmesan cheese until the sauce is smooth and creamy.
        6. Add the cooked pasta and sliced chicken to the sauce. Toss to coat everything evenly.
        7. Season with salt and black pepper to taste. Garnish with chopped fresh parsley.
        8. Serve hot.
      `,
    },
    {
      id: 5,
      name: 'Margherita Pizza',
      ingredients: [
        '1 pizza dough ball',
        '1/2 cup tomato sauce',
        '1 1/2 cups mozzarella cheese, shredded',
        'Fresh basil leaves',
        '1-2 cloves garlic, minced',
        'Olive oil',
        'Salt and black pepper to taste',
      ],
      instructions: `
        1. Preheat your oven to its highest temperature (usually around 500°F or 260°C) with a pizza stone or baking sheet inside.
        2. Roll out the pizza dough on a floured surface to your desired thickness.
        3. Transfer the rolled-out dough to a piece of parchment paper.
        4. Spread a thin layer of tomato sauce over the dough, leaving a small border around the edges for the crust.
        5. Sprinkle shredded mozzarella cheese evenly over the sauce.
        6. Scatter minced garlic over the cheese.
        7. Season with salt and black pepper to taste.
        8. Transfer the parchment paper with the pizza onto the preheated pizza stone or baking sheet in the oven.
        9. Bake for about 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.
        10. Remove from the oven, top with fresh basil leaves, and drizzle with a bit of olive oil.
        11. Slice and serve.
      `,
    },
    {
      id: 6,
      name: 'Chicken Stir-Fry',
      ingredients: [
        '2 boneless, skinless chicken breasts, cut into strips',
        '1 red bell pepper, sliced',
        '1 yellow bell pepper, sliced',
        '1 broccoli head, cut into florets',
        '1 carrot, thinly sliced',
        '1/2 cup snap peas, trimmed',
        '3 cloves garlic, minced',
        '1/4 cup soy sauce',
        '1 tablespoon honey',
        '1 teaspoon cornstarch',
        '1/2 teaspoon ginger, grated',
        '1/2 teaspoon red pepper flakes (optional)',
        'Cooking oil',
        'Salt and black pepper to taste',
      ],
      instructions: `
        1. In a small bowl, whisk together soy sauce, honey, cornstarch, grated ginger, and red pepper flakes (if using). Set aside.
        2. Heat a large skillet or wok over high heat. Add a bit of cooking oil and swirl to coat.
        3. Add the sliced chicken to the hot skillet and cook until no longer pink. Remove from the skillet and set aside.
        4. In the same skillet, add more oil if needed. Add minced garlic and cook for about 30 seconds.
        5. Add all the sliced vegetables (bell peppers, broccoli, carrots, snap peas) to the skillet. Stir-fry for about 3-4 minutes until the vegetables are crisp-tender.
        6. Return the cooked chicken to the skillet.
        7. Pour the prepared sauce over the chicken and vegetables. Stir well to coat everything evenly.
        8. Cook for an additional 2-3 minutes, or until the sauce thickens and everything is heated through.
        9. Season with salt and black pepper to taste.
        10. Serve hot.
      `,
    },
    {
      id: 7,
      name: 'Chocolate Chip Cookies',
      ingredients: [
        '1 cup (2 sticks) unsalted butter, softened',
        '3/4 cup granulated sugar',
        '3/4 cup brown sugar, packed',
        '2 large eggs',
        '1 teaspoon pure vanilla extract',
        '2 1/4 cups all-purpose flour',
        '1/2 teaspoon baking soda',
        '1 teaspoon salt',
        '2 cups semisweet chocolate chips',
      ],
      instructions: `
        1. Preheat your oven to 375°F (190°C).
        2. In a large mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until the mixture is light and fluffy.
        3. Beat in the eggs one at a time, then stir in the vanilla.
        4. In a separate bowl, whisk together the flour, baking soda, and salt.
        5. Gradually add the dry ingredients to the wet ingredients and mix until just combined.
        6. Fold in the chocolate chips.
        7. Drop rounded tablespoons of cookie dough onto ungreased baking sheets.
        8. Bake in the preheated oven for 10-12 minutes or until the edges are golden brown.
        9. Let the cookies cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely.
        10. Enjoy!
      `,
    },
  ]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const updateRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(updatedRecipes);
  };

  const deleteRecipe = (recipeId) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
  };

  return (
    <Router>
      <div className="App">
        <h1>Recipe Finder</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/add-recipe">Add Recipe</Link> 
            {/* Add Recipe link */}
            </li>
            <li>
              <Link to="/recipe-list">Recipe List</Link>
            </li>
            <li>
              <Link to="/recipe-details">Recipe Details</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Welcome to Recipe Finder</h2>
                <p>Discover and manage your favorite recipes with ease!</p>
                <p>Note: This is PE05 assignment by Yared Shewarade</p>
              </div>
            }
          />
          <Route
            path="/recipe-list"
            element={
              <div>
                <h2>Recipe List</h2>
                <RecipeList recipes={recipes} />
              </div>
            }
          />
          <Route
            path="/recipe/:id"
            element={<RecipeDetails recipes={recipes} onDelete={deleteRecipe} />}
          />
          <Route
            path="/add-recipe"
            element={<AddRecipe onAddRecipe={addRecipe} />}
          />
          <Route
            path="/update-recipe/:id"
            element={<UpdateRecipe onUpdate={updateRecipe} />}
          />
          <Route
            path="/recipe-details/:id"
            element={<RecipeDetails recipes={recipes} onDelete={deleteRecipe} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;