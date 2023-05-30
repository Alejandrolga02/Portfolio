import { Certifications } from "./components/Certifications/Certifications";
import { ContactMe } from "./components/ContactMe/ContactMe";
import { Navbar } from "./components/Navbar/navbar";
import { Presentation } from "./components/Presentation/Presentation";
import { Skills } from "./components/Skills/Skills";

export const App = () => {
	return (
		<>
			<Navbar />

			<div className="bg-primary">
				<Presentation />
			</div>

			<div className="bg-secondary">
				<Certifications />
			</div>

			<div className="bg-primary">
				<Skills />
			</div>

			<div className="bg-secondary">
				<Certifications />
			</div>

			<div className="bg-primary">
				<ContactMe />
			</div>
		</>
	);
};
