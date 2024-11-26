import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeImage from "./RecipeImage";
import RecipeTitle from "./RecipeTitle";
import TimeInfo from "./TimeInfo";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import recipesData from "../data/recipes.json";
import { scaleRecipe } from "../utils/scaleRecipe"; // Import scaling function

const RecipeCard = ({ handleNextRecipe }) => {
  const { recipeCode } = useParams(); // Get recipeCode from the URL
  const originalRecipe = recipesData.find((r) => r.code === recipeCode); // Find the recipe by code

  const [servings, setServings] = useState(originalRecipe?.servings || 1);
  const [scaledRecipe, setScaledRecipe] = useState(() =>
    scaleRecipe(originalRecipe, servings)
  );

  useEffect(() => {
    if (originalRecipe) {
      // Update document title and scroll to the top when the recipe changes
      document.title = originalRecipe.title || "Recipe Page";
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Update the scaled recipe when servings or originalRecipe changes
      setScaledRecipe(scaleRecipe(originalRecipe, servings));
    } else {
      document.title = "Recipe Not Found";
    }
  }, [originalRecipe, servings]);

  // Handle the case when the recipe is not found
  if (!originalRecipe) {
    return <p className="text-center text-red-600">Recipe not found.</p>;
  }

  // Function to handle servings selection change
  const handleServingsChange = (e) => {
    const newServings = parseInt(e.target.value, 10);
    if (newServings > 0) {
      setServings(newServings);
    }
  };

  return (
    <>
      <div className="bg-white my-10 shadow-md rounded-lg max-w-lg mx-auto p-9 pb-0 sm:max-w-[375px] md:max-w-[820px]">
        <RecipeImage src={scaledRecipe.image} alt={scaledRecipe.title} />
        <div className="p-4">
          <RecipeTitle title={scaledRecipe.title} description={scaledRecipe.description} />
          
          {/* Servings Adjustment Select Field */}
          <div className="mb-4">
            <label htmlFor="servings" className="font-semibold text-stone-600">
              Number of Servings:
            </label>
            <select
              id="servings"
              value={servings}
              onChange={handleServingsChange}
              className="ml-2 w-20 border rounded px-2 py-1"
            >
              {originalRecipe.scalableServings.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <TimeInfo preparationTime={scaledRecipe.preparationTime} />
          <Ingredients ingredients={scaledRecipe.ingredients} />
          <Instructions elements={scaledRecipe.instructions} />
          <Nutrition elements={scaledRecipe.nutrition} />
        </div>
      </div>
      <div className="text-center my-2">
        <button
          onClick={() => handleNextRecipe(originalRecipe.code)}
          className="px-4 py-2 bg-rose-800 text-white rounded hover:bg-rose-700 focus:outline-none focus:ring focus:ring-rose-600"
        >
          Next Recipe
        </button>
      </div>
    </>
  );
};

export default RecipeCard;
