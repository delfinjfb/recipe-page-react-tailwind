import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import recipesData from "../data/recipes.json";

const AppRoutes = () => {
  const handleNextRecipe = (currentRecipeCode) => {
    const currentIndex = recipesData.findIndex((r) => r.code === currentRecipeCode);
    const nextIndex = (currentIndex + 1) % recipesData.length;
    const nextRecipe = recipesData[nextIndex];
    window.location.href = `/recipes/${nextRecipe.code}`;
  };

  return (
    <Routes>
      {/* Redirect root path to the default recipe (omelette) */}
      <Route path="/" element={<Navigate to="/recipes/omelette" replace />} />
      
      {/* Redirect `/recipes/` to `/recipes/omelette` */}
      <Route path="/recipes" element={<Navigate to="/recipes/omelette" replace />} />

      {/* Dynamic recipe route */}
      <Route
        path="/recipes/:recipeCode"
        element={<RecipeCard handleNextRecipe={handleNextRecipe} />}
      />
    </Routes>
  );
};

export default AppRoutes;
