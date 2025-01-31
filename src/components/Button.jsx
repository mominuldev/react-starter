import { Link } from "react-router";
import PropTypes from "prop-types";

const Button = ({ url, title }) => {
	return (
		<Link to={url} className='pps-btn'>
			{title}
		</Link>
	);
};

Button.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Button;
