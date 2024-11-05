import React from "react";

const Instructions = () => (
	<div className="my-4 border-y-2 py-4">
		<h3 className="text-lg font-serif font-bold text-brown-800">
			Instructions
		</h3>
		<ol className="list-decimal list-inside text-stone-600 marker:text-brown-800 marker:font-bold ">
			<li className="">
				<strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of
				salt and pepper until they are well mixed. You can add a tablespoon of
				water or milk for a fluffier texture.
			</li>
			<li>
				<strong>Heat the pan:</strong> Place a non-stick frying pan over medium
				heat and add butter or oil.
			</li>
			<li>
				<strong>Cook the omelette:</strong> Once the butter is melted and
				bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat
				the surface.
			</li>
			<li>
				<strong>Add fillings (Optional);</strong>When the eggs begin to set at
				the edges but are still slightly runny in the middle, sprinkle your
				chosen fillings over one half of the omelette.
			</li>

			<li>
				<strong> Fold and serve: </strong> As the omelette continues to cook,
				carefully lift one edge and fold it over the fillings. Let it cook for
				another minute, then slide it onto a plate.
			</li>
			<li>
				<strong> Enjoy: </strong> Serve hot, with additional salt and pepper if
				needed.
			</li>
		</ol>
	</div>
);

export default Instructions;
