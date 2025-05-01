import React from 'react';
import PropTypes from 'prop-types';

const Nutrition = ({ elements }) => (
  <div className="my-6">
    <h2>Nutrition</h2>
    <p className="p-4">
      The table below shows nutritional values per serving without the
      additional fillings.
    </p>

    <table className="w-full text-stone-600 border-collapse">
      <tbody>
        {elements.map((element, index) => (
          <tr key={index} className="border-b border-stone-150">
            <td className="p-4">{element.nutrient}</td>
            <td className="p-2 text-brown-800 font-bold">
              {element.quantity} {element.unit}
            </td>
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
      quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Nutrition;
