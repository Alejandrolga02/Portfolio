import { useCallback, useRef } from "react";
import { AiOutlineMenuUnfold, HiCode } from "react-icons/all";

export const Navbar = () => {
	const menuContainer = useRef(null);
	const buttonContainer = useRef(null);
	const handleMenuButton = useCallback(() => {
		if (menuContainer.current.className === "navbar-content") {
			menuContainer.current.className = "hidden";
		} else {
			menuContainer.current.className = "navbar-content";
		}
	}, []);

	return (
		<nav className="bg-primary text-slate-100 flex flex-col justify-between items-center px-4 py-2">
			<div className="w-full flex justify-between items-center">
				<h1 className="navbar-title">
					<a href="#" className="navbar-header">
						<HiCode className="inline mr-2" size="2rem" />
						Alejandro Lizarraga
					</a>
				</h1>
				<div ref={buttonContainer} className="flex items-center">
					<button>
						<AiOutlineMenuUnfold onClick={() => handleMenuButton()} size="2rem" className="hover-accent" />
					</button>
				</div>
			</div>
			<ul ref={menuContainer} className="hidden">
				<li className="navbar-item hover-accent">
					<a href="#">Test</a>
				</li>
				<li className="navbar-item hover-accent">
					<a href="#">Test</a>
				</li>
				<li className="navbar-item hover-accent">
					<a href="#">Test</a>
				</li>
				<li className="navbar-item hover-accent">
					<a href="#">Test</a>
				</li>
			</ul>
		</nav>
	);
};
