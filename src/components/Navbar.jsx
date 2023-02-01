import React from "react";
import logo from "/assets/logo-airbnb.png";

function Navbar() {
	return (
		<nav className="navbar">
			<img
				src={logo}
				alt="airbnb-logo"
				className="navbar-logo"
			/>
		</nav>
	);
}

export default Navbar;
