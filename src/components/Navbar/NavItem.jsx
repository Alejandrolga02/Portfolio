import PropTypes from "prop-types";

export const NavItem = ({ title, link, handleClose }) => {
	return (
		<li className="navbar-item">
			<a onClick={handleClose} className="navbar-link hover-accent" href={link}>{title}</a>
		</li>
	);
};

NavItem.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	handleClose: PropTypes.func.isRequired
};
