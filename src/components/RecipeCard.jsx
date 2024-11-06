import React from "react";
import RecipeImage from "./RecipeImage";
import RecipeTitle from "./RecipeTitle";
import TimeInfo from "./TimeInfo";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

const RecipeCard = () => (
	<div className="bg-white my-20 shadow-md rounded-lg max-w-lg mx-auto p-9 sm:max-w-[375px] md:max-w-[820px]">
		<RecipeImage />
		<div className=" p-4">
			<RecipeTitle />
			<TimeInfo />
			<Ingredients />
			<Instructions />
			<Nutrition />
		</div>
	</div>
);

export default RecipeCard;
