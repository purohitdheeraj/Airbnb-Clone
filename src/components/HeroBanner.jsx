import React from "react";
import heroImage from "../assets/hero-img.png";

function HeroBanner() {
	return (
		<section className="hero-section">
			<img
				className="hero-img"
				src={heroImage}
				alt="banner"
			/>
		</section>
	);
}

export default HeroBanner;
