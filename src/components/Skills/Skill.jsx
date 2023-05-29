import PropTypes from "prop-types";

export const Skill = ({ name, icon }) => {
	return (
		<div className="skill-padding">
			<div className="skill-container group">
				<img className="skill-icon group-hover:shadow-skill" src={icon} />
				<a className="group-hover:text-accent accent-text text-center" target="_blank" rel="noreferrer">
					{name}
				</a>
			</div>
		</div>
	);
};

Skill.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};
