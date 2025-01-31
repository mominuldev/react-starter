import PropTypes from "prop-types";

const Heading = ({ title, className }) => {
	return <h2 className={`'uppercase font-medium' ${className}`}>{title}</h2>;
};

Heading.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Heading;
