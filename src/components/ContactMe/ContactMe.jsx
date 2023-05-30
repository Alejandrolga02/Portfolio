import { AiOutlineArrowUp } from 'react-icons/ai';
import { CV } from "../Icons/CV";
import { GitHub } from "../Icons/GitHub";
import { Linkedin } from "../Icons/Linkedin";

export const ContactMe = () => {
	return (
		<div className="contact-container">
			<h5 className="contact-heading" id="contactMe">
				Contact <span className="text-accent">me</span>
			</h5>
			<div className="contact-content">
				<h6>
					View my <span className="text-accent text-xl">social networks</span> here:
				</h6>
				<div className="contact-links">
					<p className="contact-link">GitHub: <GitHub  /></p>
					<p className="contact-link">Linkedin: <Linkedin /></p>
					<p className="contact-link">My CV: <CV /></p>
					<p className="contact-link">Mail: <a target="_blank" rel='noreferrer' href="mailto:alejandroivanliza@gmail.com" className="hover:shadow-filter hover:text-accent font-bold transition-all duration-300">alejandroivanliza@gmail.com</a></p>
				</div>
				<a className="contact-button" href="#presentation">
					<AiOutlineArrowUp />
				</a>
			</div>
		</div>
	);
};
