import { Skill } from "./Skill";

export const SoftSkills = () => {
	return (
		<div>
			<h4 className="text-xl"><span className="text-accent">Soft</span> Skills</h4>
			<div className="skillsList-container">
				<Skill name="Communicative" icon="/communication.svg" />
				<Skill name="Commitment" icon="/determination.svg" />
				<Skill name="Problem-solving" icon="/problemSolving.svg" />
				<Skill name="Team Work" icon="/teamWork.svg" />
				<Skill name="Time management" icon="/timeManagement.svg" />
				<Skill name="Attention to Detail" icon="/attentionDetail.svg" />
				<Skill name="Critical Thinking" icon="/criticalThinking.svg" />
				<Skill name="Adaptability" icon="/adaptability.svg" />
			</div>
		</div>
	);
};
