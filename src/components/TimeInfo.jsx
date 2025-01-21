import React from 'react';
import PropTypes from 'prop-types';

const TimeInfo = ({ preparationTime }) => {
  const { total, preparation, cooking } = preparationTime;
  return (
    <div className="bg-rose-50 p-4 rounded-lg mt-4 mb-8 text-stone-900">
      <h2 className="text-2xl  font-sans font-bold text-rose-800">
        Preparation time
      </h2>

      <ul className="text-stone-600 list-disc list-inside -mb-4">
        <li className="ul4">
          <strong>Total:</strong> {total}
        </li>
        <li className="ul4">
          <strong>Preparation:</strong> {preparation}
        </li>
        <li className="ul4">
          <strong>Cooking:</strong> {cooking}
        </li>
      </ul>
    </div>
  );
};
TimeInfo.propTypes = {
  preparationTime: PropTypes.shape({
    total: PropTypes.string.isRequired,
    preparation: PropTypes.string.isRequired,
    cooking: PropTypes.string.isRequired,
  }).isRequired,
};

export default TimeInfo;
