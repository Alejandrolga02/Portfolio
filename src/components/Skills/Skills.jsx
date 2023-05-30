import { HardSkills } from "./HardSkills";
import { SoftSkills } from "./SoftSkills";

export const Skills = () => {
	return (
		<div className="skills-container">
			<h3 className="heading" id="skills">
				My <span className="text-accent">Skills</span>
			</h3>
			<div className="grid grid-cols-1 gap-4">
				<HardSkills />
				<SoftSkills />
			</div>
		</div>
	);
};
