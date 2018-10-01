import React from "react";
import PropTypes from "prop-types";

const getBaloonStyles = (size) => {
	const scale = size > 1 ? 1 : size;

	return {
		transform: `scale(${1 + scale})`,
		color: `hsl(0, ${Math.ceil(100 * scale)}%, 50%)`,
	};
};

const Balloon = ({
	size,
	label,
	labelBang,
}) => (
	<h1 style={getBaloonStyles(size)}>
		{ size < 1 ? label : labelBang }
	</h1>
);

Balloon.propTypes = {
	label: PropTypes.node.isRequired,
	labelBang: PropTypes.node,
	size: PropTypes.number,
};

Balloon.defaultProps = {
	labelBang: 'Bang!!!',
	size: 0,
};

export default Balloon;