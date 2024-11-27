import React from "react";
import RecipeGrid from "../components/RecipeGrid";

const Home = () => {
	return (
		<div className="bg-stone-100 min-h-screen">
			<div className="max-w-6xl mx-auto p-6">
				<h1 className="text-3xl font-bold text-center mb-8 text-rose-800">
					All Recipes
				</h1>
				<RecipeGrid />
			</div>
		</div>
	);
};

export default Home;
