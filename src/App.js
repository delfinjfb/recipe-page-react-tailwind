import React, {useEffect, useState} from "react";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";
import recipesData from "./data/recipes.json";

function App() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		// Set the document title based on the current recipe
		document.title = recipesData[currentIndex].title || "Recipe Page";
	}, [currentIndex]);

	const handleNextRecipe = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % recipesData.length);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<main role="main" className="bg-stone-100 min-h-screen p-4">
			<div className="max-w-4xl mx-auto">
				<RecipeCard recipe={recipesData[currentIndex]} />
				<div className="text-center my-6">
					<button
						onClick={handleNextRecipe}
						className="px-4 py-2 bg-rose-800 text-white rounded hover:bg-rose-700 focus:outline-none focus:ring focus:ring-rose-600"
					>
						Next Recipe
					</button>
				</div>
				<Footer />
			</div>
		</main>
	);
}

export default App;
