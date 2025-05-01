import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ elements }) => (
  <div className="my-4 border-y-2 py-4">
    <h2 className="text-2xl font-semibold text-brown-800 mb-4">Instructions</h2>
    <ol className="list-decimal pl-6">
      {elements.map((instruction, index) => (
        <li key={index} className="mb-2">
          <strong>
            {instruction.step ? `Step ${instruction.step}: ` : ''}
          </strong>
          {instruction.description}
        </li>
      ))}
    </ol>
  </div>
);

Instructions.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Instructions;
