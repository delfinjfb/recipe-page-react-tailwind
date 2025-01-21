import React from 'react';
import PropTypes from 'prop-types';

const RecipeTitle = ({ title, description }) => {
  return (
    <div className="mb-4">
      <h1 className="text-3xl font-serif text-brown-800 -ml-4">{title}</h1>
      <p className="text-base text-stone-600 mt-2">{description}</p>
    </div>
  );
};

RecipeTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecipeTitle;
