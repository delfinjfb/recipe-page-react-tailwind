import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => (
  <div className="my-4">
    <h2 className="text-2xl font-serif text-brown-800 mb-2">Ingredients</h2>
    <ul className="list-disc text-base list-inside mt-6 marker:text-brown-800">
      {ingredients.map((ingredient, index) => (
        <li key={index} className="ul4">
          {ingredient}
        </li>
      ))}
    </ul>
  </div>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
