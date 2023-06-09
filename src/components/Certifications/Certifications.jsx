import { CertificationList } from "./CertificationList";

export const Certifications = () => {
	return (
		<div className="certifications-container">
			<h3 className="heading" id="certifications">
				My <span className="text-accent">Certifications</span>
			</h3>
			<CertificationList />
		</div>
	);
};
