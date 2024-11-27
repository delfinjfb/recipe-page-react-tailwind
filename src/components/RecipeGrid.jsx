import React from "react";
import {Link} from "react-router-dom";
import recipesData from "../data/recipes.json";
import RecipeImage from "./RecipeImage";

const RecipeGrid = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
			{recipesData.map(recipe => (
				<Link
					to={`/recipes/${recipe.code}`}
					key={recipe.code}
					className="block group"
				>
					<div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
						<RecipeImage
							src={recipe.image}
							alt={recipe.title}
							className="object-cover h-48 w-full"
						/>
						<div className="p-4 bg-white flex-grow flex flex-col">
							<h3 className="text-lg font-bold text-gray-800 group-hover:text-rose-800 transition-colors">
								{recipe.title}
							</h3>
							<p className="text-sm text-gray-600 mt-auto">
								{recipe.description}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default RecipeGrid;
