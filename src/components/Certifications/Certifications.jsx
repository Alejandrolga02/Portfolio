import { CertificationList } from "./CertificationList";

export const Certifications = () => {
	return (
		<div className="certifications-container">
			<h3 className="heading">
				My <span className="text-accent">Certifications</span>
			</h3>
			<CertificationList />
		</div>
	);
};
