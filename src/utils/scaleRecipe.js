// src/utils/scaleRecipe.js

/**
 * Scales the ingredients and nutrition values of a recipe to the desired number of servings.
 * @param {Object} recipe - The recipe object.
 * @param {number} desiredServings - The number of servings to scale to.
 * @returns {Object} - The recipe with scaled ingredient and nutrition quantities.
 */
export function scaleRecipe(recipe, desiredServings) {
  if (!recipe || !desiredServings) return recipe;

  const scaleFactor = desiredServings / recipe.servings;

  // Create a deep copy of the recipe to avoid mutating the original
  const scaledRecipe = JSON.parse(JSON.stringify(recipe));

  // Update servings in scaled recipe
  scaledRecipe.servings = desiredServings;

  // Scale each ingredient's quantity
  scaledRecipe.ingredients = recipe.ingredients.map((ingredient) => {
    if (typeof ingredient.quantity === "number") {
      return {
        ...ingredient,
        quantity: ingredient.quantity * scaleFactor,
      };
    }
    return ingredient; // Return unchanged if quantity is "to taste"
  });

  // Scale nutrition quantities
  scaledRecipe.nutrition = recipe.nutrition.map((nutrient) => {
    if (typeof nutrient.quantity === "number") {
      return {
        ...nutrient,
        quantity: nutrient.quantity * scaleFactor,
      };
    }
    return nutrient; // Return unchanged if it's not numeric
  });

  return scaledRecipe;
}
