import { useEffect, useState } from "react";

import { projects } from "../../data/projects";
import { useCallback } from "react";

export const Projects = () => {
	const [index, setIndex] = useState(0);
	const project = projects[index];

	const handleNext = useCallback(() => {
		if (index === projects.length - 1) {
			return setIndex(0);
		}
		return setIndex(index + 1);
	}, [index]);

	const handlePrevious = useCallback(() => {
		if (index === 0) {
			return setIndex(projects.length - 1);
		}
		return setIndex(index - 1);
	}, [index]);

	useEffect(() => {
		const nextSlideTimeout = setTimeout(() => {
			handleNext();
		}, 3000);

		return () => {
			clearTimeout(nextSlideTimeout);
		};
	}, [handleNext]);

	return (
		<div className="container text-slate-100 py-4">
			<h3 className="heading" id="projects">
				My <span className="text-accent">Projects</span>
			</h3>
			<div className="flex flex-row justify-around gap-4 mb-4">
				<button onClick={handlePrevious} className="border-2 border-purple-600 w-full py-2 hover:bg-purple-600 transition-all duration-500 ease-in-out max-w-[200px]">
					PREVIOUS
				</button>
				<button onClick={handleNext} className="border-2 border-purple-600 w-full py-2 hover:bg-purple-600 transition-all duration-500 ease-in-out max-w-[200px]">
					NEXT
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="flex flex-col gap-4">
					<img src={project.image} className="aspect-video object-cover" alt="Imagen proyecto" />
				</div>
				<div className="col-start-1 row-start-1 md:col-start-2">
					<h4 className="text-2xl mb-2">{project.name}</h4>
					<p className="mb-4">{project.description}</p>
					<p className="text-lg text-gray-300 text-center">
					{project.link ? (
						<a href={project.link} target="_blank" rel="noreferrer" className="text-lg text-accent text-center hover:border-b transition-all duration-150 ease-in-out hover:border-b-accent">
							Link to the project
						</a>
					) : (
						"Not Avalible"
					)}
					</p>
				</div>
			</div>
		</div>
	);
};
