import PropTypes from "prop-types";
import 'animate.css';

export const Project = ({image, name, description, link}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div className="flex flex-col gap-4 animate__animated animate__fadeIn">
				<img src={image} className="aspect-video object-cover" alt="Imagen proyecto" />
			</div>
			<div className="col-start-1 row-start-1 md:col-start-2 animate__animated animate__fadeIn">
				<h4 className="text-2xl mb-2">{name}</h4>
				<p className="mb-4">{description}</p>
				<p className="text-lg text-gray-300 text-center">
					{link ? (
						<a href={link} target="_blank" rel="noreferrer" className="text-lg text-accent text-center hover:border-b transition-all duration-150 ease-in-out hover:border-b-accent">
							Link to the project
						</a>
					) : (
						"Not Available"
					)}
				</p>
			</div>
		</div>
	);
};

Project.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	link: PropTypes.any.isRequired,
};
