import PropTypes from "prop-types";

export const Certification = ({ icon, link, name, issuer }) => {
	return (
		<div className="certification-padding">
			<div className="certification-container">
				<i className="certification-icon group">{icon}</i>
				<a className="group-hover:text-accent certification-name" href={link} target="_blank" rel="noreferrer">
					{name}
				</a>
				<p className="">{issuer}</p>
			</div>
		</div>
	);
};

Certification.propTypes = {
	icon: PropTypes.object.isRequired,
	link: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	issuer: PropTypes.string.isRequired,
};
