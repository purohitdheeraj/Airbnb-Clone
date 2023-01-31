import React from "react";
import logo from "../assets/logo-airbnb.png";

function Header() {
	return (
		<header className="header">
			<img src={logo} alt="airbnb-logo" />
		</header>
	);
}

export default Header;
