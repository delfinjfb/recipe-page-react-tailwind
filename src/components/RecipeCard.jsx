import React from "react";
import RecipeImage from "./RecipeImage";
import RecipeTitle from "./RecipeTitle";
import TimeInfo from "./TimeInfo";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

const RecipeCard = ({recipe}) => (
	<div className="bg-white my-20 shadow-md rounded-lg max-w-lg mx-auto p-9 pb-0 sm:max-w-[375px] md:max-w-[820px]">
		<RecipeImage src={recipe.image}  />
		<div className=" p-4">
			<RecipeTitle title={recipe.title} description={recipe.description} />
			<TimeInfo preparationTime={recipe.preparationTime} />
			<Ingredients ingredients={recipe.ingredients} />
			<Instructions elements={recipe.instructions} />
			<Nutrition elements={recipe.nutrition} />
		</div>
	</div>
);

export default RecipeCard;
