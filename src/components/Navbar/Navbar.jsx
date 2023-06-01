import { useCallback, useRef } from "react";

import 'animate.css';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { HiCode } from "react-icons/hi";

import { NavItem } from "./NavItem";

export const Navbar = () => {
	const menuContainer = useRef(null);
	const buttonContainer = useRef(null);

	const handleMenuButton = useCallback(() => {
			menuContainer.current.classList.toggle("hidden-mobile");
	}, []);

	const closeNavbarMobile = useCallback(() => {
		menuContainer.current.classList.add("hidden-mobile");
	}, []);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<h1 className="navbar-title">
					<a href="#" className="navbar-header">
						<HiCode className="mr-2" size="2rem" />
						Alejandro Lizarraga
					</a>
				</h1>
				<div ref={buttonContainer} className="items-center hidden-desktop">
					<button aria-label="Toggle Navbar" onClick={() => handleMenuButton()}>
						<AiOutlineMenuUnfold size="2rem" className="hover-accent" />
					</button>
				</div>
			</div>
			<ul ref={menuContainer} className="navbar-content hidden-mobile animate__animated animate__fadeInDownBig ">
				<NavItem handleClose={closeNavbarMobile} link="#presentation" title="Home" />
				<NavItem handleClose={closeNavbarMobile} link="#projects" title="Projects" />
				<NavItem handleClose={closeNavbarMobile} link="#skills" title="Skills" />
				<NavItem handleClose={closeNavbarMobile} link="#certifications" title="Certifications" />
				<NavItem handleClose={closeNavbarMobile} link="#contactMe" title="Contact Me" />
			</ul>
		</nav>
	);
};
