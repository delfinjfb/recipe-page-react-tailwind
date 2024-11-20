import React, {useEffect} from "react";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";

function App() {
	useEffect(() => {
		document.title = "Recipe Page:: Simple Omelette Recipe";
	}, []);
	return (
		<main>
			<div className="bg-stone-100 min-h-screen p-4">
				<RecipeCard />
			</div>
			<Footer />
		</main>
	);
}

export default App;
