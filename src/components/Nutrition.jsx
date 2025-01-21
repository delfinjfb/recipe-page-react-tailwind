import React from 'react';
import PropTypes from 'prop-types';

const Nutrition = ({ elements }) => (
  <div className="my-6">
    <h2 className="text-2xl font-semibold text-brown-800 mb-4">Nutrition</h2>
    <p className="p-4 text-stone-600">
      The table below shows nutritional values per serving without the
      additional fillings.
    </p>

    <table className="w-full text-stone-600 border-collapse">
      <tbody>
        {elements.map((item, index) => (
          <tr key={index} className="border-b border-stone-150">
            <td className="p-4 capitalize">{item.nutrient}</td>
            <td className="p-2 text-brown-800 font-bold">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Nutrition.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      nutrient: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Nutrition;
