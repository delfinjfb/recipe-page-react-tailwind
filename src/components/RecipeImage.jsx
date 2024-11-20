import React from "react";
import PropTypes from "prop-types";

const RecipeImage = ({src, alt}) => (
	<img
		src={src}
		alt={alt || ""}
		className="rounded-t-lg w-full h-85 object-cover"
	/>
);

RecipeImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string
};

RecipeImage.defaultProps = {
	alt: ""
};

export default RecipeImage;
