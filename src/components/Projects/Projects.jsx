import { useEffect, useState } from "react";

import { projects } from "../../data/projects";
import { useCallback } from "react";
import { Project } from "./Project";

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
		}, 6000);

		return () => {
			clearTimeout(nextSlideTimeout);
		};
	}, [handleNext]);

	return (
		<div className="container text-slate-100 py-8">
			<h3 className="heading" id="projects">
				My <span className="text-accent">Projects</span>
			</h3>
			<div className="flex flex-row justify-around gap-4 mb-4">
				<button onClick={handlePrevious} className="border-2 border-purple-600 w-full py-2 hover:bg-purple-600 transition-all duration-500 ease-in-out max-w-[200px] shadow-lg shadow-pink-400">
					PREVIOUS
				</button>
				<button onClick={handleNext} className="border-2 border-purple-600 w-full py-2 hover:bg-purple-600 transition-all duration-500 ease-in-out max-w-[200px] shadow-lg shadow-pink-400">
					NEXT
				</button>
			</div>
			<Project key={project.link} {...project} />
		</div>
	);
};
