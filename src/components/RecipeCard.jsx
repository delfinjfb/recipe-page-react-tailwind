import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import RecipeImage from "./RecipeImage";
import RecipeTitle from "./RecipeTitle";
import TimeInfo from "./TimeInfo";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import recipesData from "../data/recipes.json";

const RecipeCard = ({handleNextRecipe}) => {
	const {recipeCode} = useParams(); // Get recipeCode from the URL
	const recipe = recipesData.find(r => r.code === recipeCode); // Find the recipe by code

	useEffect(() => {
		if (recipe) {
			// Update the document title and scroll to the top when recipe changes
			document.title = recipe.title || "Recipe Page";
			window.scrollTo({top: 0, behavior: "smooth"});
		} else {
			document.title = "Recipe Not Found";
		}
	}, [recipe]);

	// Handle the case when the recipe is not found
	if (!recipe) {
		return <p className="text-center text-red-600">Recipe not found.</p>;
	}

	return (
		<>
			<div className="bg-white my-20 shadow-md rounded-lg max-w-lg mx-auto p-9 pb-0 sm:max-w-[375px] md:max-w-[820px]">
				<RecipeImage src={recipe.image} alt={recipe.title} />
				<div className="p-4">
					<RecipeTitle title={recipe.title} description={recipe.description} />
					<TimeInfo preparationTime={recipe.preparationTime} />
					<Ingredients ingredients={recipe.ingredients} />
					<Instructions elements={recipe.instructions} />
					<Nutrition elements={recipe.nutrition} />
				</div>
			</div>
			<div className="text-center my-2">
				<button
					onClick={() => handleNextRecipe(recipe.code)}
					className="px-4 py-2 bg-rose-800 text-white rounded hover:bg-rose-700 focus:outline-none focus:ring focus:ring-rose-600"
				>
					Next Recipe
				</button>
			</div>
		</>
	);
};

export default RecipeCard;
