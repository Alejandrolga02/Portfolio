import { Skill } from "./Skill";

export const HardSkills = () => {
	return (
		<div>
			<h4><span className="text-accent text-xl">Hard</span> Skills</h4>
			<div className="skillsList-container">
				<Skill name="Javascript" icon="/js.svg"/>
				<Skill name="Express" icon="/express.svg"/>
				<Skill name="React" icon="/react.svg"/>
				<Skill name="CSS" icon="/css.svg"/>
				<Skill name="Bootstrap" icon="/bootstrap.svg"/>
				<Skill name="TailwindCSS" icon="/tailwind.svg"/>
				<Skill name="Git" icon="/git.svg"/>
				<Skill name="MySQL" icon="/mysql.svg"/>
				<Skill name="AWS" icon="/aws.svg"/>
				<Skill name="Firebase" icon="/firebase.svg"/>
				<Skill name="Azure" icon="/azure.svg"/>
			</div>
		</div>
	);
};
