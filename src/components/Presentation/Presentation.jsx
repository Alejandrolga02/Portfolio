import { GitHub } from "../Icons/GitHub";
import { Linkedin } from "../Icons/Linkedin";

export const Presentation = () => {
	return (
		<main className="container">
			<div className="presentation-container">
				<section className="text-slate-100">
					<p className="text-xl mb-4">Hello <span className="text-accent">I am</span></p>
					<h2 className="text-5xl font-bold text-accent mb-2">Alejandro Lizárraga</h2>
					<h1 className="text-2xl mb-6">A Front-End Web Developer</h1>
					<p className="mb-2">Hi! I am a junior front-end web developer constantly looking for new opportunities to learn and grow professionally. I am excited to join a company that fosters personal and professional development, and allows me to continue acquiring new skills and knowledge in the field of web development. I am passionate, decisive and committed to providing quality web solutions.</p>
					<GitHub />
					<Linkedin />
				</section>
				<section className="presentation-image-container">
					<img src="/presentation-banner.svg" className="presentation-image" alt="typing banner" />
					<a href="https://storyset.com/work" className="presentation-credit">
						Work illustrations by Storyset
					</a>
				</section>
			</div>
		</main>
	);
};
