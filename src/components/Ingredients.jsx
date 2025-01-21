import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ingredients}) => (
	<div className="my-4 border-t-2 pt-4">
		<h2 className="text-2xl font-serif text-brown-800 mb-2">Ingredients</h2>
		<ul className="list-disc pl-6">
			{ingredients.map((ingredient, index) => (
				<li key={index}>
					{typeof ingredient.quantity === "number"
						? `${ingredient.quantity} `
						: ""}
					{ingredient.unit && ingredient.unit !== ""
						? `${ingredient.unit} `
						: ""}
					{ingredient.name} {ingredient.note}
				</li>
			))}
		</ul>
	</div>
);

Ingredients.propTypes = {
	ingredients: PropTypes.arrayOf(
		PropTypes.shape({
			quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			unit: PropTypes.string,
			name: PropTypes.string.isRequired
		})
	).isRequired
};

export default Ingredients;