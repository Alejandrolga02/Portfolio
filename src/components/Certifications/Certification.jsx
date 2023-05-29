import PropTypes from "prop-types";

export const Certification = ({ icon, link, name, issuer }) => {
	return (
		<div className="item-padding">
			<div className="certification-container group">
				<img className="certification-icon" src={icon} />
				<a className="group-hover:text-accent accent-text" href={link} target="_blank" rel="noreferrer">
					{name}
				</a>
				<p className="">{issuer}</p>
			</div>
		</div>
	);
};

Certification.propTypes = {
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	issuer: PropTypes.string.isRequired,
};
